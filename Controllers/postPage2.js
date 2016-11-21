var express = require('express'),
    router = express.Router(),
    fs     = require('fs'),
    _      = require('underscore'),
    db     = require('../db.js'); // get item from db

// this root means /postPage, which is inside the postPge route
router.get('/',(req, res)=>{
  res.render('postPage2');
});

/* handle request from post.ejs
   this will be the subroute of secondPagePost
  */
router.post('/secondPagePost',(req,res) => {

  console.log(req.body);
  requestBody = req.body;

  json = {}
  /* get the q from the list of body */
  q1 = requestBody.q1;
  q2 = requestBody.q2;
  description = requestBody.description;

  /* search for the type */
  if(q1[0] === "hire"){
    json.type = "I want to hire someone";
  } else {
    json.type= "I have a service to offer";
  }
  json.title = q1[1];

  json.name = q2[0];
  json.email = q2[1];
  json.phone = q2[2];
  json.city = q2[3];
  json.info = description;

  console.log(json);



  /* creating an item of table in the database */
  // if(req.body.type){
    db.post.create(json).then(function(data){
      console.log('Herer');
      return res.redirect('/secondPage');
      // console.log("it gets through here");
      // res.redirect('/secondPage');
    }).catch(function(e){
      console.log(e);
      return res.status(404).send('ErrorPage'); // render an error page
    });
  // }

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
