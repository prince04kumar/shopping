const jwt = require('jsonwebtoken');

const gentoken = (existingUser)=>{
   return jwt.sign({email : existingUser.email, id: existingUser._id }, process.env.JWT_KEY);

}
module.exports.gentoken = gentoken;