const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        requiered: true,
    },
    age:{
        type: Number,
        requiered: true
    },
    email: {
        type: String,
        requiered: true
    }
})

module.exports = mongoose.model('UserModel', userSchema);