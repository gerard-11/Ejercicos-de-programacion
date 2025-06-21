/* 

function mergeSort(arr){
    if (arr.length <= 1 ){
        return arr;
    }
    let dividirArray=Math.floor(arr.length /2)
    let mitad1= arr.slice(0, dividirArray)
    let mitad2= arr.slice(dividirArray)

    let mitad1Izquierda= mergeSort(mitad1)
    let mitad2Derecha =mergeSort(mitad2)
    

    return unificar(mitad1Izquierda, mitad2Derecha)


}

function unificar(Izquierda,Derecha){
    let resultado=[]
    while(Izquierda.length && Derecha.length){
        if (Izquierda[0] < Derecha[0]){
        resultado.push(Izquierda.shift())
    }else {
        resultado.push(Derecha.shift())
    }
    }
    return resultado.concat(Izquierda, Derecha)
    
}
let array=[25,26,58,45,47,89,12,35,46,69,15];
console.log(mergeSort(array)) */


// tengo que entregar $27 pesos de cambio y tengo monedas de 1, 5,10 y 20 pesos 
// asigono una variable para saber cuanto debo dar de cambio 
// asigno otra variable para saber que monedas tengo disponibles
// hago un array vacio para guardar las monedas entregadas 
// hago una function para validar que moiendas debo entregar 
// dentro de la funcion hago la resta y la compracion con un ciclo while para verifcar que mi variable donde guarde 
// el cambio a entregar se = a 0 y ahi detengo el ciclo compara si la moneda a entregar es menor que el cambio restante



let devolverCambio= 27;
let monedasDisponibles= [1,2,5,10]
let devolucion=[]
//me falto la logica para acomodar las monedas de mayor a menor y algunos detalles con return y el index en 
// las comparaciones

 
function entregarMonedas(devolverCambio){
    monedasDisponibles.sort((a, b ) => b - a)
    while(devolverCambio > 0){
        for(let i=0; i < monedasDisponibles.length; i++){
            if (monedasDisponibles[i] <= devolverCambio ){
                devolucion.push(monedasDisponibles[i]) 
                 devolverCambio-=monedasDisponibles[i];
                 break;
        }
}

    }
    return devolucion;
}
console.log(entregarMonedas(15)) 

const array1 = [1, 30, 4, 21, 100000];
array1.sort((a,b) => a-b);//ordena de menor a mayor
console.log(array1);

