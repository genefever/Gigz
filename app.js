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

app.use(require('./Controllers'));
console.log("Here");

db.sequelize.sync({force:true}).then(()=>{
  app.listen(port, ()=>{
    console.log("Server listen in localhost 3000.....");
  });
}).catch((e)=>{
  console.log(e);
});





// app.get('/supportPage', (req, res)=>{
//   res.render('supportPage');
// });

// app.get('/postPage2', (req, res)=>{
//   res.render('postPage2');
// });

// app.post('/searchPost',(req, res)=>{
//   var searchVal = req.param('search1', null);
//   var contents = fs.readFileSync("info.json");
//   var jsonContent = JSON.parse(contents);
//   var abc = jsonContent.lists;
//   searchVal = searchVal.toLowerCase();
//
//   for (var i = 0; i < abc.length; i++) {
//     if((abc[i].title.toLowerCase()).includes(searchVal) || searchVal === "")
//       searches.push(abc[i]);
//   }
//   res.render('secondPage',{
//
//      lists : searches// get the array of list from the json Object
//   });
//   searches = [];
// });


/* handle post request for postPage.ejs */
// app.post('/secondPagePost',(req,res) => {
//
//   /* get the data from the json file and append it to the new one */
//   console.log(req.body);
//   fs.readFile('info.json',(err, data)=>{
//     var jsonData = JSON.parse(data); // turn it into an object
//     // console.log(jsonData);
//     if(req.body.type){
//       jsonData.lists.push(req.body);
//     }
//     fs.writeFile("info.json",JSON.stringify(jsonData), (err)=>{
//       if(err) throw err;
//       console.log("Data has already append to info.json!");
//     });
//   });
//   res.redirect('/secondPage');
// });




// app.listen(port, ()=>{
//   console.log("Server listen in localhost 3000.....");
// })
