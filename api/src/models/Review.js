const { DataTypes } = require("sequelize");

module.exports=(sequelize)=>{
    sequelize.define("review",{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
          },
          puntaje: {
            type: DataTypes.INTEGER,
            allowNull: true,
          },
          titulo: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          comentario: {
            type: DataTypes.TEXT,
            allowNull: false,
          },
          activo: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
          },
    })
}
