#!/usr/bin/env bash

echo ">>> Setting up the database"
mysql -uroot -ppassword <setup.sql >/dev/null

file="ddl.sql"
echo ">>> Creating tables using the file '($file)'"
mysql -uspark sparkdb <$file >/dev/null

file="dml.sql"
echo ">>> Inserting into all the tables using the file '($file)'"
mysql -uspark sparkdb <$file >/dev/null

file="ddl_views.sql"
echo ">>> Creating views using the file '($file)'"
mysql -uspark sparkdb <$file >/dev/null

file="ddl_procedure.sql"
echo ">>> Creating procedure using the file '($file)'"
mysql -uspark sparkdb <$file >/dev/null

# regex replace every line upto first comma with 1 to 683

sed -n '2,683p' ddl.sql | grep -E '^1' >/dev/null
