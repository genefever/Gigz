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


router.get('/frontPage2', (req, res)=>{
  // res.send('Hello Mo better!!');
  res.render("frontPage2");
});






module.exports = router;
