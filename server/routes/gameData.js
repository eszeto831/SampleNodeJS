const express = require('express'),
  router = express.Router();

// get user lists
router.get('/', function(req, res) {
  res.json({
      status: 200,
      message: "GameData api"
    })
});


// get user lists
router.get('/:userId', function(req, res) {
  let sql = `SELECT * FROM GameData WHERE userid=`+req.params.userId;
  db.query(sql, function(err, data, fields) {
    if (err)
    {
      res.json({
        status: 200,
        message: "Error: "+err.message+" "+err.json,
        error:true
      })
    }
    res.json({
      status: 200,
      data,
      message: "User game data retrieved successfully",
      error:false
    })
  })
});

module.exports = router;