// server/index.js

const express = require('express'),
  app = express(),
  mysql = require('mysql'), // import mysql module
  cors = require('cors'),
  bodyParser = require('body-parser');

// setup database
db = mysql.createConnection({
	  host: "107.180.41.89",
	  user: "seatoadDBTester",
	  password: "test123",
	  database: "TestBackendUser"
	});

// make server object that contain port property and the value for our server.
var server = {
  port: 4040
};

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// routers
const usersRouter = require('./routes/users');
// use the modules
app.use(cors())
app.use(bodyParser.json());
// use router
app.use('/users', usersRouter);

app.listen( server.port , () => console.log(`Server started, listening on port: ${server.port}`));