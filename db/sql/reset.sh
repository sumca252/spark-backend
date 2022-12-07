#!/usr/bin/env bash

echo ">>> Setting up the database"
mysql -uroot -ppassword <setup.sql >/dev/null

file="ddl.sql"
echo ">>> Creating tables using the file '($file)'"
mysql -uspark sparkdb <$file >/dev/null

file="dml.sql"
echo ">>> Inserting into all the tables using the file '($file)'"
mysql -uspark sparkdb <$file >/dev/null
