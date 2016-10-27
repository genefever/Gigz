var express = require('express');
var bodyParser = require('body-parser');



var app = express();

var port = process.env.PORT || 3000;

/* set up the environment */
app.use(bodyParser.urlencoded({extended:true})); // telling express to use body-parser
app.set("view engine", "ejs");
app.use(express.static('public')); // get the css file in public



app.get('/', (req, res)=>{
  // res.send('Hello Mo better!!');
  res.render("frontPage");
});

app.get('/login', (req, res) => {
  res.send('Login');
});

app.post('/secondPage', (req,res)=>{
  res.render('secondPage');
});




app.listen(port, ()=>{
  console.log("Server listen in localhost 3000.....");
})
