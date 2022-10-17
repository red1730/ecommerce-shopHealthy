const { Router } = require("express");
//Instalo e importo axios//
const axios = require("axios");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { Marca } = require("../db");
// const {API_KEY} = process.env;

const router = Router();
router.get("/", async (req, res) => {
  try {
    const marcas = await Marca.findAll({ attributes: ["id","nombre" ] });

    if (marcas.length > 0) {
      res.status(200).send(marcas);
    } else {
      res.status(404).json("No existe la marca");
    }
  } catch (error) {
    res.status(404).json(" Error 404, No se pueden mostrar las actividades");
  }
});
module.exports = router


