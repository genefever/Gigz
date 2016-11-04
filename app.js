var express = require('express');
var bodyParser = require('body-parser');
// var file = require('file.js');

var fs = require('fs');
console.log("Starting getting file ...");

// get content of the json file and turn it into an object
var contents = fs.readFileSync("info.json");
var jsonContent = JSON.parse(contents);

var app = express();

var port = process.env.PORT || 3000;

/* set up the environment */
app.use(bodyParser.urlencoded({extended:true})); // telling express to use body-parser
app.set("view engine", "ejs");
app.use(express.static('public')); // get the css file in public



app.get('/', (req, res)=>{
  // res.send('Hello Mo better!!');
  res.render("login");
});

app.get('/secondPage', (req,res)=>{
  res.render('secondPage',{
    lists : jsonContent.lists // get the array of list from the json Object
  });
});

app.get('/supportPage', (req, res)=>{
  res.render('supportPage');
});

app.get('/postPage', (req, res)=>{
  res.render('postPage');
});


app.listen(port, ()=>{
  console.log("Server listen in localhost 3000.....");
})
