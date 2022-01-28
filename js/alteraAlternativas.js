var alternativaPrimeira = document.querySelector("#alternativa_primeira");
var alternativaSegunda = document.querySelector("#alternativa_segunda");
var alternativaTerceira = document.querySelector("#alternativa_terceira");

function alteraAlternativas(){
    let alternativaErrada1;
    let alternativaErrada2;

    alternativaPrimeira.classList.remove("correto");
    alternativaSegunda.classList.remove("correto");
    alternativaTerceira.classList.remove("correto");

    if(numeroSorteado1 == numeroSorteado2){
        alternativaErrada1 = numeroSorteado1 + 1;
        alternativaErrada2 = numeroSorteado2 + 2;
    }
    else{
        alternativaErrada1 = numeroSorteado1 + 1;
        alternativaErrada2 = numeroSorteado2 + 1;
    }
    

    indiceAlternativa = Math.floor(Math.random() * 3); 

    if(indiceAlternativa == 0){
        alternativaPrimeira.classList.add("correto");

        alternativaPrimeira.innerHTML = resultado.toFixed(2);
        alternativaSegunda.innerHTML = (resultado + alternativaErrada1).toFixed(2);
        alternativaTerceira.innerHTML = (resultado + alternativaErrada2).toFixed(2);
    } 
    else if(indiceAlternativa == 1){
        alternativaSegunda.classList.add("correto");

        alternativaPrimeira.innerHTML = (resultado + alternativaErrada1).toFixed(2);
        alternativaSegunda.innerHTML = resultado.toFixed(2);
        alternativaTerceira.innerHTML = (resultado + alternativaErrada2).toFixed(2);
    } 
    else {
        alternativaTerceira.classList.add("correto");

        alternativaPrimeira.innerHTML = (resultado + alternativaErrada1).toFixed(2);
        alternativaSegunda.innerHTML = (resultado + alternativaErrada2).toFixed(2);
        alternativaTerceira.innerHTML = resultado.toFixed(2);
    }
}

start.addEventListener("click", alteraAlternativas);