var resultado;

function realizaConta(){
    if(operacaoSorteada == "adicao"){
        resultado = numeroSorteado1 + numeroSorteado2;
    } 
    else if(operacaoSorteada == "subtracao"){
        resultado = numeroSorteado1 - numeroSorteado2;
    } 
    else if(operacaoSorteada == "multiplicacao"){
        resultado = numeroSorteado1 * numeroSorteado2;
    }
    else{
        resultado = numeroSorteado1 / numeroSorteado2;
    }
};

start.addEventListener("click", realizaConta);