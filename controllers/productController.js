const { getProductsFromMongo, getProductByIdFromMongo, updateProductByIdFromMongo, createProduct } = require("../services/productService")

const getProducts = async (req, res) =>{
    const result = await getProductsFromMongo()
    console.log(req.session.user)

    res.status(200).render('home',{products: result})

}

const getProductById = async (req, res) =>{
    const {pid} = req.params
    const result = await getProductByIdFromMongo(pid)
    console.log(result)
    if(result){
        res.status(200).render('detail', {product: result, isAdmin: req.session.role == 'admin'})
    }
    else{
        res.status(404).render('errorView', {error: 'Product not found 404'})
    }
}

const updateProductById = async (req, res) => {
    console.log(req.body);
    
    const { title, description, price, stock, id } = req.body;
    const updatedProduct = { title, description, price, stock };

    try {
        const result = await updateProductByIdFromMongo(id, updatedProduct);

        if (result) {
           
            res.status(200).render('detail', { product: result });
        } else {
            res.status(404).render('errorView', {error: 'Product not Found :('})
        }
    } catch (error) {
        console.error('Error al actualizar el producto:', error);
        res.status(500).render('errorView', {error: 'Internal server error'})
    }
};

const createNewProductRequest = (req, res) =>{
    console.log('hola')
    res.status(200).render('newProduct')
     /* Esta fucion es para /products/new con metodo get*/
    /* Cuando soliciten este controlador vamos a mostrar la vista de hbs llamada newProduct (deben crearla) */
}

const createNewProduct = async(req, res) =>{
    const {title, price, description, stock} = req.body
    console.log(title, price, description, stock)
    if(title && price && description && stock){
        try{    
            const result = await createProduct({title, price, description, stock})
            console.log(result)
    
            res.status(201).render('newProduct', {message: 'Producto creado exitosamente'})
 
        }
        catch(error){
            console.log('ocurrio un error', error)
            res.status(500).render('erroView', {error: 'Error interno del servidor'})
        }
       
       
    }
    else{
        res.status(400).render('newProduct', {error: 'No has completado todos los campos'})
    }
}


const editRequest  = async (req, res ) =>{
    const {pid} = req.query
    console.log('me consultaron para editar el producto con id: ' + pid)
    const result = await getProductByIdFromMongo(pid)
    if(result){
        res.status(200).render('detail', {product: result, editMode:true})
    }
    else{
        res.status(404).render('errorView', {error: 'Product not found 404'})
    }
}



module.exports = {getProducts, getProductById, updateProductById, editRequest, createNewProductRequest, createNewProduct}