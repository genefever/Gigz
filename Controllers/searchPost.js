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
  // var queryParam = req.param('search1', null);
  var queryParam = req.query
  var search1 = queryParam.search1; // get the result from the search 1
  var location = queryParam.location;
  console.log(queryParam + 'queryParam' + search1 + ' : search1' + location + ' : location');

  // this is for the production or for development since sqlite and postgres has
  // various queries
  var where = (db.env === 'production') ? {
    $or:[
        {
         title:{$iLike : '%'+search1+'%'}
        },
        {
          type:{$iLike: '%'+search1+'%'}
        },
        {
          name:{$iLike: '%'+search1+'%'},
        },
        {
          city:{$iLike: '%'+search1+'%'},
        },
        {
          info:{$iLike: '%'+search1+'%'}
        }
    ]
  } : {
    $or:[
        {
         title:{$like : '%'+search1+'%'}
        },
        {
          type:{$like: '%'+search1+'%'}
        },
        {
          name:{$like: '%'+search1+'%'},
        },
        {
            city:{$like: '%'+search1+'%'},
        },
        {
          info:{$like: '%'+search1+'%'}
        }
    ]
  }

  if(location) {
    if(db.env === 'development'){
      where.city = {
        $like : '%' + location + '%'
      }
    } else {
    where.city = {
      $iLike: '%' + location + '%'
    }
  }
}

  // var contents = fs.readFileSync("info.json");
  // var jsonContent = JSON.parse(contents);
  // var abc = jsonContent.lists;
  // searchVal = searchVal.toLowerCase();

  // for (var i = 0; i < abc.length; i++) {
    // if((abc[i].title.toLowerCase()).includes(searchVal) || searchVal === "")
      // searches.push(abc[i]);
  // }
  db.post.findAll({
    where: where,
    order: '"createdAt" DESC' // find it all based on the created last to first
}).then((posts) => {
  console.log("get through here search successful! for searchPost.js");
  // console.log(res.json(posts));
  if(posts.length === 0){
    // res.redirect('/secondPage');
    return res.render('errorPage');
  } else {
    posts.forEach((post) => {
      console.log('This is the result of the search post');
      console.log(post);
    });
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
