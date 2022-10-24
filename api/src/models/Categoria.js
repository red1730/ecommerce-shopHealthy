const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("categoria",
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
      }
    },
    {
      name: {
        singular: "categoria",
        plural: "categoria"
      },
      timestamps: false,
    }
  );
};
