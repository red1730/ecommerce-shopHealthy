const { Sequelize } = require('sequelize');
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { Categoria, Marca, Producto } = conn.models
const categoria = require('../api/src/data/categorias')
const marcas = require('../api/src/data/marcas')
const productos = require('../api/src/data/productos')

async function categoriaCarga() {
  try {
    categoria.forEach(category => {
      Categoria.findOrCreate({
        where: { nombre: category.nombre }
      })
    })
  }
  catch (error) {
    console.log('No se cargaron los datos a la BD')
  }
}

async function marcasCarga() { 
  try { 
    marcas.forEach(async c => {
      const {marcaId, nombre} = c;
      const m = await Marca.create({marcaId, nombre})
    })
  } catch (error) {
    console.log('No se cargaron los datos a la BD')
  }
}

async function productosCarga() {
  productos.forEach(async c => {
    const { nombre, precio, descripcion, img, stock, marcaId } = c
    const producto = await Producto.create({ nombre, precio, descripcion, img, stock, marcaId })
    // console.log(JSON.stringify(producto))
    
    // estaMarca.belongsTo(productoLoco.idMarca)
    // where: { nombre: c.nombre },
    // defaults: { precio: c.precio, descripcion: c.descripcion, img: "https://dkndrd.com/" + + c.img, stock: c.stock }
    // c.idCategoria.split(',').forEach(eCategoria =>{
    //     producto.addCategoria(eCategoria, {through: 'producto_categoria'} )
    // })
    // console.log(`Este es el marcaIDDD, ${JSON.stringify(c)}`)
    // const estaMarca =  await Marca.findByPk(parseInt(idMarca))
  })
}



// const newActivity = await Activity.create({name, difficulty, duration, season })

// let countries = await Country.findAll({
//     where: { name: paises}
// })

// newActivity.addCountry(countries)



// Syncing all the models at once.
// conn.drop() 
conn.sync({ force: false }).then(async function () {
  await categoriaCarga();   //busca datos de la api y carga a BD
  await marcasCarga()
  await productosCarga()
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});


