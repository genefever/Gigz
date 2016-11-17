var express = require('express'),
    router = express.Router(),
    fs     = require('fs'),
    _      = require('underscore'),
    db     = require('../db.js'); // get item from db

// this root means /postPage, which is inside the postPge route
router.get('/',(req, res)=>{
  res.render('postPage');
});

/* handle request from post.ejs
   this will be the subroute of secondPagePost
  */
router.post('/secondPagePost',(req,res) => {
  res.redirect('/secondPage');
  /* creating an item of table in the database */
  if(req.body.type){
    db.post.create(req.body).then(function(data){
      return res.status(200)
      // console.log("it gets through here");
      // res.redirect('/secondPage');
    }).catch(function(e){
      console.log(e);
      return res.status(404).send('ErrorPage'); // render an error page
    });
  }

  /* get the data from the json file and append it to the new one */
  // console.log(req.body);
  // fs.readFile('info.json',(err, data)=>{
  //   var jsonData = JSON.parse(data); // turn it into an object
  //   // console.log(jsonData);
  //   if(req.body.type){
  //     jsonData.lists.push(req.body);
  //   }
  //   fs.writeFile("info.json",JSON.stringify(jsonData), (err)=>{
  //     if(err) throw err;
  //     console.log("Data has already append to info.json!");
  //     res.redirect('/secondPage');
  //   });
  // });

});

module.exports = router;
