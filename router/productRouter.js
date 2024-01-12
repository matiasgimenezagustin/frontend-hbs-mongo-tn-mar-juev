const express = require('express')
const { getProducts, getProductById, updateProductById, editRequest, createNewProductRequest, createNewProduct } = require('../controllers/productController')
const isAuth = require('../middleweres/authMiddlewere')

const productRouter = express.Router()

productRouter.get('/',   getProducts)
productRouter.get('/new',isAuth, createNewProductRequest)
productRouter.post('/editRequest',isAuth,editRequest) 
productRouter.post('/new', isAuth,createNewProduct)


productRouter.get('/:pid',isAuth, getProductById)
productRouter.post('/:pid',isAuth, updateProductById)



module.exports = productRouter

/* Ahora te toca crear la ruta de los productos

GET /products => debera renderizar una vista de hbs y pasarle la lista de productos
*/