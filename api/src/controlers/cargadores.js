const { conn } = require('../db.js');
const { Categoria, Marca, Producto } = conn.models
const categoria = require('../data/categorias')
const marcas = require('../data/marcas')
const productos = require('../data/productos')

// const newActivity = await Activity.create({name, difficulty, duration, season })
// let countries = await Country.findAll({
//     where: { name: paises}
// })
// newActivity.addCountry(countries)

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

module.exports = {
    categoriaCarga,
    marcasCarga,
    productosCarga
}