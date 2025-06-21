/* Ejercicio 1:

Crea una lista de contactos. 
Tienes diferentes opciones:

1.- Agregar Contacto
2.- Eliminar contacto
3.- Listar contactos

Cuando agregues un contacto, te va a pedir:
- Nombre
- Numero de telefono

Cuando eliminas un contacto:
- Muestas todos los contactos y le pides al usuario el contacto que quierse eliminar

Listar contactos:
- Muestra todos los contactos en tu lista de contactos



Temas:
Bucles(while), arrays(slice, push,findIndex), objetos


Puntos extra:
- Crea una clase llamada ListDeContactos para hacer el ejercicio



*/
 

class Person{
    constructor( name,phone,type){
    this.name= name;
    this.phone= phone;
    this.type= type
}
}
 const listaDeContactos= [];

 function agregarContactos (name,phone,type) {
    const nuevoContacto= new Contacto (name,phone,type);
    listaDeContactos.push(nuevoContacto);
 }

 function mostrarContactos(){
    alert ("lista de contactos")
    listaDeContactos.forEach( (contacto) =>contacto.mostrar())
 }

 function mostrarPorTipo(type){
    alert( `contactos del grupo: ${type}`);
    listaDeContactos
    .filter((contacto) => contacto.type === type);
     forEach((contacto)=> contacto.mostrar ())
 }

 function eliminarContacto(Person){
    alert("que contacto desea eliminar")
    listaDeContactos.reduce()
 }

