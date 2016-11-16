var express = require('express'),
    router  = express.Router();

var secondPage = require('./secondPage.js');
var supportPage = require('./supportPage.js');
var postPage = require('./postPage.js');



router.use('/secondPage', secondPage);
router.use('/postPage', postPage);
router.use('/supportPage', supportPage);

router.get('/', (req, res)=>{
  // res.send('Hello Mo better!!');
  console.log("Go through here");
  res.render("frontPage");
});




module.exports = router;
