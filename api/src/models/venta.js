const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    
    sequelize.define("venta", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      cantidad: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
        allowNull: true,
        primaryKey: true,
      },
    });
  };
  