/*let canasta= ["uva", "platano", "fresa"];
    for(fruta of canasta){
        console.log(fruta);
    }

let numbers= [1, 2, 3, 4]
let sum= 0

for(let i= 0; i < numbers.length; i++){// mientras i sea menos que length(4); 
     sum+= numbers[i];

}
console.log(sum)

const palabras=["gato", "perro", "tigre", "perro", "perro", "gato"]
const nuevasPalabras= palabras.reduce((accumulator, currentValue) => {
    if (accumulator[currentValue]){
        accumulator[currentValue]++
      }  else {
    accumulator[currentValue]=1
 }

 return accumulator
    
},{});

const persona = {
    nombre: "gerardo",
    edad: 32,
    direccion:{
        calle: "reforma",
        numero: 513,
    },
    saludar(){
        console.log(`hola mi nombre es ${persona.nombre} y tengo ${persona.edad} años`)
    }

};*/

class animal{
    constructor(nombre, raza){
    this.nombre=nombre;
    this.raza=raza;

    }
    emitirSonido(){
        console.log("el animal hace un sonido");
    }
}

class Perro extends animal{
    constructor(nombre,raza,tipo){
         super(nombre, raza);
         this.tipo=tipo;
}
    emitirSonido(){
        console.log ("el perro ladra")
    }
    correr(){
        console.log(`el ${this.nombre} esta corriendo` )
    }
}

const perro1= new Perro("bobby","pastor aleman","perro")

console.log(perro1)
perro1.correr();
perro1.emitirSonido();