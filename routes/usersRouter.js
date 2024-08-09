const express = require("express");
const router = express.Router();
const {registerUser , loginUser} = require("../controllers/authcontrol")

router.get("/", function (req, res) {
  res.send("heyy , this is user route");
});

router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
