const bcrypt = require('bcrypt')
const User = require('../models/user')
module.exports = (req, res) =>{
const { username, password } = req.body;
User.findOne({username:username}, (error,user) => {
if (user){
    if(user.password === password){
    // if passwords match
        req.session.userId = user._id
        res.redirect('/')
    }else{
        res.redirect('/auth/login')
    }
    
}


else{
res.redirect('/auth/login')
}
})
}