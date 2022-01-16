import mysql from "mysql2";

//Create a pooling connection
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'funk'
});

export default pool.promise();