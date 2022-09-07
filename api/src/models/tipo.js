const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('tipo', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    nombre:{
        type: DataTypes.STRING,
        allowNull: false,
    }
  }, {timestamps:false});
};
