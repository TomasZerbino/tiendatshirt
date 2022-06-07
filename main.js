let nombre = prompt("Ingrese su nombre").toUpperCase();

let numeroIngresado = parseInt(prompt(`Hola ${nombre}, ingrese un numero del 1 al 10`))

for (let i = 1; i <= 10 ; i++) {
    let resultado = numeroIngresado * i;
    if(numeroIngresado > 10){
        break;
    }
    alert(numeroIngresado+" x "+i+" = "+resultado)
}

let feed
let entrada = prompt(`${nombre}, estas conforme con el servicio?`).toUpperCase();

while (entrada != "ESC"){
    switch (entrada) {
        case "SI":
            alert ("Te agradecemos el feedback");            
            break;
        
        case "NO":
            feed = prompt(`${nombre} ayúdanos a mejorar, dando tu opinión sobre 
            cualquier punto que consideres oportuno.`);
            break;    
    
        default:
            alert("Responde SI/NO o ESC para omitir");
            break;
    }
    entrada = prompt(`${nombre}, estas conforme con el servicio?`).toUpperCase();
} 


function compra(opcion) {
    while (opcion !== "ESC") {
        opcion = prompt (`Elija que articulo va a llevar: 
                                            REMERA
                                            HOODIE
                                            REMERA Y HOODIE
                                            ESC`).toUpperCase();
    if(opcion === "REMERA"){
        remera();
    } else if (opcion === "HOODIE") {
        hoodie();   
    }else if (opcion === "REMERA Y HOODIE"){
        hoodieRemera();
    }else{
        alert("Gracias por visitarnos");
    }                                                             
    }  
}

let cantidadRemera = "";
let precioRemera = 0;
let total = 0;
let cantidadHoodie = "";
let precioHoodie = 0;
const mult = (a, b) => a * b;
const suma = (a, b) => a + b;

function remera() {
    cantidadRemera = parseInt(prompt("Cuantas remeras va a llevar?"));
    precioRemera = 600
    total = 0
    if (!isNaN(cantidadRemera)) {
        total = mult(cantidadRemera, precioRemera);
        alert(`El total a pagar es: $${total}`);
    }else{
        alert("La informacion ingresada no es valida");
    }    
}

function hoodie() {
    cantidadHoodie = parseInt(prompt("Cuantos hoodies va a llevar?"));
    precioHoodie = 1500
    total = 0
    if (!isNaN(cantidadHoodie)) {
        total = mult(cantidadHoodie, precioHoodie);
        alert(`El total a pagar es: $${total}`)        
    }else{
        alert("La informacion ingresada no es valida")
    }
}

function hoodieRemera() {
    cantidadHoodie = parseInt(prompt("Cuantos hoodies va a llevar?"));
    precioHoodie = 1500
    cantidadRemera = parseInt(prompt("Cuantas remeras va a llevar?"));
    precioRemera = 600
    total = 0
    if (!isNaN(cantidadHoodie) && !isNaN(cantidadRemera)){
        total = suma(mult(cantidadHoodie, precioHoodie), mult(cantidadRemera, precioRemera))
        alert(`El total a pagar es: $${total}`) 
    }else{
        alert("La informacion ingresada no es valida")
    }
    
}
compra()