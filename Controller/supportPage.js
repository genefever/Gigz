var express = require('express'),
    router = express.Router();


router.get('/', (req, res)=>{
  res.render('supportPage');
});
module.exports = router;
