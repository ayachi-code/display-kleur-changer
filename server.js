const express = require("express");
const app = express()

const server = app.listen(3000);

app.use(express.static("public"))

const led_lichtjes = require('node-sense-hat').Leds;


const socket = require("socket.io");

const io = socket(server)


let r = [255,0,0];
let g = [0,255,0];
let b = [0,0,255];

let rood_lijst = [r,r,r,r,r,r,r,r,
		  r,r,r,r,r,r,r,r,
		  r,r,r,r,r,r,r,r,
		  r,r,r,r,r,r,r,r,
		  r,r,r,r,r,r,r,r,
		  r,r,r,r,r,r,r,r,
		  r,r,r,r,r,r,r,r,
		  r,r,r,r,r,r,r,r]


let groen_lijst = [g,g,g,g,g,g,g,g,
		   g,g,g,g,g,g,g,g,
		   g,g,g,g,g,g,g,g,
		   g,g,g,g,g,g,g,g,
		   g,g,g,g,g,g,g,g,
		   g,g,g,g,g,g,g,g,
	           g,g,g,g,g,g,g,g,
		   g,g,g,g,g,g,g,g]


let blauw_lijst = [b,b,b,b,b,b,b,b,
		   b,b,b,b,b,b,b,b,
		   b,b,b,b,b,b,b,b,
		   b,b,b,b,b,b,b,b,
		   b,b,b,b,b,b,b,b,
		   b,b,b,b,b,b,b,b,
		   b,b,b,b,b,b,b,b,
		   b,b,b,b,b,b,b,b]

io.sockets.on("connection",(socket) => {
console.log("hey nieuw");

 socket.on("rood_muis",(data) => {
	console.log("Scherm word root")
	led_lichtjes.setPixels(rood_lijst);
		

	});

socket.on("groen_muis",(data) => {
	console.log("scherm word groen")
	led_lichtjes.setPixels(groen_lijst);

});

socket.on("blauw_muis",(data) => {
	console.log("Scherm word blauw");
	led_lichtjes.setPixels(blauw_lijst)

});

socket.on("rood_muis_weg",(data) => {
	led_lichtjes.clear()

});


socket.on("blauw_muis_weg",(data) => {
	led_lichtjes.clear()
});

socket.on("groen_muis_weg",(data) => {
        led_lichtjes.clear()
})



});



