var express = require('express'),
    router  = express.Router();

var secondPage = require('./secondPage.js');
var searchPost = require('./searchPost.js');
var postPage2 = require('./postPage2.js');



router.use('/secondPage', secondPage);
router.use('/postPage2', postPage2);
router.use('/searchPost', searchPost);

router.get('/', (req, res)=>{
  // res.send('Hello Mo better!!');
  res.render("frontPage2");
});


router.get('/frontPage', (req, res)=>{
  // res.send('Hello Mo better!!');
  // render if it goes to frontPage
  res.render("frontPage",{
    ab_test: true
  });
});

router.get('/frontPage2', (req, res)=>{
  // res.send('Hello Mo better!!');
  // render if it goes to frontPage2 with true, but it is in the same page
  // frontPage.ejs
  res.render("frontPage",{
    ab_test: false
  });
});






module.exports = router;
