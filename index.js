const http = require("http");

const server = http.createServer((req, res)=>{
    res.end("<h1>Hello World</h1>")
});

server.listen(8080, ()=>{
    console.log("server listening")
})

