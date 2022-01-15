const mysql = require('mysql2');

//Create a pooling connection
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'funk'
});

module.exports = pool.promise();