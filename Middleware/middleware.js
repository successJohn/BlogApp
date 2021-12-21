const ValidateMiddleWare = (req, res, next)=>{
    if(req.files == null || req.body.title == null || res.body.title == null){
        return res.redirect("/posts/new")
    }
    next();
}

module.exports = ValidateMiddleWare;