const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "root",
  database: "AddressBook",
});

async function getUserById(id) {
  const result = await connection
    .promise()
    .query("SELECT * FROM Contacts WHERE name = ?", [id]);
  return result[0];
}

async function getUsers() {
  const result = await connection.promise().query("SELECT * FROM Contacts");
  const rows = result[0];

  return rows;
}

module.exports = { getUserById, getUsers };
