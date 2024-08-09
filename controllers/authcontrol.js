const userModel = require("../models/usermodel");
const bcrypt = require("bcrypt");
const { gentoken } = require("../utils/generateTokens");

async function registerUser(req, res) {
  try {
    let { fullname, email, password } = req.body;
    let existingUser = await userModel.findOne({ email: email });
    if (existingUser) {
      return res.status(400).send("                              You already have an account, please login.");
    }
    

    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        return res.status(500).send("Error generating salt for password encryption.");
      }

      bcrypt.hash(password, salt, async (err, hash) => {
        if (err) {
          return res.status(500).send("Error hashing password.");
        }

        let user = await userModel.create({
          fullname,
          email,
          password: hash,
        });

        // let token = gentoken(existingUser);
        // res.cookie( "token" ,token);

        res.redirect("/shop")
        console.log("User created");
      });
    });
  } catch (err) {
    res.status(500).send("An error occurred during registration.");
    console.log(err.message);
  }
}


async function loginUser(req , res ){
         let {email , password} = req.body;
        try{ let existingUser = await userModel.findOne({ email: email });
         if (!existingUser) {
           return res.status(400).send("You don't have an account, please regiser.");
         }

         bcrypt.compare(password, existingUser.password, (err, isMatch) => {
          if (err) {
            return res.send("invalid password")
          }
          let token = gentoken(existingUser);
        res.cookie("token" ,token);
       res.send("                   yet to create😊😊")
          
         
         })}
         catch(err){
          res.status(500).send("An error occurred during login.");
         }


}  


module.exports = { registerUser ,loginUser };
