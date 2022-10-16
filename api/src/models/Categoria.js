const { DataTypes }= require('sequelize')

const Categoria = sequelize.define('categoria', {
  "idCategoria": {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  "nombre": DataTypes.STRING
}, {
  timestamps: false
})

module.exports = Categoria