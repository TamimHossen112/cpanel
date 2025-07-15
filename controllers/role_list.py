def index():
    if session.status=="" or session.status==None:
        redirect(URL(c='login',f='index'))

    isSearch = False
    if  request.vars.cid != None and request.vars.cid != '':
        isSearch = True
    if  request.vars.role_id != None and request.vars.role_id !='':
        isSearch = True
    
    sql = """
    SELECT * from business_units 
    """
    business_units = db.executesql(sql, as_dict=True) 
    
    sql = """
    SELECT * from projects
    """
    project_lists = db.executesql(sql, as_dict=True)
    
    sql = """
    SELECT * from u_roles
    """
    role_lists = db.executesql(sql, as_dict=True) 
    return locals()

def create():
    if session.status=="" or session.status==None:
        redirect(URL(c='login',f='index'))
    # if session.emp_role in ['management','unit_management']:
    #     return "Access Denied"
    sql = """
    SELECT * from business_units 
    """
    business_units = db.executesql(sql, as_dict=True)
    
    sql = """
    SELECT * from projects
    """
    project_lists = db.executesql(sql, as_dict=True)
    
    return locals()


def submit():
    if session.status=="" or session.status==None:
        redirect(URL(c='login',f='index'))
    
    cid = request.vars.cid
    project_name = request.vars.project_name
    role_name = request.vars.role_name
    role_description = request.vars.role_description
    if request.vars.status is not None:
        status = str(request.vars.status)
    else:
        status = "0"
    # validation
    errors =[]
    if not cid:
        errors.append('SBU is required.')
    if not project_name:
        errors.append('Project Name is required.')
        
    if not role_name:
        errors.append('Role Name is required.')

    # validation errors generate
    if errors:
        msg = ''
        for item in errors:
            msg = msg + item + ' <br>'
        session.flash = {"msg_type":"error","msg":msg}
        redirect (URL('role_list','create'))
    # validation end
    
    role_name=str(role_name).lower()
    role_name=role_name.replace(" ","_")
    
    old_role=db((db.u_roles.role_name==str(role_name))).select()
    if len(old_role) > 0:
        session.flash = {"msg_type":"error","msg":"Role is Duplicate"}
        redirect (URL('role_list','create'))
    
    db.u_roles.insert(
            cid=str(cid),
            pid=str(project_name),
            role_name=str(role_name),
            role_description=str(role_description),
            status=str(status),
            )
    
    #user log entry
    task_name='Role List'
    activity='Create'
    # user_log(task_name,activity)    
    return  dict(redirect(URL('role_list','index')))
    
def edit():
    if session.status=="" or session.status==None:
        redirect(URL(c='login',f='index'))

    # if session.emp_role in ['management','unit_management']:
    #     return "Access Denied"

    if request.args(0):        
        roles=db(db.u_roles.id==request.args(0)).select().first()
        
        sql = """
        SELECT * from business_units where sbu_name="TCL"
        """
        business_units = db.executesql(sql, as_dict=True)
        
        sql = """
        SELECT * from projects
        """
        project_lists = db.executesql(sql, as_dict=True)
        return dict(roles=roles,business_units=business_units, project_lists=project_lists)

def update():
    if session.status=="" or session.status==None:
        redirect(URL(c='login',f='index'))        

    cid = request.vars.cid
    project_name = request.vars.project_name
    role_name = request.vars.role_name
    role_description = request.vars.role_description
    if request.vars.status is not None:
        status = str(request.vars.status)
    else:
        status = "0"
    # validation
    errors =[]
    if not cid:
        errors.append('SBU is required.')
    if not project_name:
        errors.append('Project Name is required.')
    if not role_name:
        errors.append('Role Name is required.')

    # validation errors generate
    if errors:
        msg = ''
        for item in errors:
            msg = msg + item + ' <br>'
        session.flash = {"msg_type":"error","msg":msg}
        redirect (URL('role_list','edit',args=request.args(0)))
    # validation end
    
    roles=db(db.u_roles.id==request.args(0)).select().first()
    
    role_name=str(role_name).lower()
    role_name=role_name.replace(" ","_")
    
    old_role=db((db.u_roles.role_name==str(role_name)) & (db.u_roles.id!=request.args(0))).select()
    if len(old_role) > 0:
        session.flash = {"msg_type":"error","msg":"Role is Duplicate"}
        redirect (URL('role_list','edit',args=request.args(0)))

    roles.update_record(
        cid=str(cid),
        pid=str(project_name),
        role_name=str(role_name),
        role_description=str(role_description),
        status=str(status),
        )
    
    #user log entry
    task_name='Role List'
    activity='Update'
    # user_log(task_name,activity)        
    return  dict(redirect(URL('role_list','index')))  

## delete start##
def delete():
    if session.status=="" or session.status==None:
        redirect(URL(c='login',f='index'))
    
    if request.args(0):
        role_tasks=db(db.u_role_has_tasks.role_id==request.args(0)).select()
        if len(role_tasks) > 0:
            session.flash = {"msg_type":"error","msg":"Role Already Used!"}
            redirect(URL('role_list','index'))
            
        session.flash = {"msg_type":"error","msg":"Information Deleted"}
        db(db.u_roles.id==request.args(0)).delete()
        #user log entry
        task_name='Role List'
        activity='Delete'
        # user_log(task_name,activity) 
        return dict(redirect(URL('role_list','index'))) 
    ## delete end##

