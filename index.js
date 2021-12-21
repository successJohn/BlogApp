const express = require("express");
const app = express();
const ejs = require("ejs");
const validateMiddleWare = require("./Middleware/middleware")
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const newPostController = require("./controllers/newPost");
const getPostController = require("./controllers/getPost");
const storePostController = require("./controllers/storePost");
const homePageController = require("./controllers/homePage");
const newUserController = require("./controllers/newUser");
const storeUserController = require("./controllers/storeUser");
const loginController = require("./controllers/login");
const loginUserController = require("./controllers/loginUser");

app.set("view engine", "ejs");
app.use(express.static("Public"));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(fileUpload());
//app.use("/posts/store",validateMiddleWare);

mongoose.connect("mongodb://localhost/blogDB", {useNewUrlParser: true})

app.get("/", homePageController);

app.get("/about", (req,res)=>{
    res.render("about")
})
app.get("/contact", (req,res)=>{
    res.render("contact")
})

app.get("/post/:id",getPostController);


app.get("/posts/new", newPostController);

app.get("/auth/register", newUserController);

app.post("/posts/store", storePostController);
app.get('/auth/login', loginController);
app.post('/users/register', storeUserController)
app.post('/users/login', loginUserController)
app.listen(4080, ()=>{
    console.log("server listening")
})

