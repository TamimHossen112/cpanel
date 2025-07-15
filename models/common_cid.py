import datetime
import urllib
db = DAL('mysql://root:@localhost/cpanel_rnd', decode_credentials=True)
date_fixed=datetime.datetime.now()+datetime.timedelta(hours=6)
