const express = require("express");
const db = require("./DB");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(cors());
app.get("/contacts/:id", async function (req, res) {
  const id = req.params.id;
  const user = await db.getUserById(id);
  return result[0];

  res.json({
    status: "OK",
    user: user,
  });
});

app.get("/contacts", async function (req, res) {
  const usersList = await db.getUsers();
  res.json({
    status: "OK",
    count: usersList.length,
    results: usersList,
  });
});

app.listen(port, function () {
  console.log(`listening on ${port}`);
});
