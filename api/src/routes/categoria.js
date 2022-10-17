const { Router } = require("express");
//Instalo e importo axios//
const axios = require("axios");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { Categoria } = require("../db");
// const {API_KEY} = process.env;

const router = Router();
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
module.exports = router