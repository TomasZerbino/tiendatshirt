// let nombre = prompt("Ingrese su nombre").toUpperCase();

// let numeroIngresado = parseInt(prompt(`Hola ${nombre}, ingrese un numero del 1 al 10`))

// for (let i = 1; i <= 10 ; i++) {
//     let resultado = numeroIngresado * i;
//     if(numeroIngresado > 10){
//         break;
//     }
//     alert(numeroIngresado+" x "+i+" = "+resultado)
// }

// let feed
// let entrada = prompt(`${nombre}, estas conforme con el servicio?`).toUpperCase();

// while (entrada != "ESC"){
//     switch (entrada) {
//         case "SI":
//             alert ("Te agradecemos el feedback");            
//             break;
        
//         case "NO":
//             feed = prompt(`${nombre} ayúdanos a mejorar, dando tu opinión sobre 
//             cualquier punto que consideres oportuno.`);
//             break;    
    
//         default:
//             alert("Responde SI/NO o ESC para omitir");
//             break;
//     }
//     entrada = prompt(`${nombre}, estas conforme con el servicio?`).toUpperCase();
// } 


// function compra(opcion) {
//     while (opcion !== "ESC") {
//         opcion = prompt (`Elija que articulo va a llevar: 
//                                             REMERA
//                                             HOODIE
//                                             REMERA Y HOODIE
//                                             ESC`).toUpperCase();
//     if(opcion === "REMERA"){
//         remera();
//     } else if (opcion === "HOODIE") {
//         hoodie();   
//     }else if (opcion === "REMERA Y HOODIE"){
//         hoodieRemera();
//     }else{
//         alert("Gracias por visitarnos");
//     }                                                             
//     }  
// }

// let cantidadRemera = "";
// let precioRemera = 0;
// let total = 0;
// let cantidadHoodie = "";
// let precioHoodie = 0;
// const mult = (a, b) => a * b;
// const suma = (a, b) => a + b;

// function remera() {
//     cantidadRemera = parseInt(prompt("Cuantas remeras va a llevar?"));
//     precioRemera = 600
//     total = 0
//     if (!isNaN(cantidadRemera)) {
//         total = mult(cantidadRemera, precioRemera);
//         alert(`El total a pagar es: $${total}`);
//     }else{
//         alert("La informacion ingresada no es valida");
//     }    
// }

// function hoodie() {
//     cantidadHoodie = parseInt(prompt("Cuantos hoodies va a llevar?"));
//     precioHoodie = 1500
//     total = 0
//     if (!isNaN(cantidadHoodie)) {
//         total = mult(cantidadHoodie, precioHoodie);
//         alert(`El total a pagar es: $${total}`)        
//     }else{
//         alert("La informacion ingresada no es valida")
//     }
// }

// function hoodieRemera() {
//     cantidadHoodie = parseInt(prompt("Cuantos hoodies va a llevar?"));
//     precioHoodie = 1500
//     cantidadRemera = parseInt(prompt("Cuantas remeras va a llevar?"));
//     precioRemera = 600
//     total = 0
//     if (!isNaN(cantidadHoodie) && !isNaN(cantidadRemera)){
//         total = suma(mult(cantidadHoodie, precioHoodie), mult(cantidadRemera, precioRemera))
//         alert(`El total a pagar es: $${total}`) 
//     }else{
//         alert("La informacion ingresada no es valida")
//     }
    
// }
// compra()

class Producto {
    constructor(producto, precio, cantidad){
    this.producto = producto.toUpperCase();
    this.precio = Number(precio);
    this.cantidad = Number(cantidad);
    this.vendido = false;
    this.subtotal = 0;
    this.envio = 0;
    this.total = 0;
    }
    vender() {
        this.vendido = true;
    }
    calculoSubtotal() {
        this.subtotal = this.precio * this.cantidad

    }
    calculoEnvio(){
        if(this.subtotal >= 3500){
            this.envio = 0;
        }else{
            envio = 200
        }
    }
    calculoTotal() {
        this.total = this.subtotal + this.envio;
    }
}

const productos = [];

const remera = new Producto ("Remera", 600, 0);
productos.push(remera);

const hoodie = new Producto ("Hoodie", 1500, 0);
productos.push(hoodie);


const pedidoProducto = () => {
    let producto = 0;
    let cantidadProducto = 0;
    let precio = 0;

    while ( producto == 0 || producto > 2 || !producto) {
        producto = parseInt(prompt("¿Qué producto desea comprar?:\n 1: Remera\n 2: Hoodie"));
    }

    switch(producto) {
        case 1:
            producto = "Remera";
            precio= 600;
            break;
        case 2:
            producto = "Hoodie";
            precio = 1500;
            break;
    }

while( cantidadProducto == 0 || !cantidadProducto ) {
    cantidadProducto = parseInt(prompt("Producto elegido: "+ producto + "\n Introduzca la cantidad deseada.(Solo números)"));
    }

    const compra = new Producto(producto, precio, cantidadProducto);

    return compra;    
} 

const pedido = pedidoProducto();

pedido.calculoSubtotal();
pedido.calculoEnvio();
pedido.calculoTotal();

alert("Detalle del pedido:\n\n"+
    "- "+pedido.producto+ " x " +pedido.cantidad+ ": $"+pedido.precio * pedido.cantidad +"\n" +
    "- Costo de envío: $"+pedido.envio+ "\n\n" +
    "Total = $" +pedido.total
);


