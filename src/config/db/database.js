/**
 * Database configuration
 */
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    multipleStatements: true,
});

connection.connect((err) => {
    if (err) {
        console.log("Error connecting to database: ", err);
        return;
    }
    console.log("Database connection established");
});

module.exports = connection;
