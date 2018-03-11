let socket  = io();



let rood_b = document.getElementById("rood").addEventListener("mouseover", () => {
	console.log("scherm word rood")
	socket.emit("rood_muis","hey");

})


let groen_b = document.getElementById("groen").addEventListener("mouseover", () => {
        console.log("scherm word groen")
	socket.emit("groen_muis","hey");

})



let blauw_b = document.getElementById("blauw").addEventListener("mouseover", () => {
        console.log("scherm word blauw")
	socket.emit("blauw_muis","hey")
})
                                                                                                                             
