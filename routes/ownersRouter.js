const express = require("express");
const mongoose = require("mongoose")
const router = express.Router();
const ownerModel = require("../models/ownermodel");

if (process.env.NODE_ENV === "development") {
  router.post("/create", async (req, res) => {
    try {
      let owners = await ownerModel.find({});
      if (owners.length > 0) {
        return res.status(403).send("You don't have permission");
      }
      let { fullname, email, password} = req.body;
      
      let createdowner = await ownerModel.create({
        fullname,
        email,
        password,
        
      });

      res.send(createdowner);
    } catch (error) {
      res.status(500).send("An error occurred: " );
    }
  });
}

router.get("/", function (req, res) {
  res.send("heyy");
});



module.exports = router;
