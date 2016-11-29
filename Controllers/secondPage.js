var fs = require('fs'),
    express = require('express'),
    router = express.Router(),
    _      = require('underscore'),
    db     = require('../db.js');

router.get('/', (req,res)=>{
  db.post.all().then((posts)=>{
    console.log("This is what the post will be");
    console.log(posts); // what will the post be
    res.render('secondPage',{
      lists: posts // get the array of the post list
    }, (err,html)=>{
      res.send(200,html); // show status quote
    });
  });
  // var contents = fs.readFileSync("info.json");
  // var jsonContent = JSON.parse(contents);
  // res.render('secondPage',{
  //
  //   lists : jsonContent.lists // get the array of list from the json Object
  // });
  // searches = [];
});




module.exports = router;
