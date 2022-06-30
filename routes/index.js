var express = require('express');
var path=require('path')
var router = express.Router();
var mysql=require('../database/db');
/* GET home page. */




// router.get('/', function(req, res, next) {
//   //res.render('index', { title: 'Express' });
//   //res.send("<h2 style=color:blue align=center>Hello This is express developed by Reshma</h2>");

// });
router.get('/', function(req, res, next) {
      mysql.getConnection((err, connection) => {
       if(err) throw err;
          connection.query("select * from student", (err, rows) => {
          connection.release(); 
          if(err) throw err;
          res.render("datadisplay",{rows:rows, title:"Student Details"});
          //res.send(rows);
      });
  });

});

module.exports = router;