let socket  = io();



let rood_b = document.getElementById("rood").addEventListener("mouseover", () => {
	console.log("scherm word rood")
	socket.emit("rood_muis","hey");

})

let rood_b_weg = document.getElementById("rood").addEventListener("mouseout", () => {
        console.log("scherm word niet meer rood")
        socket.emit("rood_muis_weg","hey");

})



let groen_b = document.getElementById("groen").addEventListener("mouseover", () => {
        console.log("scherm word groen")
	socket.emit("groen_muis","hey");

})

let groen_b_weg = document.getElementById("groen").addEventListener("mouseout", () => {
        console.log("scherm word geen  groen meer ")
        socket.emit("groen_muis_weg","hey");

})




let blauw_b = document.getElementById("blauw").addEventListener("mouseover", () => {
        console.log("scherm word blauw")
	socket.emit("blauw_muis","hey")
})
  


let blauw_b_weg = document.getElementById("blauw").addEventListener("mouseout", () => {
        console.log("scherm word geen  blauw meer ")
        socket.emit("blauw_muis_weg","hey")
})



                                                                                                                           
