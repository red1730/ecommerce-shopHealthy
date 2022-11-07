const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("resumenventas",
    {
      cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      monto: {
        type: DataTypes.FLOAT,
        allowNull: false
      }
    },
    {
      timestamps: false,
    }
  );
};