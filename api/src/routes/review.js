const { Router } = require("express");
const { Review} = require("../db");
const {check, validationResult}= require('express-validator');
const router = Router();

const validateResult =(req,res,next)=>{
  try {
    validationResult(req).throw()
    return next()
  } catch (error) {
    res.status(403)
    res.send({errors:error.array()})
  }
}

router.get("/", async (req, res) => {

    const {comentario} = req.query
    let todosLosComentarios = await Review.findAll({where: {activo: true}})  
    if (comentario) {
      let comentarioFiltrados = todosLosComentarios.filter( prod => prod.comentario.toLowerCase().includes(comentario.toLowerCase()))
      comentarioFiltrados.length ? 
      res.status(200).send(comentarioFiltrados) : res.status(404).send('Not found or does not exist 😥')
    }else{
     res.status(201).send(todosLosComentarios)    
    }
  
  })

  router.get("/producto/:id", async (req, res) => {

    const {id} = req.params
    let todosLosReviews = await Review.findAll({
      where: {
        productoId: id
      },
    })  
    
      todosLosReviews.length ? 
      res.status(200).send(todosLosReviews) : res.status(404).send('No existen reviews para el producto ingresado 😥')
    
  
  })

router.post("/crear", 
                    check('titulo').exists().not().isEmpty(),
                    check('comentario').exists().not().isEmpty().isLength({min:30, max:200}),
                    check('puntaje').exists().isNumeric(), 
                    (req,res,next)=>{
                      validateResult(req,res,next)
                   },
                    async(req,res)=>{
    try {
        const { puntaje, titulo, comentario, productoId, usuarioId } = req.body;
    const review = await Review.create({
         puntaje,
         titulo,
         comentario,
         activo: true,
         productoId,
         usuarioId
    });
    res.status(200).send(review);
    } catch (error) {
        res.status(400).send(error);
    }
})

router.put("/modificar/:id", async (req,res)=>{
  try {
    const id = req.params.id;
    const review = await Review.findByPk(id);
    const { puntaje, titulo, comentario} = req.body;

    if (puntaje) {
      review.puntaje = puntaje;
      review.save();
    }
    if (titulo) {
      review.titulo = titulo;
      review.save();
    }
    if (comentario) {
      review.comentario = comentario;
      review.save();
    }
    

    res.status(200).send(id);
  } catch (error) {
    res.status(400).send(error);
  }
})

router.post("/baja/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const reviewBaja = await Review.findByPk(id);
    if (reviewBaja) {
      reviewBaja.activo=false
      reviewBaja.save();
    }
    res.status(200).send(`Se dio de baja el comentario ${id}`);
  }
  catch(error){
    console.log(error)
  }
  
})
module.exports=router