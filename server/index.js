// server/index.js

const express = require("express");
var DBManager = require('./managers/dbManager.js');
const dbManager = new DBManager();

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api/users/:userId", (req, res) => {
  res.json({ message: req.params.userId + " is cool" });
});

app.get("/api/users", (req, res) => {
  res.json({ message: dbManager.getUsers() });
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});