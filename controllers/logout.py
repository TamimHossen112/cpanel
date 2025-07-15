def index():
    session.clear()  
    redirect(URL(c='login',f='index'))
    return locals()