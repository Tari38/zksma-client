const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "n1nlmysql31plsk.secureserver.net:3306",
    user: "sam_dor",
    password: "sam123"
});

connection.connect(function(err) {
    if(err) throw err;
    console.log("Connected!");
    connection.query(mysql, function (err, result) {
        if (err) throw err;
        console.log("Result: " + result);
      });
});