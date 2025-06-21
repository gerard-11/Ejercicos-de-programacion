// calculadora de años perrunos 
// el pirmer año de la vida de un perro equivale a 15 años humanos el segundo a 9 años y 
//a aprti del 3r años valen 5 años humanos
/*
let año1Perro= 15
let año2Perro= 9  
let año3EnAdelante=5
let edadActualPerro=13
function calculadoraAñosPerro(){
    if( edadActualPerro==1){
       return console.log("tu perro tiene :", año1Perro, "años humanos")
    } else if (edadActualPerro== 2){
        return console.log( "tu perro tiene: ", año1Perro + año2Perro, "años humanos")
    } else if ( edadActualPerro >= 3){
        return console.log("tu perro tiene :", + año1Perro + año2Perro + año3EnAdelante)
    } 

}
calculadoraAñosPerro()

let edadPerro=5
let edadMeses= edadPerro / 12 
let edadHumana=0

function calcularEdadPerro(){
    if (edadPerro == 1){
        edadHumana+= 15;
        console.log("tu perro tiene: ", edadHumana, "años humanos")
        return;
    } else if (edadPerro == 2){
       edadHumana+= 15 + 9;
       console.log("tu perro tiene: ", edadHumana, "años humanos")
       return;
    } else if(edadPerro >=3){
        edadHumana+= 15 + 9 + (edadPerro - 2 ) * 5;
        console.log("tu perro tiene: ", edadHumana, "años humanos")
        return;
    } else {
        console.log("edad no valida ")
    }

}
calcularEdadPerro()*/

                                                                                                                             
let numeros = [5, 15, 25, 10];
let suma=0;
let promedio= suma / numeros.length;

for (const numero of numeros){
    suma+= numero
}


console.log(promedio)


let frase="las flores son azules"
let palabraInicial= 4
let palabraFinal=10
let palabra= frase.substring(palabraInicial , palabraFinal)

//let extraccion= palabras.substring(4, 10)
console.log(palabra)

