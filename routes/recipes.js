const express = require("express");
const path = require("path")
const router = express.Router();
router
    .route("/")
    .get((req, res) => res.render(path.resolve("./views/recipes.ejs")))
    .post((req, res) => res.send("POST HOME"));
module.exports = router;