const express = require("express");
const app = express();
const expressSession = require("express-session");
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
const redirectIfAuthenticatedMiddleware = require('./middleware/redirectIfAuthenticatedMiddleware')
const logoutController = require("./controllers/logout");
app.set("view engine", "ejs");
app.use(express.static("Public"));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(fileUpload());
//app.use("/posts/store",validateMiddleWare);
app.use(expressSession({
    secret: "blogify"
}))

global.loggedIn = null;

app.use("*", (req, res, next) => {
loggedIn = req.session.userId;
next()
});
mongoose.connect("mongodb://localhost/blogDB", {useNewUrlParser: true})

app.get("/", homePageController);

app.get("/about", (req,res)=>{
    res.render("about")
})
app.get("/contact", (req,res)=>{
    res.render("contact")
})

app.get("/post/:id",getPostController);

app.get("/auth/logout", logoutController);
app.get("/posts/new",validateMiddleWare, newPostController);

app.get("/auth/register", redirectIfAuthenticatedMiddleware,newUserController);

app.post("/posts/store",validateMiddleWare, storePostController);
app.get('/auth/login', redirectIfAuthenticatedMiddleware,loginController);
app.post('/users/register', redirectIfAuthenticatedMiddleware,storeUserController)
app.post('/users/login', redirectIfAuthenticatedMiddleware,loginUserController)
app.listen(4080, ()=>{
    console.log("server listening")
})

