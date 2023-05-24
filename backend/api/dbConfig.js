const mysql = require("mysql");

const connection = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password
});

connection.connect(function(err) {
    if(err) throw err;
    console.log("Connected!");
    connection.query(mysql, function (err, result) {
        if (err) throw err;
        console.log("Result: " + result);
      });
});