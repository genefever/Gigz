var express = require('express');

var app = express();


app.get('/', (req, res)=>{
  res.send('Hello Mo better!!');
});


app.listen(3000, ()=>{
  console.log("Server listen in localhost 3000.....");
})
