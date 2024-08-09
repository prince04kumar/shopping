const express = require("express");
const app = express();
const path = require("path");
const db = require("./config/mongoose-connection")
const ownersRouter = require("./routes/ownersRouter");
const productRouter = require("./routes/productRouter");
const usersRouter = require("./routes/usersRouter");
const startRouter = require("./routes/index")
const session = require("express-session")
const flash = require("connect-flash")


require("dotenv").config();






app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(session({
  secret: process.env.EXPRESS_SECRET_CODE,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: true }
}))
app.use(flash())
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

const port = 8080;

app.use("/owners", ownersRouter);
app.use("/product", productRouter);
app.use("/user", usersRouter);
app.use("/", startRouter)

// app.get("/", (req, res) => {
//   res.send("Hello World");
//   console.log("working")
// });

app.listen(port, () => {
  console.log(`app is listning at ${port}`);
});
