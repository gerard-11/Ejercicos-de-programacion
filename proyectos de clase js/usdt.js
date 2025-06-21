class client{
    constructor(name,Id, Adress,Credit,){
    this.name=name
    this.Id=Id
    this.Adress= Adress
    this.Credit= Credit

    }   
}

let client1= new client ("Gerardo J: Rito", 112191902, "reforma 513", "$"+ 125000)

console.table(client1) // te muestra una tabla en la consola
let numero= 1

 function evaluarNumero(numero){
    if (numero > 0){
        return "es positivo";
    } else if(numero < 0){
        return "es negativo";
    }else { 
        return "es cero";

    }
    
}

console.log(evaluarNumero(numero))
 

// comprendiendo el bubble sort
 let array= [12,44,7,8,9,1]

function bubbleSort(array){
for(let i=0; i< array.length ; i++){
    for(let j=0; j < array.length -1 ;j++){
        if(array[j]> array[j + 1]){
            let temp=array[j]
            array[j]= array[j+1]
            array[j+1]= temp
            }
        
        }
    
    }
        return array;
}
let res=bubbleSort(array)
bubbleSort(array)
console.log(res)

function mayorMenor(array){
    for(let i=0; i < array.length; i++){
        for (let j=0;j < array.length -1 ;j++){
            if (array[j] <  array[j+1]){
                let temp= array[j +1]
                array [j +1]= array [j]
                array[j]=temp              
            }
        }
      
    }
      return array;
}

mayorMenor(array)
console.log(array) 

function reverseArray(ToBeReversed){
    const reversed=[];
    function reverser(ToBeReversed){
        if (ToBeReversed.length !==0){
            reversed.push(ToBeReversed.pop());
            reverser(ToBeReversed);
        }
    }
    reverser(ToBeReversed)
    return reversed;
}

console.log(reverseArray([4]))