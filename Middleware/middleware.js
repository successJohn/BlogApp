const ValidateMiddleWare = (req, res, next)=>{
    if(req.files == null || req.body.title == null || res.body.body == null){
        return res.redirect("/posts/new")
    }
    next();
}

module.exports = ValidateMiddleWare;