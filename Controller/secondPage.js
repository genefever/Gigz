var fs = require('fs'),
    express = require('express'),
    router = express.Router(),
    _      = require('underscore'),
    db     = require('../db.js');


/* route to the /secondPage it will parse the JSON and get render the page */
router.get('/',(req,res) => {
  /* get the item from the database */
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
  //   lists : jsonContent.lists // get the array of list from the json Object
  // });
  // searches = [];
});


router.get('/searchPost',(req, res)=>{
  console.log("go through here");
  console.log(req.query);
  var queryParam = req.query.search1;
  console.log(queryParam);

  /* search through all the post in the db */
  db.post.findAll({
    where:{
      // $or:[
        // {
          title:queryParam
        // }
      //   {
      //     type:queryParam
      //   },
      //   {
      //     category:queryParam
      //   },
      //   {
      //     city:queryParam
      //   },{
      //     info:queryParam
      //   }
      // ]
    }
}).then((posts) => {
  console.log(posts);
  if(posts.length === 0){
    res.redirect('/secondPage');
    return res.status(404).send('no post is found');
  } else {
    res.render('secondPage',{
      lists: posts
    });
    return res.status(200);
  }

}).catch((e)=>{
  console.log("here");
  res.status(400).json(e);
});

  // var searchVal = req.param('search1', null);
  // var contents = fs.readFileSync("info.json");
  // var jsonContent = JSON.parse(contents);
  // var abc = jsonContent.lists;
  // searchVal = searchVal.toLowerCase();
  // for (var i = 0; i < abc.length; i++) {
  //   if((abc[i].title.toLowerCase()).includes(searchVal) || searchVal === "")
  //     searches.push(abc[i]);
  // }
  // res.render('secondPage',{
  //
  //    lists : searches// get the array of list from the json Object
  // });
  // searches = [];
});

module.exports = router
