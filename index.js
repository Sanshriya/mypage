var http = require("http"); 
const port = 8000; 

http.createServer(function(req, res) { 
    res.writeHead(200, { "Content-Type": "text/html"});
    res.end("<title>My Page</title>"+"<h1>About Me</h1>"+"<h3>I am hungry</h3>"+"<p>I want to eat rice</p>");
    }).listen(port, function() { 
        console.log(`Node server is running on port ${port}...`); 
});
