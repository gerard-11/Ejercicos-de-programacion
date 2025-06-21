function aleatorio( min, max){
    return Math.floor(Math.random() * (max - min + 1) + min )
 }

    function eleccion(jugada){
        let resultado=""
        if (jugada== 1){
            resultado= " piedra"
        } else if (jugada == 2){
            resultado= " papel"
        } else if(jugada == 3) {
            resultado=  " tijera"
        } else {
            resultado=  " nulo"
        }
        return resultado;
}
        let jugador= 0
        let pc= 0
        let triunfos = 0
        let perdidas= 0 
        while (triunfos < 3 && perdidas< 3){
        pc= aleatorio (1, 3)
        jugador= prompt( "elige 1 para piedra, 2 para papel y 3 para tijera")
        
        alert("tu eliges: " + eleccion (jugador))
        alert("pc eligio: " + eleccion (pc) )
   
    //COMBATE

        if (pc== jugador){
            alert("empate")
        } else if (pc==1 && jugador == 2){
            alert( "ganaste")
            triunfos = triunfos + 1
        } else if (pc== 2 && jugador==3 ){
            alert ("ganaste")
            triunfos = triunfos + 1
        } else if (pc == 3 && jugador == 1) {
            alert("ganaste")
            triunfos = triunfos + 1
        } else {
            alert ("perdiste")
            perdidas= perdidas + 1
        }
    
}

    alert(" llevas " + ( triunfos ) + " triunfos y llevas " + ( perdidas ) + " perdidas " )