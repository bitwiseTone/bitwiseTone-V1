const express = require("express");
const ejs = require("ejs");
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.static('public'));
//saya rasa ini penting
app.set('views', './src/views');

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

app.listen(PORT, () => {
    console.log(`app listening succesfully`)
})