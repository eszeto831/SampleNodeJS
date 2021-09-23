// server/index.js

const express = require("express"),
  app = express(),
  mysql = require('mysql'), // import mysql module
  cors = require('cors'),
  bodyParser = require('body-parser');

db = mysql.createConnection({
	  host: "107.180.41.89",
	  user: "seatoadDBTester",
	  password: "test123",
	  database: "TestBackendUser"
	});

const PORT = process.env.PORT || 3001;

// routers
const usersRouter = require('./routes/users');
// use the modules
app.use(cors())
app.use(bodyParser.json());

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// use router
app.use('api/users', usersRouter);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});