const express = require("express");
const ejs = require("ejs");
const app = express();


app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
})

app.get("/contact", function (req, res) {
    res.render("contact")
})

app.get("/pricing", function(req, res){
    res.render("pricing")
})

app.get("/projects", function(req, res){
    res.render("projects")
})

app.get("/signup", function(req, res){
    res.render("signup")
})

app.listen(process.env.PORT, () => {
    console.log(`app listening succesfully`)
})