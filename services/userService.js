


const User = require('../models/userModel')


const loginUser = async (userEmail, password) => {
    const user = await User.findOne({ email: userEmail });
    if (!user) {
        return { ok: false, error: "No existe el usuario" };
    }
    const isPasswordCorrect = user.password === password;
    if (isPasswordCorrect) {
        return { ok: true, user: user };
    } else {
        return { ok: false, error: "Contraseña incorrecta" };
    }
};




const isExistentUser = async (userEmail) => {
    const userExists = await User.findOne({ email: userEmail })
    return Boolean(userExists)
}


const createUser = async (user) => {
    if (!(await isExistentUser(user.email))) {
        const newUser = new User(user)
        return { ok: true, user: await newUser.save() }
    }
    else {
        console.log('usuario ya registrado')
        return { ok: false, error: 'Usuario ya registrado' }
    }
}

/* createUser(
    {
    name: 'Pepesito',
    lastName: 'Gimenez',
    age: 23,
    email: 'pepesitogimenez@gmail.com',
    password: 'pepe1234'
}) */



module.exports = { createUser, isExistentUser, loginUser }


/* const isExistentUser = async (userEmail) =>{
    const userExists = await User.find({email: userEmail})
    return Boolean(userExists)
} */

/* 
Crear un endpoint en nuestro servidor que este en '/register  que nos muestre un formulario de registro con hbs

Formulario: 
name: 
    lastName: 
    age: 
    email: 
    password:
*/


{/* <label for='nombre'>
    asdsadas
</label>    

<input id='nombre' name='name'/>

{name: 'pepe'} */}