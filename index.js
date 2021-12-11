
const path = require("path");
const express = require("express");
const app = express();
const ejs = require("ejs");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const BlogPost = require("./models/blogpost");
const fileUpload = require("express-fileupload");

app.set("view engine", "ejs");

app.use(express.static("Public"));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(fileUpload());
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

app.get("/post/:id",async(req,res)=>{
    const blogpost = await BlogPost.findById(`${req.params.id}`);
   
    //console.log(blogpost);
     res.render("post",{
         blogpost
     });
})

app.get("/posts/new",(req,res)=>{
    res.render("create")
})


app.post("/posts/store", async(req,res)=>{
  let image = req.files.image;
  image.mv(path.resolve(__dirname, "Public/assets/img", image.name),async (error)=>{
    await BlogPost.create({
        ...req.body,
        image: "/img/" + image.name})
        res.redirect("/");
    })
  });
  
    
app.listen(4080, ()=>{
    console.log("server listening")
})

