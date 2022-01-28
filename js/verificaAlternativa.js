function verificaAlternativaPrimeira (){
    if(alternativaPrimeira.classList.contains("correto")){
        alternativaPrimeira.classList.remove("btn-outline-primary");
        alternativaPrimeira.classList.remove("border-5");
        alternativaPrimeira.classList.add("border-0");
        alternativaPrimeira.classList.add("btn-success");
        setTimeout(() => {  refresh(); }, 1000);
    }
    else{
        alternativaPrimeira.classList.remove("border-5");
        alternativaPrimeira.classList.add("border-0");
        alternativaPrimeira.classList.remove("btn-outline-primary");
        alternativaPrimeira.classList.add("btn-danger");

    }
}

function verificaAlternativaSegunda (){
    if(alternativaSegunda.classList.contains("correto")){
        alternativaSegunda.classList.remove("btn-outline-primary");
        alternativaSegunda.classList.remove("border-5");
        alternativaSegunda.classList.add("border-0");
        alternativaSegunda.classList.add("btn-success");
        setTimeout(() => {  refresh(); }, 1000);
    }
    else{
        alternativaSegunda.classList.remove("border-5");
        alternativaSegunda.classList.add("border-0");
        alternativaSegunda.classList.remove("btn-outline-primary");
        alternativaSegunda.classList.add("btn-danger");

    }
}

function verificaAlternativaTerceira (){
    if(alternativaTerceira.classList.contains("correto")){
        alternativaTerceira.classList.remove("btn-outline-primary");
        alternativaTerceira.classList.remove("border-5");
        alternativaTerceira.classList.add("border-0");
        alternativaTerceira.classList.add("btn-success");
        setTimeout(() => {  refresh(); }, 1000);
    }
    else{
        alternativaTerceira.classList.remove("border-5");
        alternativaTerceira.classList.add("border-0");
        alternativaTerceira.classList.remove("btn-outline-primary");
        alternativaTerceira.classList.add("btn-danger");

    }
}


alternativaPrimeira.addEventListener("click", verificaAlternativaPrimeira);
alternativaSegunda.addEventListener("click", verificaAlternativaSegunda);
alternativaTerceira.addEventListener("click", verificaAlternativaTerceira);