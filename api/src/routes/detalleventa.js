const { Router } = require("express");
const { Detalleventa } = require("../db");
const { Producto } = require('../db')
const { Categoria } = require('../db')
const { Marca } = require('../db')

const router = Router();

router.get("/", async (req, res) => {

    const {nombre} = req.query
    
    if(nombre){
        let todosLosProductos = await Producto.findAll({
            where: {
                nombre: nombre
            }
        })
        console.log(todosLosProductos, 'todos los productos')
        let todosLosDetalles = await Detalleventa.findAll({
            where: {
                productoId: todosLosProductos[0].dataValues.id
            }, 
            include: { 
            model: Producto,
            attributes: ['id','nombre', 'img', 'descripcion', 'stock', 'activo', 'marcaId'],
            include: [{ 
                model: Categoria,
                attributes: ['nombre']
              },{
                model: Marca,
                attributes: ['nombre']
              }], 
          }})
        console.log(todosLosDetalles, 'todos los detayes')
    
        todosLosDetalles.length ? 
        res.status(200).send(todosLosDetalles) : res.status(404).send('No hay detalles de venta para el producto ingresado 😥') 
        
    }else{
        res.status(404).send('Debe ingresar un nombre de producto para buscar sus detalles')
    }
  
  })

  router.get("/:id", async (req, res) => {

    const {id} = req.params
    let produc = await Producto.findAll({
        where: {
            id: id
        }        
    })
    console.log(produc, 'un solo producto')
    let todosLosDetalles = await Detalleventa.findAll({
        where: {
            productoId: produc[0].dataValues.id
        }, 
        include: { 
        model: Producto,
        attributes: ['id','nombre', 'img', 'descripcion', 'stock', 'activo', 'marcaId'],
        include: [{ 
            model: Categoria,
            attributes: ['nombre']
          },{
            model: Marca,
            attributes: ['nombre']
          }], 
        
      }})
    console.log(todosLosDetalles, 'todos los detayes')

    todosLosDetalles.length ? 
    res.status(200).send(todosLosDetalles) : res.status(404).send('No hay detalles de venta para el producto ingresado 😥') 
    
  
  })

  module.exports = router