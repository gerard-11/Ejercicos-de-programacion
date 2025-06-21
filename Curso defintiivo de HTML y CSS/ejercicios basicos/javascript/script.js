/* hacer una red social donde se puedra ingresar nombre y contraseña del usario
mostar si se permite o se niega el acceso al usuario y generar un msj de erros sino se ingresan los datos correctos*/


const usuarios= [
    {
        nombre:"Gerardo",
        contraseña: "147",
    },
    {
        nombre:"Carlos",
        contraseña:"245",
    },
    {
        nombre:"Juan",
        contraseña: "358",
    }
]

    const infoUsu= [{
        estado: "en linea",
        timeline:"hoy me siento feliz",
    },
    {
        estado: "en linea",
        timeline:"hoy me siento triste",
    },
    {
        estado: "en linea",
        timeline:"hoy me siento aburrido",
    },
]

let nombre= prompt("ingresa tu nombre de usuario")
let contraseña= prompt("ingresa tu contraseña en numeros")

function validacion(nombre,contraseña){
   for( let i = 0; i < usuarios.length; i++){
    if(usuarios[i].nombre === nombre && usuarios[i].contraseña=== contraseña){
    return true;
    }

        }
     return false;
}
     
function iniciarSesion(nombre,contraseña){
    if(validacion(nombre,contraseña)){
        alert(`Bienvenido a tu cuenta ${nombre}`);
        console.log(infoUsu);
    } else{
        alert("upss usuario o contraseña no validos")
    }
}
iniciarSesion(nombre,contraseña)