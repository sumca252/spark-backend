DROP DATABASE IF EXISTS sparkdb;

CREATE DATABASE IF NOT EXISTS sparkdb;

USE sparkdb;

DROP USER IF EXISTS 'spark' @'%';

CREATE USER 'spark' @'%' IDENTIFIED WITH mysql_native_password BY 'password';

GRANT ALL PRIVILEGES ON *.* TO 'spark' @'%';

FLUSH PRIVILEGES;  

SET GLOBAL local_infile=1


