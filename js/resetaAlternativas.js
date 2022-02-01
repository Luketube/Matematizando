function resetaAlternativas(){
    alternativaPrimeira.classList.remove("border-0");
    alternativaPrimeira.classList.add("border-5");

    alternativaSegunda.classList.remove("border-0");
    alternativaSegunda.classList.add("border-5");

    alternativaTerceira.classList.remove("border-0");
    alternativaTerceira.classList.add("border-5");

    if(!alternativaPrimeira.classList.contains("btn-outline-primary")){
        alternativaPrimeira.classList.remove("btn-danger");
        alternativaPrimeira.classList.remove("btn-success");
        alternativaPrimeira.classList.add("btn-outline-primary")
    }

    if(!alternativaSegunda.classList.contains("btn-outline-primary")){
        alternativaSegunda.classList.remove("btn-danger");
        alternativaSegunda.classList.remove("btn-success");
        alternativaSegunda.classList.add("btn-outline-primary")
    }

    if(!alternativaTerceira.classList.contains("btn-outline-primary")){
        alternativaTerceira.classList.remove("btn-danger");
        alternativaTerceira.classList.remove("btn-success");
        alternativaTerceira.classList.add("btn-outline-primary")
    }
}

start.addEventListener("click", resetaAlternativas);