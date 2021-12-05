//const http = require("http");
const path = require("path");
const express = require("express");
const app = express();
const ejs = require("ejs");
app.set("view engine", "ejs");

app.use(express.static("Public"));

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, "./Public/index.html"))
})
app.get("/about", (req,res)=>{
    res.sendFile(path.join(__dirname, "./Public/about.html"))
})
app.get("/contact", (req,res)=>{
    res.sendFile(path.join(__dirname, "./Public/contact.html"))
})
app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, "./Public/index.html"))
})

app.listen(8080, ()=>{
    console.log("server listening")
})

