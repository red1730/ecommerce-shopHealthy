const { Sequelize } = require('sequelize')
const fs = require('fs')
const path = require('path')
// const sequelize = require('sequelize')
// const consolog = require('debug')('dev')
// const { Videogame, Genre } = require('./models/index')
// const genresSeed = require('./models/seed/genresSeed')
// const videogamesSeed = require('./models/seed/videogamesSeed')
// const https = require('https');
// const fetch = require('node-fetch')
// const QueryByGenre = require('./controllers/genresController');
// const GenresArray = require('../../client/src/components/GenresArray');
// const { Query, QueryAndCount } = require('./controllers/videogameController');
// const QueryByGenre = require('./controllers/genresController');
// const db = require('./db/index');
const sequelize = new Sequelize('u381026178_eCommerceSalud', 'u381026178_admin', 'Qu&df=#;E2', {
  host: 'sql811.main-hosting.eu',
  dialect: 'mysql'
})  
sequelize.authenticate().then(() => {
  console.log('Nos conectamos a la base de hostinger!!!')
})
.catch(err => console.error(err))
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models')) 
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring

const { Categoria } = sequelize.models;

(
  async () => {
    console.log('Cargando datos iniciales...')
    




    const { Categoria } = sequelize.models;

    const chiringuito = await Categoria.findAll()

    console.log(JSON.stringify(chiringuito))
})()
  
  
  
  // if (parseInt(await Videogame.count()) === 100) consolog('Carga exitosa.')
  
      // // consolog("Hemos creado este videogame: ")
      // // consolog(newVideogame.toJSON());
      
      //   // Fill VideogameGenre n:n associations table:
      //   if (!algo) {
      //     consolog('Creando tabla intermedia...')
      //     algo = true
      //   }
        
      //   await Promise.all(
      //     genres.map(async (genre) => {
      //       await newVideogame.addGenre(String(genre).toLowerCase(), {
      //         through: 'VideogameGenre'
      //       })
      //     })
      //   )
      // }))
    // console.log("Estos videogames tenemos: " + await Videogame.count());
    // sequelize.close()

    // console.log(JSON.stringify(await QueryByGenre('puzzle')))
      // await sequelize.sync({ force: true })
      // // consolo g('Conexión a posgres exitosa!')
      // // Bulk Create 'Genres' table:
      // consolog('Cargando Generos...')
  
      // await Promise.all(genresSeed.map(async (singleGenre) =>
      //   await Genre.create({
      //     name: singleGenre
      //   })
      // ))
  
      // // Bulk Create 'Videogame' table:
      // consolog('Cargando Videogames...')
      // let algo = false
      // let data = ''
      // await Promise.all(videogamesSeed.map(async (oneGame) => {
      //   console.log(`Trabajando con ${oneGame.name}`)
      //   // oneGame.description = await (await fetch(`https://api.rawg.io/api/games/${oneGame.id}?key=0f8d95788d644ba9ac601311b87d302d`)).json()
      //   const coso = https.get(`https://api.rawg.io/api/games/${oneGame.id}?key=0f8d95788d644ba9ac601311b87d302d`, res => {
      //     res.on('data', chunk => {
      //       data += chunk
      //     })
      //     res.on('end', () => {
      //       data = JSON.parse(data)
      //       console.log(data)
      //       oneGame.description = data.description
      //     })
      //   }).end()
      //   console.log('Datecuenta Amica: ' + JSON.stringify(coso))
      //   const {
      //     id,
      //     img,
      //     name,
      //     description,
      //     released,
      //     rating,
      //     platforms,
      //     genres
      //   } = oneGame
  
      //   const newVideogame = await Videogame.create({
      //     id,
      //     img,
      //     name,
      //     description,
      //     released,
      //     rating,
      //     platforms,
      //     genres
      //   })
