const express = require("express");
const app = express();
const port = 3000;
const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "root",
  database: "AddressBook",
});
app.use(express.json());
const path = require("node:path");
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
  console.log(`App started on ${port}`);
});
