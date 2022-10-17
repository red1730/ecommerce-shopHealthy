const { Sequelize } = require('sequelize')
const fs = require('fs')
const path = require('path')

const sequelize = new Sequelize('u381026178_eCommerceSalud', 'u381026178_admin', 'Qu&df=#;E2', {
  host: 'sql811.main-hosting.eu',
  dialect: 'mysql',
  logging: false, 
  native: false,
}) 
// const sequelize = new Sequelize(`postgres://postgres:12345678@localhost/pf-demo`, {
//   logging: false, // set to console.log to see the raw SQL queries
//   native: false, // lets Sequelize know we can use pg-native for ~30% more speed
// });


sequelize.authenticate().then(() => {
  console.log('Nos conectamos a la base de hostinger!!!')
})
.catch(err => console.error(err))

const basename = path.basename(__filename);
const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models')) 
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring

const { Categoria, Marca, Producto } = sequelize.models;

// Aca vendrian las relaciones

Producto.belongsToMany(Categoria, {through: 'producto_categoria'});
Categoria.belongsToMany(Producto, {through: 'producto_categoria'}); 
Marca.hasMany(Producto)  
Producto.belongsTo(Marca)


Producto.belongsToMany(Categoria, {through: 'producto_categoria'});
Categoria.belongsToMany(Producto, {through: 'producto_categoria'}); 
Marca.hasMany(Producto)  
Producto.belongsTo(Marca) 

// (
//   async () => {
//     console.log('Cargando datos iniciales...')
//     const { Categoria } = sequelize.models;

//     const chiringuito = await Categoria.findAll()

//     console.log(JSON.stringify(chiringuito))
// })()


module.exports = {
  ...sequelize.models,
  conn:sequelize
}