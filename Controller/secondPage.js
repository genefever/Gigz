var fs = require('fs'),
    express = require('express'),
    router = express.Router(),
    _      = require('underscore'),
    db     = require('../db.js');


/* route to the /secondPage it will parse the JSON and get render the page */
router.get('/',(req,res) => {
  /* get the item from the database */
  db.post.all().then((posts)=>{
    console.log(posts); // what will the post be
    res.render('secondPage',{
      lists: posts // get the array of hte post list
    });
  });
  var contents = fs.readFileSync("info.json");
  var jsonContent = JSON.parse(contents);
  res.render('secondPage',{
    lists : jsonContent.lists // get the array of list from the json Object
  });
  searches = [];
});


router.get('/searchPost',(req, res)=>{
  var query = req.params.search1;
  /* search through all the post in the db */
  db.post.findAll({
    where:{
      $or:[
        {
          title:{
            $like: query
          }
        },
        {
          type:{
            $like:query
          }
        },
        {
          category:{
            $like:query
          }
        },
        {
          city:{
            $like:query
          }
        },{
          info:{
            $like: query
          }
        }
      ]
    }
}).then((posts) => {
  res.render('secondPage',{
    lists: posts
  });
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
