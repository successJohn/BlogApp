//const http = require("http");
const path = require("path");
const express = require("express");
const app = express();
const ejs = require("ejs");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const BlogPost = require("./models/blogpost");
app.set("view engine", "ejs");

app.use(express.static("Public"));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
mongoose.connect("mongodb://localhost/blogDB", {useNewUrlParser: true})

app.get("/", async(req,res)=>{
    const blogposts = await BlogPost.find({})
    res.render("index",{
     blogposts
    });
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

app.get("/posts/new",(req,res)=>{
    res.render("create")
})


app.post("/posts/store", async(req,res)=>{
    //console.log(req.body);
    await BlogPost.create(req.body,(error, blogpost)=>{
        res.redirect("/");
    })
    
})
app.listen(8080, ()=>{
    console.log("server listening")
})

