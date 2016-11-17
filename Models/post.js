/* define a model for post Page */
module.exports = (sequelize,DataTypes) => {
  return sequelize.define('post',{
    type:{
      type: DataTypes.STRING,
      allowNull: false // are not allow for null entry
    },
    category:{
      type: DataTypes.STRING,
      allowNull : false
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        len:[1,30],
        isEmail: true // email format
      }
    },
    phone:{
      type:DataTypes.INTEGER,
      validate: {
        len:[1,15],
        isNumeric: true // will only allow numbers
      }
    },
    contactOption:{
      type: DataTypes.STRING
    },
    city:{
      type: DataTypes.STRING
    },
    title:{
      type: DataTypes.STRING,
      validate: {
        notEmpty: true // not allow to have empty title
      }
    },
    info:{
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    }
  });
}
