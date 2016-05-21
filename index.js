"use strict";

var express = require('express'),
	http = require('http'),
	socketio = require('socket.io'),
	monitor = require('./perfmon'),
	config = require('./config.json');

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


config.servers.forEach((server) => {
	var serverMonitor = new monitor(server, config.defaultPollInterval);
	serverMonitor.on("data", (data) => {
		console.log(`Server ${server.address} returned info:`, data);
	})
})