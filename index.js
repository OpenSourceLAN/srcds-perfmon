"use strict";

var express = require('express'),
	http = require('http'),
	socketio = require('socket.io'),
	monitor = require('./perfmon');

var app = express(),
    server = http.Server(app),
    io = socketio(server);

server.listen(9999);

app.get('/', (req,res)=> {
	res.sendFile(__dirname + '/static/index.html');
});

io.on('connection', (socket) => {
	// todo: send current state of world
});

new monitor({address: "127.0.1.1", password: "dicks"});