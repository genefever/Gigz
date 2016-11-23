/* define a model for post Page */
module.exports = (sequelize,DataTypes) => {
  return sequelize.define('post',{
    type:{
      type: DataTypes.STRING,
    },
    name : {
      type: DataTypes.STRING,
    },
    // category:{
    //   type: DataTypes.STRING,
    //   allowNull : false
    // },
    email: {
      type: DataTypes.STRING,
    },
    phone:{
      type:DataTypes.STRING,
    },
    // contactOption:{
    //   type: DataTypes.STRING
    // },
    city:{
      type: DataTypes.STRING
    },
    title:{
      type: DataTypes.STRING,
    },
    info:{
      type: DataTypes.STRING
    }
  });
}
