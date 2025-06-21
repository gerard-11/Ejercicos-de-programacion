//numero par o impar

/*let numero= Number(prompt("ingresa un numero"));
let numeros=[]

if(isNaN (numero)){
    alert("ingresa un numero ")
}else if(numero % 2 ===0){
alert("numero Par")
}else{
    alert("numero impar")
    
}; 


let entrada= Number(prompt("agrega un numero"))  

if(!isNaN(entrada)){
    numeros.push(entrada)
} else{
    alert("agrega un numero ")
}

for(let i=0; i< numeros.length; i++){

}
let numeros=[5,7,8,9,6,2,12,12,13];
let pares=0;
let mayores=0;
let impares=0;
const arrayPares=[]
const arrayimPares=[]
const arrayMayores=[]

for(let i=0; i< numeros.length; i++){
    if (numeros[i]%2===0 && numeros[i] < 10) {
    pares+=numeros[i]
    arrayPares.push(numeros[i])
    }if (numeros[i]>10){
    mayores+=numeros[i]
    arrayMayores.push(numeros[i])
    }if (numeros[i]%2!==0){
    impares+=numeros[i]
    arrayimPares.push(numeros[i])
    }
}
console.log(arrayimPares,arrayPares,arrayMayores)



let listaDeCompras=[]


listaDeCompras.push("avena","huevo", "leche")

let listaEnMayusculas=listaDeCompras.map(may=> may.toUpperCase())
listaEnMayusculas.slice(0, 2)
console.log(listaDeCompras)
console.log(listaEnMayusculas.slice(0, 2))


let usuario = {
  nombre: "Carlos",
  edad: 30,
  ciudad: "Lima"
};

for(prop in usuario){
    console.log(usuario[prop])
}

let tareas = ["Lavar platos", "Sacar la basura", "Estudiar JS","comer", "bañarse"];


for(tarea of tareas){
    console.log(tarea)
}


let energia= 5;

while (energia >0){
   energia--;
    console.log("energia restante:" + energia)
    if(energia===0){
        console.log("te quedaste sin energia")
    }
    
};

function recomendarPorClima(clima){

    switch(clima){

        case "lluvioso": console.log("el clima es lluvioso, usa sombrilla")
        
        break;

        case "soleado": console.log("el dia esta soleado, usa bloqueador")
        break;

        case "nublado":  console.log("posible lluvia, lleva sombrilla")
        
        break;


        default: console.log ("no conzoco este clima, ingresa informacion valida")
    }
    
 
}
    let climasBuscados= []
    let clima;
   

     do{
         clima=prompt("como se ve el clima hoy")
         recomendarPorClima(clima)

         climasBuscados.push(clima)

    }while(clima !=="salir")*/
        
        let listaDeFrutas=["fresa", "uva", "melon","sandia"]
        
        for(let i=0; i< listaDeFrutas.length; i++ ){
            console.log(listaDeFrutas[i])
        }
        let operacion= prompt("que operacion quieres realizar?")

        function operacionesMat(a,b, operacion){
            switch(operacion){
                case "suma":
                    console.log(a+b);
                    return;

                case "resta": 
                console.log(a-b);
                return;
            
            case "division":
                console.log(a/b);
                return;

                case "multiplicacion":
                    console.log(a*b)
                    return;
                default:
                    console.error("la operacion "+ operacion + "no es valida")
            }
        }

        operacionesMat(15, 3, operacion)




