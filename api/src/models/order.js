const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('order', {
    id: {
        type: DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        primaryKey:true
    },
    totalPrize: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    products: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: false
    },
    status:{
      type:DataTypes.STRING,
      defaultValue:"pending"
    }
  }, {timestamps:true});
};
