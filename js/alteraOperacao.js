var elementoOperacao = document.querySelector("#elemento_operacao");
var operacaoSorteada;

function alteraOperacao(){
    let indiceOperacao = Math.floor(Math.random() * sinalOperacao.length);
    elementoOperacao.innerHTML = sinalOperacao[indiceOperacao];
    operacaoSorteada = operacoes[indiceOperacao]
}

start.addEventListener("click", alteraOperacao);