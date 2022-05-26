##login
heroku login

##git
git add .
git commit -m ""
git push heroku main

##postgres login
heroku pg:psql

##connessione db
heroku pg:psql postgresql-elliptical-84982 --app dz-agri

{
##Host
ec2-3-228-235-79.compute-1.amazonaws.com
##Database
dcfamls0i56kdk
##User
avekyzvoqybvsj
##Port
5432
##Password
543e7d9aad6c1fe9dd86aa418419696c2ab1d05b02998ed8a747702d6d863f28
##URI
postgres://avekyzvoqybvsj:543e7d9aad6c1fe9dd86aa418419696c2ab1d05b02998ed8a747702d6d863f28@ec2-3-228-235-79.compute-1.amazonaws.com:5432/dcfamls0i56kdk
}

##change db name
- DB is named postgresql-loudly-9983
- attached to the app bumping-softly-6892
- rename it to stats-db 
- command: heroku addons:rename postgresql-loudly-9983 stats-db -a bumping-softly-6892

heroku addons:rename postgresql-elliptical-84982 db-dz-agri -a dz-agri

##vedere istanze in run
heroku ps

##Heroku git URL
https://git.heroku.com/dz-agri.git

##gestire dynos
heroku ps:scale web=1