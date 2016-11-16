var express = require('express'),
    bodyParser = require('body-parser'),
    db         = require('./db.js');
// var file = require('file.js');

var fs = require('fs');
console.log("Starting getting file ...");

// get content of the json file and turn it into an object

var app = express();

var port = process.env.PORT || 3000;
// var searches = [];
/* set up the environment */
app.use(bodyParser.urlencoded({extended:true})); // telling express to use body-parser
app.set("view engine", "ejs");
app.use(express.static('public')); // get the css file in public

app.use(require('./Controller'));
console.log("Here");

db.sequelize.sync().then(()=>{
  app.listen(port, ()=>{
    console.log("Server listen in localhost 3000.....");
  });
}).catch((e)=>{
  console.log(e);
});
