from datetime import datetime

def index():    
    if session.status=="" or session.status==None:
        session.clear()
        redirect(URL(c='login',f='index'))
    return locals()
