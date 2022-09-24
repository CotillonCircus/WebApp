const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('product', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    img: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cant: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    size:{
        type: DataTypes.STRING,
        allowNull: false
    },
    color:{
        type: DataTypes.STRING,
        allowNull: false
    },
    stock:{
        type:DataTypes.INTEGER,
        defaultValue:0
    },
    status:{
        type: DataTypes.STRING,
        defaultValue: "disponible"
    }
  }, {timestamps:false});
};
