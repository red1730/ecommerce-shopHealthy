const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    
    sequelize.define("venta", {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      fecha:{
        type: DataTypes.DATE,
        allowNull: false,
      },
      precioTotal: {
        type: DataTypes.DECIMAL,
        defaultValue: 0,
        allowNull: false,
      },
      estadoEnvio: {
      type: DataTypes.STRING,
      defaultValue: "En preparación",
      allowNull: false,
    },
    });
  };
  