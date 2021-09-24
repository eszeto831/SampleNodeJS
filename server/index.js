// server/index.js

const path = require('path');
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
  port: process.env.PORT || 3001
};

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// routers
const usersRouter = require('./routes/users');
const gameDataRouter = require('./routes/gameData');
// use the modules
app.use(cors())
app.use(bodyParser.json());
// use router
app.use('/api/users', usersRouter);
app.use('/api/gameData', gameDataRouter);

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen( server.port , () => console.log(`Server started, listening on port: ${server.port}`));