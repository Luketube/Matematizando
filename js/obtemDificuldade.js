const facil = document.querySelector("#facil");
const medio = document.querySelector("#medio");
const dificil = document.querySelector("#dificil");

var dificuldade = [];

function obtemDificuldade(){
    dificuldade = [];
    numeros = [];

    if(facil.checked){
        dificuldade.push("facil");
        numeros.push(0, 1, 2)
    } else if(medio.checked){
        dificuldade.push("medio");
        numeros.push(0, 1, 2, 3);
    } else {
        dificuldade.push("dificil");
        numeros.push(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
    }
}

start.addEventListener("click", obtemDificuldade);