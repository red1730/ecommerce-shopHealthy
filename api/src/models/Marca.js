const { DataTypes }= require('sequelize')

const Marca = sequelize.define('Marca', {
  "idMarca": {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  "nombre": DataTypes.STRING
}, {
  timestamps: false
})

module.exports = Marca