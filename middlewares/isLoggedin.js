const jwt = require("jsonwebtoken");
const userModel = require("../models/usermodel")

module.exports = async function (req , res, next ){
    if(!req.cookies.token){
        req.flash("error" , "you need to login first")
        return res.redirect("/");
    }

    try{
        let decoded = jwt.verify(req.cookies.token , process.env.JWT_KEY);
        let user = await userModel.findOne({email : decoded.email})
        .select("-password");

        req.user = user; //YE SAMAJH NAHI AAYA CHECK IT AGAIN
        next();

        
    }catch(err){
        req.flash("error" , "Something went wronge");
        res.redirect("/");
    }

    }
