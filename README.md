Goals:
Learn NodeJS, how to make non-blocking calls and javascript.

Create NodeJS application / boilerplate, to be deployed on Openshift and that can be used in other servers too.
Must have a good test coverage.


libraries / frameworks:
express 4
bootstrap
sequelize
jquey
angularjs
nodejs
openshift
mocha tests
chai

--------------------------
in development, if you set environment NODE_ENV variable it skips the authentication
NODE_ENV=development

--------------------------

to run tests, in the root folder:
mocha

and to run specifics tests:
mocha -g 'admin'


TODO:
logging
all controllers should receive json
ejs to AngularJS


-------------------------

Sequelize if configured for a MySQL database

You can create the database using docker:
docker run -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root -e MYSQL_USER=boilerplate -e MYSQL_PASSWORD=boilerplate -e MYSQL_DATABASE=boilerplate centurylink/mysql
