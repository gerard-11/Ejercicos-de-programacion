/*console.log("Inicio");

setTimeout(() => {
  console.log("Tarea asincrónica");
}, 3000);

console.log("Fin");

function fetchData(){
    fetch ("https://rickandmortyapi.com/api/character"

    )
    .then((response) => response.json())
    .then ((data)=> console.log(data))
    .catch ((error) => console.log (error));

}*/

async function fetchData(){
    try {
        let response = await fetch("https://rickandmortyapi.com/api/character") // aqui se espera que se resuelva la promesa
        let data= await response.json();
        console.log(data)
    } catch (error){
        console.log(error);
    }
}