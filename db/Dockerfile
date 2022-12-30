FROM mysql:8.0.13

ENV MYSQL_ROOT_PASSWORD=password
ENV MYSQL_DATABASE=sparkdb
ENV MYSQL_USER=spark
ENV MYSQL_PASSWORD=password


COPY ./backup.sql /docker-entrypoint-initdb.d/backup.sql

