//Nikolas

//Pegar a div que comporta os carros
const estoque = document.getElementById("estoque");

//Função para gerar a estrutura recebendo a lista como parâmetro
function gerarEstrutura(carros) {
    let estrutura = ""; //Criar a estrutura
        for (var i = 0; i < carros.length; i += 3) { // Percorrer a lista de carros de 3 em 3
            estrutura += '<div class="row">'; // Criar a linha
            // Adicionar o primeiro carro
            estrutura += `
                <div class="col-sm-4 col-12 pt-2 pb-5">
                    <div class="card" style="width: 100%;">
                        <img src="img/${carros[i].nome_imagem}" class="card-img-top" alt="${carros[i].nome_imagem}" style="width: 100%; height: 275px;">
                        <div class="card-body">
                            <div class="text-start">
                                <h5 class="card-title">${carros[i].modelo} - ${carros[i].ano}</h5>
                                <span class="card-text descricao">${carros[i].descricao}</span>
                                <span class="card-text descricao">${carros[i].ano} | ${carros[i].quilometragem} km</span>
                                <span class="preco">R$ ${carros[i].preco.toFixed(2)}</span>
                            </div>
                            <div class="text-end">
                                <a href="#" class="btn btn-outline-dark btn-sm" >VER MAIS</a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            //Adicionar o segundo carro caso a lista recebida tenha este index
            if (i + 1 < carros.length) {
                estrutura += `
                <div class="col-sm-4 col-12 pt-2 pb-5">
                    <div class="card" style="width: 100%;">
                        <img src="img/${carros[i + 1].nome_imagem}" class="card-img-top" alt="${carros[i + 1].nome_imagem}" style="width: 100%; height: 275px;">
                        <div class="card-body">
                            <div class="text-start">
                                <h5 class="card-title">${carros[i + 1].modelo} - ${carros[i + 1].ano}</h5>
                                <span class="card-text descricao">${carros[i + 1].descricao}</span>
                                <span class="card-text descricao">${carros[i + 1].ano} | ${carros[i + 1].quilometragem} km</span>
                                <span class="preco">R$ ${carros[i + 1].preco.toFixed(2)}</span>
                            </div>
                            <div class="text-end">
                                <a href="#" class="btn btn-outline-dark btn-sm">VER MAIS</a>
                            </div>
                        </div>
                    </div>
                </div>
                `;
            }
            //Adicionar o terceiro carro caso a lista recebida tenha este index
            if (i + 2 < carros.length){
                estrutura += `
                <div class="col-sm-4 col-12 pt-2 pb-5">
                    <div class="card" style="width: 100%;">
                        <img src="img/${carros[i + 2].nome_imagem}" class="card-img-top" alt="${carros[i + 2].nome_imagem}" style="width: 100%; height: 275px;">
                        <div class="card-body">
                            <div class="text-start">
                                <h5 class="card-title">${carros[i + 2].modelo} - ${carros[i + 2].ano}</h5>
                                <span class="card-text descricao">${carros[i + 2].descricao}</span>
                                <span class="card-text descricao">${carros[i + 2].ano} | ${carros[i + 2].quilometragem} km</span>
                                <span class="preco">R$ ${carros[i + 2].preco.toFixed(2)}</span>
                            </div>
                            <div class="text-end">
                                <a href="#" class="btn btn-outline-dark btn-sm">VER MAIS</a>
                            </div>
                        </div>
                    </div>
                </div>
                `;
            }
            estrutura += "</div>" //Completar a estrutura

        }
    return estrutura; //Retornar a estrutura
}

//Função para carregar os veículos na div principal
function carregarVeiculos(lista_carros) {
    estoque.innerHTML = gerarEstrutura(lista_carros);
}

//Função para carregar os valores no filtro de veículos
function carregarValores() {
    //Pegar os containers
    const marcas = document.querySelector("#marcas-container");
    const modelos = document.querySelector("#modelos-container");
    //Criar sets com as marcas e modelos existentes
    let marcas_carro = new Set(carros.map(carro => carro.marca));
    let modelos_carro = new Set(carros.map(carro => carro.modelo));

    //Gerar as estruturas e inseri-las na tela
    marcas_carro.forEach(marca => {
        marcas.innerHTML += `<label class="d-block"><input class="marcas" type="checkbox" value="${marca}"> ${marca}</label>`;
    });
    modelos_carro.forEach(modelo => {
        modelos.innerHTML += `<label class="d-block"><input class="modelos" type="checkbox" value="${modelo}"> ${modelo}</label>`;
    });
}

//Pegar evento de clique do botão de pesquisar modelos ou marcas
document.querySelector("#bt-pesquisa").addEventListener("click", function () {
    //Pegar o valor informado pelo usuário no input
    const pesquisa = document.getElementById("pesquisa").value;

    // Gerar uma lista de carros baseada nos valores informados
    const lista_carros = carros.filter(function (carro) {
        return carro.modelo == pesquisa || carro.marca == pesquisa;
    })

    //Se a lista possuir um registro: Gerar estrutura, caso contrário informar erro
    if (lista_carros.length > 0) {
        estoque.innerHTML = gerarEstrutura(lista_carros);
    } else {
        alert("Não encontramos nenhum veículo com esta marca ou modelo!");
    }
});

//Adicionar evento de clique ao botão de aplicar os filtros
document.querySelector("#aplicar-filtros").addEventListener("click", function () {
    //Iniciar variaveis
    var lista_marcas = [];
    var lista_modelos = [];
    let anoMin = document.getElementById("ano-minimo").value;
    let anoMax = document.getElementById("ano-maximo").value;
    let precoMin = document.getElementById("preco-minimo").value;
    let precoMax = document.getElementById("preco-maximo").value;

    //Pegar as marcas e modelos selecionados, caso estejam selecionados: Adicionar à lista
    for (let marca of document.querySelectorAll(".marcas")) {
        marca.checked ? lista_marcas.push(marca.value) : null;
    }
    for (let modelo of document.querySelectorAll(".modelos")) {
        modelo.checked ? lista_modelos.push(modelo.value) : null;
    }

    //Aplicar o primeiro filtro, verificar as marcas
    let filtro = carros.filter(function (carro) {
        if (lista_marcas.length > 0) {
            return lista_marcas.includes(carro.marca.trim());
        } else {
            return true;
        }
    }).filter(function (carro) { //Segundo filtro, verificar os modelos
        if (lista_modelos.length > 0) {
            return lista_modelos.includes(carro.modelo.trim());
        } else {
            return true;
        }
    }).filter(function (carro) { //Terceiro filtro, verificar o ano
        if (anoMin || anoMax) {
            if (anoMin && !anoMax) {
                return carro.ano >= anoMin;
            } else if (!anoMin && anoMax) {
                return carro.ano <= anoMax;
            } else {
                return carro.ano >= anoMin && carro.ano <= anoMax;
            }
        } else {
            return true;
        }
    }).filter(function (carro) { //Quarto filtro, verificar o preço
        if (precoMin || precoMax) {
            if (precoMin && !precoMax) {
                return carro.preco >= precoMin;
            } else if (!precoMin && precoMax) {
                return carro.preco <= precoMax;
            } else {
                return carro.preco >= precoMin && carro.preco <= precoMax;
            }
        } else {
            return true;
        }
    });

    //Caso o filtro gere uma lista com mais de um valor, inseri-los na tela, caso contrário informar erro
    if (filtro.length > 0) {
        estoque.innerHTML = gerarEstrutura(filtro);
    } else {
        alert("Nenhum carro encontrado")
    }
});

//Adicionar valores à janela modal
function modal(modelo) {
    document.querySelector("#titulo-modal").innerHTML += " ao " + modelo;
    document.querySelector("#botao-enviar").setAttribute("rel", modelo);
}

//Adicionar evento de clique ao botão de enviar da janela modal (Não possui efeitos práticos)
document.querySelector("#botao-enviar").addEventListener("click", function () {
    let dados = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        telefone: document.getElementById("telefone").value,
        endereco: document.getElementById("endereco").value
    }

    interesses.push(dados);
    alert("Interesse registrado com sucesso!")
});

//Adicionar evento de clique ao botão de limpar os filtros (Reiniciar os valores)
document.querySelector("#limpar-filtros").addEventListener("click", function () {
    document.querySelectorAll(".marcas").forEach(input => input.checked = false);
    document.querySelectorAll(".modelos").forEach(input => input.checked = false);
    document.getElementById("ano-minimo").value = "";
    document.getElementById("ano-maximo").value = "";
    document.getElementById("preco-minimo").value = "";
    document.getElementById("preco-maximo").value = "";
    estoque.innerHTML = gerarEstrutura(carros);
});

//Iniciar as listas
if (sessionStorage.CARROS == null){
    carregarVeiculos(carros);
} else {
    carregarVeiculos(JSON.parse(sessionStorage.CARROS));
    sessionStorage.removeItem("CARROS");
}
carregarValores();