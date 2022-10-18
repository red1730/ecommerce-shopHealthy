const { Router } = require('express');
const categoriasRuta= require('./categoria')
const productosRuta= require('./producto')
const marcasRuta= require('./marca')
const path = require('path');
const { conn } = require('../db');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
router.get("/", async (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'))
})

router.get("/droptodo", async (req, res) => {
    conn.dropAllSchemas()
    res.status(418).json({mensaje: 'Volaste todo a la miercoles!'})
})

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/productos', productosRuta)
router.use('/categorias', categoriasRuta)
router.use('/marcas',marcasRuta)

module.exports = router;