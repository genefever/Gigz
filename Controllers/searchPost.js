var fs = require('fs'),
    express = require('express'),
    router = express.Router(),
    _      = require('underscore'),
    db     = require('../db.js');


/* route to the /secondPage it will parse the JSON and get render the page */
// router.get('/',(req,res) => {
//   /* get the item from the database */
//   db.post.all().then((posts)=>{
//     console.log("This is what the post will be");
//     console.log(posts); // what will the post be
//     res.render('secondPage',{
//       lists: posts // get the array of the post list
//     }, (err,html)=>{
//       res.send(200,html); // show status quote
//     });
//   });
//   // var contents = fs.readFileSync("info.json");
//   // var jsonContent = JSON.parse(contents);
//   // res.render('secondPage',{
//   //   lists : jsonContent.lists // get the array of list from the json Object
//   // });
//   // searches = [];
// });
// searches = [];
router.get('/',(req, res)=>{
  var queryParam = req.param('search1', null);
  console.log(queryParam + 'queryParam');
  // var contents = fs.readFileSync("info.json");
  // var jsonContent = JSON.parse(contents);
  // var abc = jsonContent.lists;
  // searchVal = searchVal.toLowerCase();

  // for (var i = 0; i < abc.length; i++) {
    // if((abc[i].title.toLowerCase()).includes(searchVal) || searchVal === "")
      // searches.push(abc[i]);
  // }
  db.post.findAll({
    where:{
      $or:[
          {
           title:{$like : '%'+queryParam+'%'}
          },
          {
            type:{$like: '%'+queryParam+'%'}
          },
          // {
          //   name:{$like: '%'+queryParam+'%'},
          // },
          {
            city:{$like: '%'+queryParam+'%'}
          },
          {
            info:{$like: '%'+queryParam+'%'}
          }
      ]
    }
}).then((posts) => {
  console.log("get through here search successful! for searchPost.js");
  // console.log(res.json(posts));
  if(posts.length === 0){
    // res.redirect('/secondPage');
    return res.redirect('/secondPage');
  } else {
    // res.render('secondPage',{
    //   lists: posts
    // });
    // console.log('herererere');
    return res.render('secondPage',{
       lists : posts// get the array of list from the json Object
    });
  }

}).catch((e)=>{
  console.log("here");
  res.status(400).json(e);
});

  // searches = [];
});



module.exports = router
