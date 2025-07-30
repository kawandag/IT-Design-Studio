//webserver.js
//load module http

var http = require('http');

//const app = require('./serverside/app');
//create a new instance of http.Server 
//Reference https://nodejs.org/api/http.html#http_http_createserver_options_requestlistener
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(8000);

console.log('Server running on port 8000.');

/*const express = require('express');
const cors = require('cors');
const app = express();

// Allow all origins (or specify the origin explicitly)
app.use(cors({
  origin: '*', // Allow requests from your frontend
}));

app.post('/reservations', (req, res) => {
  // Your reservation logic here
});

app.listen(8000, () => {
  console.log('Server is running on http://localhost:8000/');
});*/
