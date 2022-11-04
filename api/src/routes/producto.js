const { Router } = require("express");
const { Producto, Marca, Categoria } = require("../db");
// const {API_KEY} = process.env;
const {check, validationResult}= require('express-validator');

const validateResult =(req,res,next)=>{
  try {
    validationResult(req).throw()
    return next()
  } catch (error) {
    res.status(403)
    res.send({errors:error.array()})
  }
}


const router = Router();


  //TRAE TODOS LOS PRODUCTOS CON SU MARCA Y SU CATEGORIA
  router.get("/", async (req, res) => {

    const {nombre} = req.query
    let todosLosProductos = await Producto.findAll()
    if (nombre) {
      let productoFiltrado = todosLosProductos.filter( prod => prod.nombre.toLowerCase().includes(nombre.toLowerCase()))
      productoFiltrado.length ? 
      res.status(200).send(productoFiltrado) : res.status(404).send('Not found or does not exist 😥') 
    }else{
      
      Producto.findAll({
        include: [{ 
          model: Categoria,
          attributes: ['nombre']
        },{
          model: Marca,
          attributes: ['nombre']
        }], 
      }).then(prods => res.json(prods))
    }
  
  })


  //TRAE LOS PRODUCTOS POR MARCA 
router.get("/marca", async (req, res) => {
  try {
    const { nombre } = req.query;
    const productos = await Producto.findAll({
      attributes: ["id", "nombre", "precio", "img", "stock", "descripcion"],
      include: [
        {
          model: Categoria,        
        },
        {
          model: Marca,
          where: {
            nombre: nombre
          } 
        },]
    }).then((prod)=>res.json(prod))
    
  } 
  catch (error) {
    console.log(error)
  }
  });


// TRAER LOS PRODUCTOS POR CATEGORIA
router.get("/categoria", async (req, res) => {
  try {
    const { nombre } = req.query;
    const productos = await Producto.findAll({attributes: ["id", "nombre", "precio", "img", "stock", "descripcion"],
    include: [
      {
        model: Marca,        
      },
      {
        model: Categoria,
        where: {
          nombre: nombre
        } 
      },]
    })
    
    res.status(201).send(productos);
  }
  catch (error) {
    console.log(error)
  }
});

//TRAE EL DETALLE DE UN PRODUCTO
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



router.post("/admin/crear",
                  check('nombre').exists().not().isEmpty(),
                  check('marca').exists().not().isEmpty(),
                  check('descripcion').exists().not().isEmpty().isLength({min:20, max:200}),
                  check('precio').exists().isNumeric(),
                  check('stock').exists().isNumeric().not().isEmpty(),
                  check('categorias').exists().not().isEmpty(),
                  (req,res,next)=>{
                     validateResult(req,res,next)
                  }, async (req, res) => {

 try {


  const { nombre, descripcion, precio, stock, categorias, activo, marca, img} = req.body;
  let markaId
  let markaCreada
  let marcaId
  
  let marka = await Marca.findOne({
    where: { nombre: marca}
  })
  
  if(!marka){
    markaCreada = await Marca.create({
      nombre:marca
    })
    marcaId = markaCreada.id
  }else{
    marcaId = marka.id
  }

  

categorias.forEach(async Kate => {
  await Categoria.findOrCreate({
    where:{nombre:Kate}
  })

});

let category = await Categoria.findAll({
  where: { nombre: categorias}
})

console.log(category)

 
  const producto = await Producto.create({
    nombre: nombre,
    descripcion: descripcion,
    precio: precio,
    stock: stock,
    activo:activo,
    marcaId:marcaId,
    img: img
  });
// console.log(producto)

    producto.addCategoria(category) 



  res.status(200).send( producto);
 
 } catch (error) {
   res.status(401).send(error)
 }

 
});


//PUT MODIFICAR PRODUCTO

router.put("/admin/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const producto = await Producto.findByPk(id);
    const { nombre, precio, descripcion, imagen, stock, marcaId } = req.body;

    if (nombre) {
      producto.nombre = nombre;
      producto.save();
    }
    if (precio) {
      producto.precio = precio;
      producto.save();
    }
    if (descripcion) {
      producto.descripcion = descripcion;
      producto.save();
    }
    if (imagen) {
      producto.imagen = imagen;
      producto.save();
    }
    if (stock) {
      producto.stock = stock;
      producto.save();
    }
    if (marcaId) {
      producto.marcaId = marcaId;
      producto.save();
    }

    res.status(200).send(id);
  } catch (error) {
    res.status(400).send(error);
  }
});


//DAR DE BAJA UN PRODUCTO
router.post("/baja/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const productoBaja = await Producto.findByPk(id);
    if (productoBaja) {
      productoBaja.activo=false
      productoBaja.save();
    }
    res.send(`El producto ${productoBaja.nombre} ha sido dado de baja`)
  }
  catch(error){
    console.log(error)
  }
})

module.exports = router