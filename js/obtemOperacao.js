const start = document.querySelector(".start_botao");
const adicao = document.querySelector("#adicao");
const subtracao = document.querySelector("#subtracao");
const multiplicacao = document.querySelector("#multiplicacao");
const divisao = document.querySelector("#divisao");

var operacoes = [];
var sinalOperacao =[];

function obtemOperacao (){
    operacoes = []; 
    sinalOperacao =[];
    
    if(adicao.checked){
        operacoes.push("adicao");
        sinalOperacao.push ("+");
    }
    if(subtracao.checked){
        operacoes.push("subtracao");
        sinalOperacao.push ("-");
    }
    if(multiplicacao.checked){
        operacoes.push("multiplicacao");
        sinalOperacao.push ("x");
    }
    if(divisao.checked){
        operacoes.push("divisao");
        sinalOperacao.push ("%");
    }
    return(operacoes);
}

start.addEventListener("click", obtemOperacao);