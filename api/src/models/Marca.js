const { DataTypes }= require('sequelize')

module.exports = (sequelize) => {
  const Marca = sequelize.define('Marca', {
    "idMarca": {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    "nombre": DataTypes.STRING
  }, {
    timestamps: false
  })
}