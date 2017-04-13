const http = require('http');
const fs = require('fs');

let server = http.createServer(function(request, response) {
	if (request.url === '/cars') {
		fs.readFile('views/cars.html', 'utf8', function(error, contents) {
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		});
	} 
	else if (request.url === '/cats') {
		fs.readFile('views/cats.html', 'utf8', function(error, contents) {
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		});	
	}
	else {
		response.writeHead(400);
		response.end('File not found!');
	}
});

server.listen(6789);