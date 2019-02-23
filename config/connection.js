//requiring mysql package 
const mysql = require("mysql");
//establishing the connection to mysql.
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burgers_db"
});


//error if function is not firing.
connection.connect(function(err){
if (err) {
    console.error("error connection: " + err.stack);
    return;
}
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;