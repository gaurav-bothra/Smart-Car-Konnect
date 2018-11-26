let mysql = require('mysql');


require('dotenv').config();

let db = mysql.createConnection({
    user : process.env.DB_USER,
    password : process.env.DB_PORT,
    host : process.env.DB_HOST,
    port : process.env.DB_PORT,
    database : process.env.DB_NAME
});


db.connect((err) => {
    if(err) throw err;
    console.log('mysql connected.....');
});