const express = require("express");
const app = express()

const server = app.listen(3000);

app.use(express.static("public"))

const led_lichtjes = require('node-sense-hat').Leds;


const socket = require("socket.io");

const io = socket(server)


let r = [255,0,0];

let rood_lijst = [r,r,r,r,r,r,r,r,
		  r,r,r,r,r,r,r,r,
		  r,r,r,r,r,r,r,r,
		  r,r,r,r,r,r,r,r,
		  r,r,r,r,r,r,r,r,
		  r,r,r,r,r,r,r,r,
		  r,r,r,r,r,r,r,r,
		  r,r,r,r,r,r,r,r]


io.sockets.on("connection",(socket) => {
console.log("hey nieuw");

 socket.on("rood_muis",(data) => {
	console.log("Scherm word root")

		

	});

});


