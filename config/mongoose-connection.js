const mongoose = require("mongoose");
const config = require("config");

mongoose.connect(`${config.get("MONGODB_URI")}/sketch`)
.then((res) => {
    console.log("connected to db");
  })
  .catch((err) => console.log(err.massage));

module.exports = mongoose.connection;
