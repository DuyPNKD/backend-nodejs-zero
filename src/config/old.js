require("dotenv").config(); // muốn sử dụng biến môi trường thì cài cái này vào
const mysql = require("mysql2"); // Get the client

// Create the connection to database
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT, //default:: 3306
    user: process.env.DB_USER, //default: empty
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

module.exports = connection;
