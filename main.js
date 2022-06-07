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