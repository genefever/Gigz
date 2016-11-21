var fs = require('fs'),
    express = require('express'),
    router = express.Router(),
    _      = require('underscore');
    // db     = require('../db.js');

router.get('/', (req,res)=>{
  var contents = fs.readFileSync("info.json");
  var jsonContent = JSON.parse(contents);
  res.render('secondPage',{

    lists : jsonContent.lists // get the array of list from the json Object
  });
  searches = [];
});


module.exports = router;
