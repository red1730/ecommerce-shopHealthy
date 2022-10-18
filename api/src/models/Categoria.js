const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("categoria",
    {
        nombre: {
        type: DataTypes.STRING,
        allowNull: false
      },id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey:true
      }
    },
    {
      timestamps: false,
    }
  );
};
