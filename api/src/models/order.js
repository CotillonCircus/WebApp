const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('order', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    totalPrize: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    products: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: false
    }
  }, {timestamps:true});
};
