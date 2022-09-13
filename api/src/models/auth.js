const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('auth', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    sub:{
        type: DataTypes.STRING,
        allowNull: false
    },
    company:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
      type: DataTypes.STRING,
        allowNull: false
    },
    cuit:{
      type: DataTypes.STRING,
       allowNull: false
    }
  }, {timestamps:false});
};
