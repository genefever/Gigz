var express = require('express');
var app = express();


app.use(express.static('public')); // get the css file in public
app.set("view engine", "ejs");


app.get('/', (req, res)=>{
  // res.send('Hello Mo better!!');
  res.render("frontPage");
});

app.get('/login', (req, res) => {
  res.send('Login');
});

app.get('/secondPage', (req,res)=>{
  res.send('secondPage');
});

app.listen(3000, ()=>{
  console.log("Server listen in localhost 3000.....");
})
