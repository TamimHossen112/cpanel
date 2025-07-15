def index():
    task_id='role_management'
    access_permission=check_role(task_id)  
    if ((access_permission==False)):
        session.flash = {"msg_type":"error","msg":"Access is Denied !"}
        redirect (URL('default','index'))
    # if session.status=="" or session.status==None:
    #     redirect(URL(c='login',f='index'))

    isSearch = False
    if  request.vars.cid != None and request.vars.cid != '':
        isSearch = True
    if  request.vars.task_id != None and request.vars.task_id !='':
        isSearch = True
    
    sql = """
    SELECT * from business_units where sbu_name="TCL"
    """
    business_units = db.executesql(sql, as_dict=True) 
    
    sql = """
    SELECT * from u_tasks
    """
    task_lists = db.executesql(sql, as_dict=True) 
    return locals()

def create():
    task_id='role_management'
    access_permission=check_role(task_id)  
    if ((access_permission==False)):
        session.flash = {"msg_type":"error","msg":"Access is Denied !"}
        redirect (URL('default','index'))
    # if session.status=="" or session.status==None:
    #     redirect(URL(c='login',f='index'))
    # if session.emp_role in ['management','unit_management']:
    #     return "Access Denied"
    sql = """
    SELECT * from business_units where sbu_name="TCL"
    """
    business_units = db.executesql(sql, as_dict=True)
    sql = """
    SELECT * from u_task_group where cid="TCL"
    """
    task_groups = db.executesql(sql, as_dict=True)
    return locals()

def submit():
    task_id='role_management'
    access_permission=check_role(task_id)  
    if ((access_permission==False)):
        session.flash = {"msg_type":"error","msg":"Access is Denied !"}
        redirect (URL('default','index'))
    # if session.status=="" or session.status==None:
    #     redirect(URL(c='login',f='index'))
    
    cid = request.vars.cid
    group_id = request.vars.group_id
    task_name = request.vars.task_name
    task_description = request.vars.task_description
    if request.vars.status is not None:
        status = str(request.vars.status)
    else:
        status = "0"
    # validation
    errors =[]
    if not cid:
        errors.append('SBU is required.')
    if not group_id:
        errors.append('Group Name is required.')
    if not task_name:
        errors.append('Task Name is required.')

    # validation errors generate
    if errors:
        msg = ''
        for item in errors:
            msg = msg + item + ' <br>'
        session.flash = {"msg_type":"error","msg":msg}
        redirect (URL('task_list','create'))
    # validation end
    task_name=str(task_name).lower()
    task_name=str(task_name).replace(' ','_')
    
    group=str(group_id).split('||')
    group_id=str(group[0])
    group_name=str(group[1])
    
    old_task=db((db.u_tasks.task_name==str(task_name))).select()
    if len(old_task) > 0:
        session.flash = {"msg_type":"error","msg":"Task Name is Duplicate"}
        redirect (URL('task_list','create'))
        
    db.u_tasks.insert(
            cid=str(cid),
            task_name=str(task_name),
            task_description=str(task_description),
            group_id=str(group_id),
            group_name=str(group_name),
            status=str(status),
            )
    
    #user log entry
    task_name='Task List'
    activity='Create'
    # user_log(task_name,activity)    
    return  dict(redirect(URL('task_list','index')))
    
def edit():
    task_id='role_management'
    access_permission=check_role(task_id)  
    if ((access_permission==False)):
        session.flash = {"msg_type":"error","msg":"Access is Denied !"}
        redirect (URL('default','index'))
    # if session.status=="" or session.status==None:
    #     redirect(URL(c='login',f='index'))

    # if session.emp_role in ['management','unit_management']:
    #     return "Access Denied"

    if request.args(0):        
        tasks=db(db.u_tasks.id==request.args(0)).select().first()
        
        sql = """
        SELECT * from business_units where sbu_name="TCL"
        """
        business_units = db.executesql(sql, as_dict=True)
        sql = """
        SELECT * from u_task_group where cid="TCL"
        """
        task_groups = db.executesql(sql, as_dict=True)
        return dict(tasks=tasks,task_groups=task_groups,business_units=business_units)