def get_data():
    if session.status=="" or session.status==None:
        redirect(URL(c='login',f='index'))
        #Search Start##
    conditions = ""
    if  request.vars.cid != None and request.vars.cid != '':
        cid = str(request.vars.cid)
        conditions += " and cid = '"+cid+"'"
        
    if  request.vars.project_name != None and request.vars.project_name != '':
        project_name = str(request.vars.project_name)
        conditions += " and pid = '"+project_name+"'"
        
    if  request.vars.role_id != None and request.vars.role_id !='':
        id = str(request.vars.role_id)
        conditions = conditions +" and id = '"+id+"'"
    
        #Search End## 

    ##Paginate Start##
    total_result = db.executesql("SELECT count(id) as total_row from u_roles WHERE 1" +conditions, as_dict=True)
    total_rows = total_result[0]['total_row'] if total_result else 0
    
    page = int(request.vars.page or 1)
    rows_per_page = int(request.vars.rows_per_page or 10)
    if rows_per_page == -1:
            rows_per_page = total_rows
    start = (page - 1) * rows_per_page         
    end = rows_per_page
    ##Paginate End##

        ##Ordering Start##
    sort_column_index = int(request.vars['order[0][column]'] or 0)
    if sort_column_index == 0:
            sort_column_index = 1 #defult sorting column define
    sort_column_name = request.vars['columns[' + str(sort_column_index) + '][data]']
    sort_direction = request.vars['order[0][dir]']
        ##Ordering End##

    ##Querry Start##
    sql = """
    SELECT * from u_roles
    WHERE 1 
    """+conditions+""" ORDER BY """+sort_column_name+""" """+sort_direction+""" LIMIT """+str(start)+""","""+str(end)+""";
    """
    data = db.executesql(sql, as_dict=True)
    ##Qurry End##

    return dict(data=data, total_rows=total_rows,recordsFiltered=total_rows,recordsTotal=total_rows,sort_column_name=sort_column_name)


def role_has_task():
    if session.status=="" or session.status==None:
        redirect(URL(c='login',f='index'))
    # if session.emp_role in ['management','unit_management']:
    #     return "Access Denied"
    sql = """
    SELECT * from business_units where sbu_name="TCL"
    """
    business_units = db.executesql(sql, as_dict=True)
    if request.args(0):        
        roles=db(db.u_roles.id==request.args(0)).select().first()
        
        tasks=db(db.u_tasks.status==1).select(orderby=db.u_tasks.task_name)
        fin_task_list=[]
        group_list=[]
        for rRow in range(len(tasks)):
            taskStr = tasks[rRow] 
            group=str(taskStr['group_name'])
            if group not in group_list:
                group_list.append(group)
                
        for i in range(len(group_list)):
            task_list=[]
            for rRow in range(len(tasks)):
                tasksStr = tasks[rRow]
                if str(tasksStr['group_name'])==str(group_list[i]):     
                    task_Dict={
                        'task_id':str(tasksStr['id']),
                        'task_name':str(tasksStr['task_name'])
                    }
                    task_list.append(task_Dict)
            
            finDict={'group_name':str(group_list[i]),'task_list':task_list}
            fin_task_list.append(finDict)
        #selected task
        role_tasks=db(db.u_role_has_tasks.role_id==request.args(0)).select()        
        role_task_list=[]
        if len(role_tasks)> 0:                
            for rRow in range(len(role_tasks)):
                role_taskStr = role_tasks[rRow] 
                role_task_list.append(str(role_taskStr['task_id']))
        
    return locals()

def role_has_task_submit():
    if session.status=="" or session.status==None:
        redirect(URL(c='login',f='index'))
    
    cid = request.vars.cid
    role_id = request.vars.role_id
    role_name = request.vars.role_name
    # validation
    errors =[]
    if not cid:
        errors.append('SBU is required.')
    if not role_name:
        errors.append('Role Name is required.')

    # validation errors generate
    if errors:
        msg = ''
        for item in errors:
            msg = msg + item + ' <br>'
        session.flash = {"msg_type":"error","msg":msg}
        redirect (URL('role_list','role_has_task',args=request.args(0)))
        
    # validation end
    if 'task_ids[]' not in request.vars or request.vars['task_ids[]'] == "":
        session.flash = {"msg_type":"error","msg":"Task are required"}
        redirect (URL('role_list','role_has_task',args=request.args(0)))
    
    task_ids = request.vars.getlist('task_ids[]')
    
    role_task_list=[]
    task_id=''
    task_name=''
    for index in range(len(task_ids)):  
        full_task=str(task_ids[index]).split('||')
        task_id=str(full_task[0])       
        task_name=str(full_task[1])       
        role_task_list.append({
            'cid':str(cid),
            'role_id':str(role_id),
            'role_name':str(role_name),            
            'task_id': str(task_id),
            'task_name': str(task_name)
        })
    
    
    db(db.u_role_has_tasks.role_id==str(role_id)).delete()
    
    db.u_role_has_tasks.bulk_insert(role_task_list)
    db.commit()
    
    #user log entry
    task_name='Role Has List'
    activity='Create'
    # user_log(task_name,activity)    
    return  dict(redirect(URL('role_list','index')))
 