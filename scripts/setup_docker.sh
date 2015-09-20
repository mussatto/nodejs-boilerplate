#!/bin/bash
docker run -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root -e MYSQL_USER=boilerplate -e MYSQL_PASSWORD=boilerplate -e MYSQL_DATABASE=boilerplate centurylink/mysql
