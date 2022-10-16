const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('categoria', {
    "idCategoria": {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    "nombre": DataTypes.STRING
  }, {
    timestamps: false
  })
}