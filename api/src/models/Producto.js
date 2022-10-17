const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define( "producto",
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      precio:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
          min: 0
        }
      },
      img:{
        type: DataTypes.TEXT,
        allowNull: false,
      },
      stock:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
          min: 1
        }
        },
      descripcion:{
        type: DataTypes.TEXT
      },
      activo:{
        type: DataTypes.BOOLEAN,
        defaultValue: true
      }
    },
    {
      timestamps: false,
    }
  );
};
