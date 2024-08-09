const mongoose = require('mongoose');

const ownerSchema = mongoose.Schema({
    fullname: {
        type: String,
        minLength : 3,
        trim : true,
    },
    email: String,
    password : String,
    product : {
        type : String,
        default : ""

    },
    isadmin : Boolean,
    orders : {
        type: String,
        default :"[]"
    },
    contect : Number,
    picture: String,
    gstin: String,
})

module.exports = mongoose.model("owner" , ownerSchema)