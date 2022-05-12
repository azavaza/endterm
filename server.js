const express=require('express')
const bodyparser=require('body-parser')
const https = require('https');
const {response} = require("express");
const path=require("path")
const router=express.Router();
const app=express()

const port=3000
app.use(bodyparser.urlencoded({extended:true}))

const ejs=require("ejs");

app.set('view engine','ejs');


app.use("/", require("./routes/cook1"));
app.use("/feedback", require("./routes/feedback"));
app.use("/recipes", require("./routes/recipes"));
app.use("/shop", require("./routes/shop"));
app.use("/cook1", require("./routes/cook1"));

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);

