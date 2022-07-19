

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


callArray()
