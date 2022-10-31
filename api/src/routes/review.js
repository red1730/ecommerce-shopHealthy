const { Router } = require("express");
const { Review} = require("../db");
const router = Router();

router.get("/", async (req, res) => {

    const {comentario} = req.query
    let todosLosComentarios = await Review.findAll()
    if (comentario) {
      let comentarioFiltrados = todosLosComentarios.filter( prod => prod.comentario.toLowerCase().includes(comentario.toLowerCase()))
      comentarioFiltrados.length ? 
      res.status(200).send(comentarioFiltrados) : res.status(404).send('Not found or does not exist 😥')
    }else{
     res.status(201).send(todosLosComentarios)
    //  Review.findAll().then(rvw => res.json(rvw))
    }
  
  })


router.post("/crear", async(req,res)=>{
    try {
        const { puntaje, titulo, comentario } = req.body;
    const review = await Review.create({
         puntaje,
         titulo,
         comentario
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