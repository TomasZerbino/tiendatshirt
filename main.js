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
    constructor(nombre, precio, stock ){
    this.nombre = nombre;
    this.precio = Number(precio);
    this.stock = stock;
    }
    nuevoStock(x){
        this.stock = this.stock - x;
    }
}

const productos = [];
productos.push(new Producto ("remera", 600, 20));
productos.push(new Producto ("hoodie", 1500, 20));

const orednPrecio = () => {
    productos.sort((a,b) => a.precio - b.precio);
    mostratOrdenPrecio();
}

const listaProductos = () => {
    let array = [];
    productos.forEach(producto => array.push(producto.nombre+ " $"+producto.precio));
    alert("Lista de productos:"+"\n"+array.join("\n"));
}

let total= 0;

const pedidoProducto = () => {
    let producto = "";
    let cantidadProducto = 0;
    let precio = 0;
    let agregar;

    do {
        producto = prompt("¿Qué producto desea comprar?: remera o hoodie");
        cantidadProducto = parseInt(prompt("Cuantos deseada llevar.(Solo números)"));

    switch(producto) {
        case productos[0].nombre:
            productos[0].nuevoStock(cantidadProducto);
            if (productos[0].stock < 0 || isNaN(cantidadProducto)){
                alert("No tenemos suficiente stock");
                precio = 0;
                cantidad = 0;
            }else{
                precio = productos[0].precio;
            }
            break;
        case productos[1].nombre:
            productos[1].nuevoStock(cantidadProducto);
            if(productos[1].stock < 0 || isNaN(cantidadProducto)){
                alert("No tenemos suficiente stock");
                precio = 0;
                cantidad = 0;
            }else{
                precio = productos[1].precio;
            }
            break;
        default:
            alert("Algo de lo ingresado no es correcto") 
            precio = 0;
            cantidadProducto = 0;   
        }
        total = total + precio*cantidadProducto;
        agregar = confirm("Desea agregar otro producto?");
    } while (agregar);
    console.log(total)
}


const descuento = (total) => {
    if (total>=5000){
        total = total*0.85;
        alert("Felicitaciones tienes 15% de descuento en tu compra")
    }
    return total;
}

const envio = (total) =>{
    if(total > 2500){
        alert("Con compras mayores a $2500 envio gratis\n Tu compra es de: $"+total);
    }else {
        alert("El valor del envio es $200 \n Tu compra es de: $"+total);
        total = total + 200;
    }
    return total;
}
const obtenerTotal = (total) => {
    alert ("El total a pagar es $"+total);
}



const comprarProductos = () =>{
    pedidoProducto()
    obtenerTotal(envio(descuento(total)))
}
comprarProductos()
