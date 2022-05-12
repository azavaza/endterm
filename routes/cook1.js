const express = require("express");
const path = require("path")
const https = require('https');
const bodyparser = require("body-parser");
const app=express()
app.use(bodyparser.urlencoded({extended:true}))

const router = express.Router();
router
    .route("/")
    .get((req, res) => res.render(path.resolve("./views/cook1.ejs")))
    .post((req, res) => {
        let currencyname =req.body.currency
        let key ="72a527f3d82545500896859c1d4ae1a2"
        let url="https://api.openweathermap.org/data/2.5/weather?q="+currencyname+"&appid="+key+"&unit=metric&mode=json"
        https.get(url, function (response) {
            response.on('data', data=> {
                let a = JSON.parse(data)
                let temp = a.main.temp
                let cond = a.weather[0].description
                res.send("weather in "+currencyname+" is: "+ cond+ " "+ temp+ "degrees above celsius")
            })
        })
        //res.send(currencyname)
    });

module.exports = router;