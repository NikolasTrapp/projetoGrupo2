document.querySelector("#botao-pesquisa").addEventListener("click", function(){
    pesquisa = document.getElementById("pesquisa").value;

    // Gerar uma lista de carros baseada nos valores informados
    const lista_carros = carros.filter(function (carro) {
        return carro.modelo == pesquisa || carro.marca == pesquisa;
    })

    if (lista_carros.length <= 0){
        alert("Nenhum carro encontrado!");
    } else {
        sessionStorage.setItem("CARROS", JSON.stringify(lista_carros));
        window.location = "estoque.html";
    }
});