def update():
    task_id='role_management'
    access_permission=check_role(task_id)  
    if ((access_permission==False)):
        session.flash = {"msg_type":"error","msg":"Access is Denied !"}
        redirect (URL('default','index'))
    # if session.status=="" or session.status==None:
    #     redirect(URL(c='login',f='index'))
        

    cid = request.vars.cid
    group_id = request.vars.group_id
    task_name = request.vars.task_name
    task_description = request.vars.task_description
    if request.vars.status is not None:
        status = str(request.vars.status)
    else:
        status = "0"
    # validation
    errors =[]
    if not cid:
        errors.append('SBU is required.')
    if not group_id:
        errors.append('Group Name is required.')
    if not task_name:
        errors.append('Task Name is required.')

    # validation errors generate
    if errors:
        msg = ''
        for item in errors:
            msg = msg + item + ' <br>'
        session.flash = {"msg_type":"error","msg":msg}
        redirect (URL('task_list','edit',args=request.args(0)))
    # validation end
    
    tasks=db(db.u_tasks.id==request.args(0)).select().first()
    
    task_name=str(task_name).lower()
    task_name=str(task_name).replace(' ','_')
    
    group=str(group_id).split('||')
    group_id=str(group[0])
    group_name=str(group[1])
    
    old_task=db((db.u_tasks.task_name==str(task_name)) & (db.u_tasks.id!=request.args(0))).select()
    if len(old_task) > 0:
        session.flash = {"msg_type":"error","msg":"Task Name is Duplicate"}
        redirect (URL('task_list','edit',args=request.args(0)))

    tasks.update_record(
        cid=str(cid),
        task_name=str(task_name),
        task_description=str(task_description),
        group_id=str(group_id),
        group_name=str(group_name),
        status=str(status),
        )
    
    #user log entry
    task_name='Task List'
    activity='Update'
    # user_log(task_name,activity)        
    return  dict(redirect(URL('task_list','index')))  

## delete start##
def delete():
    task_id='role_management'
    access_permission=check_role(task_id)  
    if ((access_permission==False)):
        session.flash = {"msg_type":"error","msg":"Access is Denied !"}
        redirect (URL('default','index'))
    # if session.status=="" or session.status==None:
    #     redirect(URL(c='login',f='index'))

    # if session.emp_role in ['management','unit_management','unit_system_admin']:
    #         return "Access Denied"
    
    if request.args(0):
        role_tasks=db(db.u_role_has_tasks.task_id==request.args(0)).select()
        if len(role_tasks) > 0:
            session.flash = {"msg_type":"error","msg":"Task Already Used!"}
            redirect (URL('task_list','index'))
            
        session.flash = {"msg_type":"error","msg":"Information Deleted"}
        db(db.u_tasks.id==request.args(0)).delete()
        #user log entry
        task_name='Task List'
        activity='Delete'
        # user_log(task_name,activity) 
        return dict(redirect(URL('task_list','index'))) 
    ## delete end##



def get_data():
    task_id='role_management'
    access_permission=check_role(task_id)  
    if ((access_permission==False)):
        session.flash = {"msg_type":"error","msg":"Access is Denied !"}
        redirect (URL('default','index'))
    # if session.status=="" or session.status==None:
    #     redirect(URL(c='login',f='index'))
        #Search Start##
    conditions = ""
    if  request.vars.cid != None and request.vars.cid != '':
        cid = str(request.vars.cid)
        conditions += " and cid = '"+cid+"'"
    if  request.vars.task_id != None and request.vars.task_id !='':
        id = str(request.vars.task_id)
        conditions = conditions +" and id = '"+id+"'"
    
        #Search End## 

    ##Paginate Start##
    total_rows = len(db.executesql("SELECT * from u_tasks WHERE 1" +conditions, as_dict=True))
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
    SELECT * from u_tasks
    WHERE 1 
    """+conditions+""" ORDER BY """+sort_column_name+""" """+sort_direction+""" LIMIT """+str(start)+""","""+str(end)+""";
    """
    data = db.executesql(sql, as_dict=True)
        ##Qurry End##

    return dict(data=data, total_rows=total_rows,recordsFiltered=total_rows,recordsTotal=total_rows,sort_column_name=sort_column_name)







