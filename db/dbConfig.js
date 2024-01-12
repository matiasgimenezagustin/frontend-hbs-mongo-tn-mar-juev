const mongoose = require('mongoose')
const MODE = require('./config')


const DB_NAME =   process.env.DB_NAME

/* SI no funciona usar en vez de localhost usar 127.0.0.1 */
const mongoDB_URL = ( MODE == 'PROD' ? process.env.DB_URI_PROD :  process.env.DB_URI ) + DB_NAME

console.log(DB_NAME)

console.log(mongoDB_URL)

mongoose.connect(mongoDB_URL, {})

const db = mongoose.connection

db.on('error', () =>{
    console.log('Hubo un error')
})

db.once('open', () =>{
    console.log('Conexion exitosa con MongoDB')
})


module.exports = mongoose