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
	for (var server in recentServerInfo) {
		socket.emit("update", server, recentServerInfo[server]);
	}
});

var recentServerInfo = {};
function pushNewServerStat(server, data) {
	recentServerInfo[server] = recentServerInfo[server] || [];
	recentServerInfo[server].splice(99);
	recentServerInfo[server].splice(0,0, data);
}

config.servers.forEach((server) => {
	var serverMonitor = new monitor(server, config.defaultPollInterval);
	serverMonitor.on("data", (data) => {
		console.log(`Server ${server.address} returned info:`, data);
		data = {server: server.address, data: data, timestamp: new Date()};
		io.sockets.emit("update", server.address, [data]);
		pushNewServerStat(server.address, data);
	})
})