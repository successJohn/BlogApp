//const http = require("http");
const path = require("path");
const express = require("express");
const app = express();
const ejs = require("ejs");
app.set("view engine", "ejs");

app.use(express.static("Public"));

app.get("/", (req,res)=>{
    res.render("index")
})
app.get("/about", (req,res)=>{
    res.render("about")
})
app.get("/contact", (req,res)=>{
    res.render("contact")
})
app.get("/post", (req,res)=>{
    res.render("post")
})

app.listen(8080, ()=>{
    console.log("server listening")
})

