const express = require("express");
const app = express();
const port = 3000;
const mysql = require("mysql");
const path = require("path");

const connection = mysql.createConnection({
  server: "sql11.freemysqlhosting.net",
  port: 3306,
  user: "sql11680282",
  password: "xnlqsVnlfG",
  database: "sql11680282",
});

connection.connect(function (err) {
  if (err) {
    console.error("Error connecting to the database: " + err.stack);
    return;
  }

  console.log("Connected to the database as id " + connection.threadId);
});

app.use(express.json());

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
  console.log(`App started on ${port}`);
});
