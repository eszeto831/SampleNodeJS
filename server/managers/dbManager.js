class DBManager {
    constructor() {
    	/*
        var mysql = require('mysql');

		var con = mysql.createConnection({
		  host: "107.180.41.89",
		  user: "seatoadDBTester",
		  password: "test123",
 		  database: "TestBackendUser"
		});
		*/
    } // END constructor

    getUsers() {
        console.log("db man get users");
/*
		con.connect(function(err) {
		  if (err) throw err;
		  con.query("SELECT * FROM Users", function (err, result, fields) {
		    if (err) throw err;
		    console.log(result);
		  });
		});

        return result;
        */
        return ["user1", "user2"];
    }
}
 
module.exports = DBManager;