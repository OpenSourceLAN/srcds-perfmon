"use strict";

var express = require('express'),
	http = require('http'),
	rcon = require('srcds-rcon'),
	socketio = require('socket.io');

var app = express(),
    server = http.Server(app),
    io = socketio(server);

server.listen(9999);

app.get('/', (req,res)=> {
	res.sendfile(__dirname + '/static/index.html');
});