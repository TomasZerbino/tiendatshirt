

const contenedorProductos = document.getElementById('contenedorProductos');

const abrirCarrito = document.getElementById('shoppingBag');
const modal = document.querySelector('.modalContainer');
const cerrarCarrito = document.getElementById('cerrarCarrito')
const contenedorCarrito = document.getElementById('contenedorCarrito')
const vaciarCarrito = document.getElementById('vaciarCarrito')
const precioTotal = document.getElementById('precioTotal')
const btnBorrar = document.querySelector('.btnEliminarDeCarrito')


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

const callArray = async () =>{
    const resp = await fetch('./../stock.json')
    const prod = await resp.json() 
    let stockProductos = prod
    

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
    const stack = elCarrito.some(prod => prod.id ===prodId) 

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
}


const ponerEnCarrito = () =>{
    contenedorCarrito.innerHTML = ""

    elCarrito.forEach((prod) =>{
        const div = document.createElement("div")
        div.className = "agregadoAlCarrito"
        div.innerHTML = `<p>${prod.nombre}</p><p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p><p>Precio: $${prod.precio * prod.cantidad}</p>
        <button class="btnEliminarDeCarrito"><i class= "far fa-trash-alt"></i></button>`

        contenedorCarrito.appendChild(div)

        localStorage.setItem('elCarrito', JSON.stringify(elCarrito))
        
    })
    precioTotal.innerText = elCarrito.reduce((acc, prod) => acc + prod.precio*prod.cantidad,0)

}

console.log(elCarrito)
callArray()







// const contenedorProductos = document.getElementById('contenedorProductos');

// const abrirCarrito = document.getElementById('shoppingBag');
// const modal = document.querySelector('.modalContainer');
// const cerrarCarrito = document.getElementById('cerrarCarrito')
// const contenedorCarrito = document.getElementById('contenedorCarrito')
// const vaciarCarrito = document.getElementById('vaciarCarrito')
// const precioTotal = document.getElementById('precioTotal')



// let elCarrito = []

// document.addEventListener('DOMContentLoaded', () => {
//     if (localStorage.getItem('elCarrito')){
//         elCarrito = JSON.parse(localStorage.getItem('elCarrito'))
//         ponerEnCarrito()
//     }
// })

// vaciarCarrito.addEventListener('click', () =>{
//     elCarrito.length = 0
//     ponerEnCarrito()
// })

// cerrarCarrito.addEventListener('click', () =>{
//     modal.classList.remove("modalContainerShow")
// })
// abrirCarrito.addEventListener('click', (e) => {
//     e.preventDefault
//     modal.classList.add("modalContainerShow");
// })

// let stockProductos = [
//     {id: 1, nombre: "Remera 1", cantidad:1, precio: 600, img: "./../assets/img/remera25.jpg"},
//     {id: 2, nombre: "Remera 2", cantidad:1, precio: 600, img: "./../assets/img/remera23.jpg"},
//     {id: 3, nombre: "Remera 3", cantidad:1, precio: 600, img: "./../assets/img/remera24.jpg"},
//     {id: 4, nombre: "Remera 4", cantidad:1, precio: 600, img: "./../assets/img/remera21.jpg"},
//     {id: 5, nombre: "Remera 5", cantidad:1, precio: 600, img: "./../assets/img/remera5.png"},
//     {id: 6, nombre: "Remera 6", cantidad:1, precio: 600, img: "./../assets/img/remera22.jpg"},
//     {id: 7, nombre: "Hoodie 1", cantidad:1, precio: 1500, img: "./../assets/img/hoodie3.jpg"},
//     {id: 8, nombre: "Hoodie 2", cantidad:1, precio: 1500, img: "./../assets/img/hoodie4.jpg"},
//     {id: 9, nombre: "Hoodie 3", cantidad:1, precio: 1500, img: "./../assets/img/hoodie6.jpg"}
// ]


//     stockProductos.forEach((producto) =>{
//         const div = document.createElement('div')
//         div.classList.add("cardProduct")
//         div.innerHTML = `
//         <img class="cardProduct__img" src=${producto.img} alt= "">
//         <div class="cardProduct__description">
//         <strong class="cardProduct__description__price">$${producto.precio}</strong>
//         <button id="agregar${producto.id}" class="cardProduct__description__buy">Comprar</button>
//         </div>    
//         `
//         contenedorProductos.appendChild(div)


//         const btn = document.getElementById(`agregar${producto.id}`)
  
//         btn.addEventListener('click', () => {
//                     agregarAlCarrito(producto.id)

                   
//         })

//         btn.addEventListener('click', () => {
//             swal.fire({
//                 toast: true,
//                 position: 'top-start',
//                 icon: 'success', 
//                 title:`${producto.nombre} agregado al carrito!`,
//                 timer: 3000,
//                 timerProgressBar: true,
//                 showConfirmButton: false,
//                 background:'#556270',
//                 color:'#cccaca'
//             })
      
//         })


// })
  




// const agregarAlCarrito = (prodId) =>{
//     const stack = elCarrito.some(prod => prod.id ===prodId) //buscar si existe

//     if(stack){
//         const prod = elCarrito.map(prod => {
//             if(prod.id === prodId)
//             prod.cantidad++    
//         })
//     }else{ const item = stockProductos.find((prod) => prod.id === prodId)
//         elCarrito.push(item)
//     }    

//     ponerEnCarrito()
// }

// const eliminarDeCarrito = (prodId) => {
//     const item = elCarrito.find((prod) => prod.id === prodId)

//     const indice = elCarrito.indexOf(item) 

//     elCarrito.splice(indice, 1) 

//     ponerEnCarrito() 

// }

// const ponerEnCarrito = () =>{
//     contenedorCarrito.innerHTML = ""

//     elCarrito.forEach((prod) =>{
//         const div = document.createElement("div")
//         div.className = "agregadoAlCarrito"
//         div.innerHTML = `<p>${prod.nombre}</p><p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p><p>Precio: $${prod.precio}</p>
//         <button onclick="eliminarDelCarrito(${prod.id})" class="btnEliminarDeCarrito"><i class= "far fa-trash-alt"></i></button>`

//         contenedorCarrito.appendChild(div)

//         localStorage.setItem('elCarrito', JSON.stringify(elCarrito))
        
//     })
//     precioTotal.innerText = elCarrito.reduce((acc, prod) => acc + prod.precio*prod.cantidad,0)


// }
// console.log(elCarrito)