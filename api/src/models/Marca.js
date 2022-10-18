const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("marca",
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      timestamps: false,
    }
  );
};

// Marca --< Productos 