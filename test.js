const BlogPost = require("./models/blogpost");
const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost/blogDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=> console.log("Database connected"))
.catch(err => console.log(err));
/*
BlogPost.create({
    title: 'The Mythbuster’s Guide to Saving Money on Energy Bills',
    body: `If you have been here a long time, you might remember when I went on ITV Tonight to
dispense a masterclass in saving money on energy bills. Energy-saving is one of my favourite money
topics, because once you get past the boring bullet-point lists, a whole new world of thrifty nerdery
opens up. You know those bullet-point lists. You start spotting them everything at this time of year.
They go like this:`
}, (error, blogpost)=>{
    console.log(error, blogpost)
});

BlogPost.create({
    title: 'Half of a yellow sun',
    body: `There was once a yellow sun:`
}, (error, blogpost)=>{
    console.log(error, blogpost)
});


BlogPost.find({},(error, blogpost)=>{
    console.log(error, blogpost)
})
*/

BlogPost.find({body:/once/}, (error, blogpost)=>{
    console.log(error, blogpost);
})