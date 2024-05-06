const http = require('http');

//Create a server
http.createServer((req,res)=>{

    //Sends a chunk of the response body
    res.write('Hello world!');

    //End the response
    res.end();
}).listen(3000)

console.log("Server running at http://localhost:3000")