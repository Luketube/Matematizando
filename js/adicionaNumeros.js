var elementoPrimeiro = document.querySelector("#elemento_primeiro");
var elementoSegundo = document.querySelector("#elemento_segundo");

function adicionaNumeros(){
    elementoPrimeiro.innerHTML = numeroSorteado1;
    elementoSegundo.innerHTML = numeroSorteado2;
}

start.addEventListener("click", adicionaNumeros);