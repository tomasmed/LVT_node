var http = require('http');
var mymod = require('./mymodule.js');
var url = require('url');

//create a server object:
http.createServer(function (req, res) {
 res.writeHead(200, {'Content-Type': 'text/html'});

  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;


  res.write(txt + " Hello world the time is: " + mymod.myDateTime()); //write a response to the client
 

  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080 