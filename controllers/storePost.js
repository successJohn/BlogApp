const BlogPost = require("../models/blogpost");
const path = require("path");
const fileUpload = require("express-fileupload");



module.exports =  async(req,res)=>{
    let image = req.files.image;
    image.mv(path.resolve(__dirname, "Public/assets/img", image.name),async (error)=>{
      await BlogPost.create({
          ...req.body,
          image: "/img/" + image.name})
          res.redirect("/");
      });
}