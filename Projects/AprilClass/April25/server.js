var movies = require ("./movies.json");


var http = require ("http");

//creating a serve
//what ever hits the server that is filled with data, tell the server to "respond" when the data is filled
var server = http.createServer(function(req, res){
	//200= okay connection
res.writeHead(200);
//text we want to respond with is "hello world"
res.write("Hello world");
//we are done talking to client
res.end();
});
//3000 and 8080, 8000--> port for this server to listen on.. allows us to set the port
//request is listening to 8080 and once it gets that, it pulls what 
server.listen(8080);

//run it with node
//on the web type "localhost:8080"
//Control C to stop 