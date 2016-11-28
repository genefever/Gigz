var Sequelize = require('sequelize');

/* this is based on the environment that you are in use that env */
var env = process.env.NODE_ENV || "development";
var sequelize;
if (env === 'production'){ // only true when running on heroku
  sequelize = new Sequelize(process.env.DATABASE_URL,{
    'dialect':'postgres'
  });
}  else{

  /* model with no database but will run create a database in sqlite */
  sequelize = new Sequelize(undefined,undefined,undefined,{
    'dialect': 'sqlite',
    'storage': __dirname+"/data/dev-todo-api.sqlite"
  }); // create an instance of sequelize
}


var db = {}

/* load model from different file so that you can keep it organize */
db.post = sequelize.import('./Models/post.js');

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.env = env;


module.exports = db;
