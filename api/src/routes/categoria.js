const { Router } = require("express");
const { Categoria } = require('../db')


const router = Router();


//TRAE TODAS LAS CATEGORIAS
router.get("/", async (req, res) => {
  try {
    const categorias = await Categoria.findAll({
      attributes: ["nombre", "id"],
    });

    if (categorias.length > 0) {
    res.status(200).send(categorias);
    } else {
      res.status(404).json("No existe ninguna categoria ");
    }
  } catch (error) {
    res.status(404).json(" Error 404,No se pueden mostrar las categorias");
  }
});

//TRAE LA CATEGORIA DE ACUERDO AL NOMBRE INGRESADO
router.get("/:categoria", async (req, res) => {
  const { categoria } = req.params
  console.log(categoria)
  const instanciaCategoria = await Categoria.findOne({
    where: {
      nombre: categoria
    }
  })  
  
  if(instanciaCategoria){
    res.send(instanciaCategoria)
  }
  const categ = await Categoria.findAll()
  res.send(categ)

})  

//CREAR CATEGORIA
router.post("/crear", async (req, res) => {
  try {
    const { nombre } = req.body;
    const categoria = await Categoria.create({
      nombre: nombre,
    });
    res.status(200).send(categoria);
  } catch (error) {
    res.status(404).send(error);
  }
});

// PUT - MODIFICAR CATEGORIA
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const producto = await Categoria.findByPk(id);
    const { nombre } = req.body;
    if (nombre) {
      producto.nombre = nombre;
      producto.save();
    }
    res.status(200).send({ msg: "cambios guardados!" });
  } catch (error) {
    res.status(400).send(error);
  }
});





module.exports = router