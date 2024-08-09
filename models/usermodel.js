const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    fullname: String,
    email: String,
    password : String,
    cart : {
        type : String,
        default : "[]"

    },
    
    orders : {
        type: String,
        default :"[]"
    },
    contect : Number,
    picture: String
})

module.exports = mongoose.model("User" , userSchema);