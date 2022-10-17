const { Router } = require("express");
//Instalo e importo axios//
const axios = require("axios");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { Producto, Marca, Categoria } = require("../db");
// const {API_KEY} = process.env;

//FALTA CONFIGURAR LA MODULARIZACION....
const router = Router();

router.get("/", async (req, res) => {
  const productos = await Producto.findAll()
  res.status(200).json(productos)
  // try {
  //   const { nombre } = req.query;
  //   if (nombre) { 
  //     //traigo datos de BD filtrado por nombre. AGREGAR LA CONDICION DE ACTIVO.
  //     const productos = await Producto.findAll({
  //       attributes: ["id", "nombre", "precio", "img", "stock", "descripcion"],
  //       include: [Marca, Categoria],
  //       where: {
  //         nombre: { [Op.iLike]: "%" + nombre + "%" },
  //       },
  //     });

  //     if (productos.length > 0) {
  //       res.status(201).send(productos);
  //     } else {
  //       res.status(404).json("No existen datos del producto ingresado");
  //     }
  //   } else {
  //     //traigo datos de BD  //const allCountries = await Country.findAll({ attributes: ['id', 'name','continent','image','population']});
  //     const productos = await Producto.findAll({
  //       attributes: ["id", "nombre", "precio", "img", "stock", "descripcion"],
  //       include: [Marca, Categoria],
  //       order: [["nombre", "ASC"]],
  //     });

  //     if (productos.length > 0) {
  //       res.status(201).send(productos);
  //     } else {
  //       res.status(404).json("No existen productos");
  //     }
  //   }
  // } catch (error) {
  //   console.log(error);
  //   res
  //     .status(404)
  //     .json("No se pueden mostrar los productos, gracias vuelva pronto");
  // }
});

// TRAER PRODUCTOS POR MARCA... DEBE FUNCIONAR BIEN.... VIDEO AZR MEDIA VIDEO#5
router.get("/marca/:nombre", async (req, res) => {
  try {
    console.log(`Tengo el param: ${JSON.stringify(req.params)}`)
    const { nombre } = req.params; 
    const unaMarca = await Marca.findOne({
      where: { nombre: nombre}
    })
    let prodPorMarca = await Producto.findAll({
      // attributes: ["id", "nombre", "precio", "img", "stock", "descripcion", "marcaId"],
      where:{
        marcaId: unaMarca.id
      }
    })
    // include: [{ 
        console.log(`Encontré la marca ${JSON.stringify(unaMarca.id)} y el prod tiene ${prodPorMarca.marcaId}`)
      //   model: Categoria,
      //   attributes: []
      // },{
      //   model: Marca,
      //   attributes:[]
      // }],     
    // .then(() => {
    //   if (prodPorMarca) {
    //     res.status(201).send(prodPorMarca)
    //   } 
    //   res.status(404).send('No se encontró ningún producto de la marca ' + nombre)
    // })
  } catch (error) {
    console.log(error)
  }
  
  res.status(201).send(prodPorMarca)

});


// TRAER PRODUCTOS POR CATEGORIA.
router.get("/categoria", async (res, req) => {
  try {
    const { nombre } = req.query;
    const productos = await Producto.findAll()
    //   attributes: ["id", "nombre", "precio", "img", "stock", "descripcion"],
    //   include: [{
    //     model: Marca,
    //     attributes: []
    //   },{
    //       model: Categoria,
    //       attributes:[],
    //     where:{
    //       nombre: nombre
    //     }
    //     }
    // ],     
    res.status(201).send(productos);
  }
  catch (error) {
    res.status(404).send(error)
  }
});

//GET DETAILS :ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    let productodetalle = await Producto.findByPk(id.toUpperCase(), {
      include: [Categoria,Marca],
    });
    if (productodetalle) {
      productodetalle.img = "dkndrd.com/pf-healthyShop/".concat(productodetalle.img) 
      res.send(productodetalle) 
    }
  } catch (error) {
    res.status(404).json("No existe el producto seleccionado");
  }
});

module.exports = router