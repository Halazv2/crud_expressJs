"use strict";

const mysql = require("mysql");

const dbConn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "crud_expressjs",
});

dbConn.connect(function (err) {
  if (err) throw err;
  console.log("Database is connected successfully !");
});

module.exports = dbConn;
