const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    lastname: {type: String, required: true},
    age: {type: Number, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true}
})

const User = mongoose.model('user', userSchema)


/* const user1 = new User(
    {
        name: 'Pepe',
        lastName: 'Gimenez',
        age: 23,
        email: 'pepegimenez@gmail.com',
        password: 'pepe1234'
    }
)
 */

module.exports = User