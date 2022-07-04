// import { stockProductos } from "./stock.js";

const contenedorProductos = document.getElementById('contenedorProductos');

const abrirCarrito = document.getElementById('shoppingBag');
const modal = document.querySelector('.modalContainer');
const cerrarCarrito = document.getElementById('cerrarCarrito')
const contenedorCarrito = document.getElementById('contenedorCarrito')
const vaciarCarrito = document.getElementById('vaciarCarrito')
const precioTotal = document.getElementById('precioTotal')



let elCarrito = []

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('elCarrito')){
        elCarrito = JSON.parse(localStorage.getItem('elCarrito'))
        ponerEnCarrito()
    }
})

vaciarCarrito.addEventListener('click', () =>{
    elCarrito.length = 0
    ponerEnCarrito()
})

cerrarCarrito.addEventListener('click', () =>{
    modal.classList.remove("modalContainerShow")
})
abrirCarrito.addEventListener('click', (e) => {
    e.preventDefault
    modal.classList.add("modalContainerShow");
})

let stockProductos = [
    {id: 1, nombre: "Remera 1", cantidad:1, precio: 600, img: "./../assets/img/remera25.jpg"},
    {id: 2, nombre: "Remera 2", cantidad:1, precio: 600, img: "./../assets/img/remera23.jpg"},
    {id: 3, nombre: "Remera 3", cantidad:1, precio: 600, img: "./../assets/img/remera24.jpg"},
    {id: 4, nombre: "Remera 4", cantidad:1, precio: 600, img: "./../assets/img/remera21.jpg"},
    {id: 5, nombre: "Remera 5", cantidad:1, precio: 600, img: "./../assets/img/remera5.png"},
    {id: 6, nombre: "Remera 6", cantidad:1, precio: 600, img: "./../assets/img/remera22.jpg"},
    {id: 7, nombre: "Hoodie 1", cantidad:1, precio: 1500, img: "./../assets/img/hoodie3.jpg"},
    {id: 8, nombre: "Hoodie 2", cantidad:1, precio: 1500, img: "./../assets/img/hoodie4.jpg"},
    {id: 9, nombre: "Hoodie 3", cantidad:1, precio: 1500, img: "./../assets/img/hoodie6.jpg"}
]


    stockProductos.forEach((producto) =>{
        const div = document.createElement('div')
        div.classList.add("cardProduct")
        div.innerHTML = `
        <img class="cardProduct__img" src=${producto.img}>
        <div class="cardProduct__description">
        <strong class="cardProduct__description__price">$${producto.precio}</strong>
        <button id="agregar${producto.id}" class="cardProduct__description__buy">Comprar</button>
        </div>    
        `
        contenedorProductos.appendChild(div)


        const btn = document.getElementById(`agregar${producto.id}`)
  
        btn.addEventListener('click', () => {
                    agregarAlCarrito(producto.id)

                    swal.fire({
                        toast: true,
                        position: 'top-start',
                        icon: 'success', 
                        title:`${producto.nombre} agregado al carrito!`,
                        timer: 3000,
                        timerProgressBar: true,
                        showConfirmButton: false,
                        background:'#556270',
                        color:'#cccaca'
                    })
        })


})

const agregarAlCarrito = (prodId) =>{
    const stack = elCarrito.some(prod => prod.id ===prodId) //buscar si existe

    if(stack){
        const prod = elCarrito.map(prod => {
            if(prod.id === prodId)
            prod.cantidad++    
        })
    }else{ const item = stockProductos.find((prod) => prod.id === prodId)
        elCarrito.push(item)
    }

    ponerEnCarrito()
}


const ponerEnCarrito = () =>{
    contenedorCarrito.innerHTML = ""

    elCarrito.forEach((prod) =>{
        const div = document.createElement("div")
        div.className = "agregadoAlCarrito"
        div.innerHTML = `<p>${prod.nombre}</p><p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p><p>Precio: $${prod.precio * prod.cantidad}</p>
        <button onclick="eliminarDeCarrito(${prod.id})" class="btnEliminarDeCarrito"><i class= "far fa-trash-alt"></i></button>`

        contenedorCarrito.appendChild(div)

        localStorage.setItem('elCarrito', JSON.stringify(elCarrito))
        
    })
    precioTotal.innerText = elCarrito.reduce((acc, prod) => acc + prod.precio*prod.cantidad,0)


}










































// class Producto {
//     constructor(nombre, precio, stock ){
//     this.nombre = nombre;
//     this.precio = Number(precio);
//     this.stock = stock;
//     }
//     nuevoStock(x){
//         this.stock = this.stock - x;
//     }
// }

// const productos = [];
// productos.push(new Producto ("remera", 600, 20));
// productos.push(new Producto ("hoodie", 1500, 20));

// const orednPrecio = () => {
//     productos.sort((a,b) => a.precio - b.precio);
//     mostratOrdenPrecio();
// }

// const listaProductos = () => {
//     let array = [];
//     productos.forEach(producto => array.push(producto.nombre+ " $"+producto.precio));
//     alert("Lista de productos:"+"\n"+array.join("\n"));
// }

// let total= 0;

// const pedidoProducto = () => {
//     let producto = "";
//     let cantidadProducto = 0;
//     let precio = 0;
//     let agregar;

//     do {
//         producto = prompt("¿Qué producto desea comprar?: remera o hoodie");
//         cantidadProducto = parseInt(prompt("Cuantos deseada llevar.(Solo números)"));

//     switch(producto) {
//         case productos[0].nombre:
//             productos[0].nuevoStock(cantidadProducto);
//             if (productos[0].stock < 0 || isNaN(cantidadProducto)){
//                 alert("No tenemos suficiente stock");
//                 precio = 0;
//                 cantidad = 0;
//             }else{
//                 precio = productos[0].precio;
//             }
//             break;
//         case productos[1].nombre:
//             productos[1].nuevoStock(cantidadProducto);
//             if(productos[1].stock < 0 || isNaN(cantidadProducto)){
//                 alert("No tenemos suficiente stock");
//                 precio = 0;
//                 cantidad = 0;
//             }else{
//                 precio = productos[1].precio;
//             }
//             break;
//         default:
//             alert("Algo de lo ingresado no es correcto") 
//             precio = 0;
//             cantidadProducto = 0;   
//         }
//         total = total + precio*cantidadProducto;
//         agregar = confirm("Desea agregar otro producto?");
//     } while (agregar);
//     console.log(total)
// }


// const descuento = (total) => {
//     if (total>=5000){
//         total = total*0.85;
//         alert("Felicitaciones tienes 15% de descuento en tu compra")
//     }
//     return total;
// }

// const envio = (total) =>{
//     if(total > 2500){
//         alert("Con compras mayores a $2500 envio gratis\n Tu compra es de: $"+total);
//     }else {
//         alert("El valor del envio es $200 \n Tu compra es de: $"+total);
//         total = total + 200;
//     }
//     return total;
// }
// const obtenerTotal = (total) => {
//     alert ("El total a pagar es $"+total);
// }



// const comprarProductos = () =>{
//     pedidoProducto()
//     obtenerTotal(envio(descuento(total)))
// }

//de momento funciona unicamente con el boton de la primera card
// let botonComprar = document.querySelector("button.cardProduct__description__buy")
// botonComprar.onclick = () =>{comprarProductos()}







