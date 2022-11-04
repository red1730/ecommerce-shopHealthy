const { Router } = require("express");
const { Marca } = require("../db");

const router = Router();

//TRAE TODAS LAS MARCAS - SI RECIBE MARCA POR QUERY, TRAE ESA MARCA
router.get("/", async (req, res) => {
  try {

      const { nombre } = req.query
      if(nombre){
        const instanciaMarca = await Marca.findOne({
          where: {
            nombre: nombre
          }
        }) 
        res.send(instanciaMarca) 

      }else{
        const marcas = await Marca.findAll({ attributes: ["id","nombre" ] });
        if (marcas.length > 0) {
          res.status(200).send(marcas);
        } else {
          res.status(404).json("No existe la marca");
        }

      }
      
    
  } catch (error) {
    res.status(404).json(error );
  }
});


module.exports = router


