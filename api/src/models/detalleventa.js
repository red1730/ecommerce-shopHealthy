const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {

  sequelize.define("detalleventa", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    precioUnitario:{
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
  });
};