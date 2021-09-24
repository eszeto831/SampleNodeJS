const express = require('express'),
  router = express.Router();

// get user lists
router.get('/', function(req, res) {
  res.json({
      status: 200,
      message: "User api"
    })
});


// get user lists
router.get('/list', function(req, res) {
  let sql = `SELECT * FROM Users`;
  db.query(sql, function(err, data, fields) {
    if (err)
    {
      res.json({
        status: 200,
        message: "Error: "+err.message+" "+err.json
      })
    }
    res.json({
      status: 200,
      data,
      message: "User lists retrieved successfully"
    })
  })
});

module.exports = router;