const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('producto', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    nombre:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    precio: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    imagen: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    tamanio:{
        type: DataTypes.STRING,
        allowNull: false
    }
  }, {timestamps:false});
};
