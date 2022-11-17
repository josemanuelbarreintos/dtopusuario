const express = require("express");
const mongoose = require("mongoose");
require("./src/config/passport");
const app = express();
var cors = require("cors");

const bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(process.env.MONGOURI);

app.use("/con", require("./src/routes"));


app.listen(process.env.PORT, ()=> console.log("The server is Alive!!"))
app.get('/',(req,res)=> res.send("hola mundo"))



