var numeros = [];
var numeroSorteado1;
var numeroSorteado2;

function sorteiaNumeros(){
    if(operacoes == "divisao"){
        numeroSorteado1 = Math.floor(Math.random() * numeros.length);
        numeroSorteado2 = (Math.floor(Math.random() * numeros.length )) + 1;
    } 
    else {
        numeroSorteado1 = Math.floor(Math.random() * numeros.length);
        numeroSorteado2 = Math.floor(Math.random() * numeros.length);
    }
}

start.addEventListener("click", sorteiaNumeros);