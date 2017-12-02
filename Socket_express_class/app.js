var express = require('express');
var socket = require('socket.io')
var app = express();
var count = 0;

var server = app.listen(process.env.PORT || 3000);

app.use('/',express.static('Public'));
console.log('server is running');

var io = socket(server);

io.on('connection',newConnection)

function newConnection(socket){
	count++;
	console.log(socket.id);	
	io.emit('count',count);	
	
	socket.broadcast.emit('bc',"abcd");
	socket.emit('stuff',socket.id)
	socket.on('newMsg',function(d){
		console.log(d);
	})
}


