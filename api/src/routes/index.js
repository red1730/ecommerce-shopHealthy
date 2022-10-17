const { Router } = require('express');
const categoriasRuta= require('./categoria')
const productosRuta= require('./producto')
const marcasRuta= require('./marca')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/productos', productosRuta)
router.use('/categorias', categoriasRuta)
router.use('/marcas',marcasRuta)

module.exports = router;