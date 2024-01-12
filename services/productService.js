const Product = require("../models/productModel")


const getProductsFromMongo = async () =>{
    return await Product.find({})
} 

const getProductByIdFromMongo = async (pid) =>{
    try {
        const result  = await Product.findOne({_id: pid})

        return result
    }
    catch(error){
        console.error(error)
        throw error
    }
}



const updateProductByIdFromMongo = async (pid, productoActualizado) => {
    try {
        const updatedProduct = await Product.findOneAndUpdate({ _id: pid }, productoActualizado, { new: true });
        return updatedProduct;
    } catch (error) {
        console.error('Error al actualizar el producto:', error);
        throw error;
    }
};

const createProduct = async(newProduct) =>{
    const product = new Product(newProduct)
    return await product.save()
}

/* Crear funcion para crear un producto */


module.exports = {getProductsFromMongo, getProductByIdFromMongo, updateProductByIdFromMongo, createProduct}



/* 
Generar un modelo para el usuario

el usuario debe tener: 
name, 
lastname, 
age, 
email, 
password

Crear un servicio que se llame userService y crearemos dentro de el la funcionalidad createUser que reciba un objeto y lo guarde en la DB

Crear la funcion isExistentUser(email) y devuelva true o false dependiendo de si existe el usuario con el email pasado
*/