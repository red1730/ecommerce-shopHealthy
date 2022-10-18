const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("marca",
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false
      },
      marcaId:{ 
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      }
    },
    {
      timestamps: false,
    }
  );
};

// Marca --< Productos 