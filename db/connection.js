var mysql = require('mysql');

var mysqlClient = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
});

mysqlClient.connect(function (err) {
    if (err)
        console.log(err);
    else
        console.log("Connected!");
});

module.exports = mysqlClient;