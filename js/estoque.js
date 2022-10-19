//Nikolas

//Pegar a div que comporta os carros
const estoque = document.getElementById("estoque");
var atual = 1;
var max = 1;
const campo_alert = document.getElementById("liveAlertPlaceholder");

//Função para gerar a estrutura recebendo a lista como parâmetro
function gerarEstrutura(lista_carros) {
    var max = Math.ceil(lista_carros.length / 9);
    let estrutura = "";
    document.querySelector("#paginacao").innerHTML = `<a href="#" onclick="anterior()">&lt;</a>&nbsp;&nbsp;`;
    for (let i = 0; i < max; i++) {
        estrutura += (i == 0) ? `<div class="container paginas text-center" id="pagina-${i + 1}" style="display: inline-block;">` : `<div class="container paginas text-center" id="pagina-${i + 1}" style="display: none;">`;
        for (let j = i * 9; j < (i + 1) * 9; j++) {
            if (j % 3 == 0) {
                if (j < lista_carros.length) {
                    estrutura += `
                            <div class="row">
                            <div class="col col-sm-4 col-12 pb-5">
                                <div class="card" style="width: 100%;">
                                    <img src="img/${lista_carros[j].nome_imagem}" class="card-img-top" alt="${lista_carros[j].nome_imagem}" style="width: 100%; height: 275px;">
                                    <div class="card-body">
                                        <div class="text-start">
                                            <h5 class="card-title">${lista_carros[j].modelo} - ${lista_carros[j].ano}</h5>
                                            <span class="card-text descricao">${lista_carros[j].descricao}</span>
                                            <span class="card-text descricao">${lista_carros[j].ano} | ${lista_carros[j].quilometragem} km</span>
                                            <span class="preco">R$ ${lista_carros[j].preco.toFixed(2)}</span>
                                        </div>
                                        <div class="text-end">
                                            <a href="#" class="btn btn-outline-dark btn-sm" rel="${lista_carros[j].id}">VER MAIS</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
                }

                if (j + 1 < lista_carros.length) {
                    estrutura += `
                            <div class="col col-sm-4 col-12 pb-5">
                                <div class="card" style="width: 100%;">
                                    <img src="img/${lista_carros[j + 1].nome_imagem}" class="card-img-top" alt="${lista_carros[j + 1].nome_imagem}" style="width: 100%; height: 275px;">
                                    <div class="card-body">
                                        <div class="text-start">
                                            <h5 class="card-title">${lista_carros[j + 1].modelo} - ${lista_carros[j + 1].ano}</h5>
                                            <span class="card-text descricao">${lista_carros[j + 1].descricao}</span>
                                            <span class="card-text descricao">${lista_carros[j + 1].ano} | ${lista_carros[j + 1].quilometragem} km</span>
                                            <span class="preco">R$ ${lista_carros[j + 1].preco.toFixed(2)}</span>
                                        </div>
                                        <div class="text-end">
                                            <a href="#" class="btn btn-outline-dark btn-sm" rel="${lista_carros[i + 1].id}">VER MAIS</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
                }

                if (j + 2 < lista_carros.length) {
                    estrutura += `
                            <div class="col col-sm-4 col-12 pb-5">
                                <div class="card" style="width: 100%;">
                                    <img src="img/${lista_carros[j + 2].nome_imagem}" class="card-img-top" alt="${lista_carros[j + 2].nome_imagem}" style="width: 100%; height: 275px;">
                                    <div class="card-body">
                                        <div class="text-start">
                                            <h5 class="card-title">${lista_carros[j + 2].modelo} - ${lista_carros[j + 2].ano}</h5>
                                            <span class="card-text descricao">${lista_carros[j + 2].descricao}</span>
                                            <span class="card-text descricao">${lista_carros[j + 2].ano} | ${lista_carros[j + 2].quilometragem} km</span>
                                            <span class="preco">R$ ${lista_carros[j + 2].preco.toFixed(2)}</span>
                                        </div>
                                        <div class="text-end">
                                            <a href="#" class="btn btn-outline-dark btn-sm" rel="${lista_carros[j + 2].id}">VER MAIS</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
                }
                estrutura += '</div>';
            }
        }
        estrutura += "</div>";
        document.querySelector("#paginacao").innerHTML += (i + 1 == 1) ? `<a href="#" class="links-paginacao" id="link-${i + 1}" onclick="paginar('pagina-${i + 1}')" style="color: red; text-decoration: underline;">${i + 1}</a>&nbsp;&nbsp;` :
            `<a href="#" class="links-paginacao" id="link-${i + 1}" onclick="paginar('pagina-${i + 1}')" style=>${i + 1}</a>&nbsp;&nbsp;`;

        }
    document.querySelector("#paginacao").innerHTML += `<a href="#" onclick="posterior()">&gt;</a>`;
    return estrutura;
}

function gerarAlert(tipo, mensagem){
    if (campo_alert.innerHTML == "") {
        const wrapper = document.createElement('div')
        wrapper.innerHTML = [
            `<div class="alert alert-${tipo} alert-dismissible" role="alert">`,
            `   <div>${mensagem}</div>`,
            '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
            '</div>'
        ].join('');

        campo_alert.append(wrapper);
    }
}

function paginar(id) {
    campo_alert.innerHTML = "";
    atual = id[id.length - 1];
    document.querySelectorAll(".links-paginacao").forEach(a => (a.id[a.id.length - 1] == atual) ? a.style = "color: red; text-decoration: underline;" : a.style = "none");
    document.querySelectorAll(".paginas").forEach(e => e.style = "display: none;");
    const pagina = document.getElementById(id);
    pagina.style = "display: inline-block;";
}

function posterior() {
    campo_alert.innerHTML = "";
    if (atual < max) {
        atual++;
        document.querySelectorAll(".paginas").forEach(e => e.style = "display: none;");
        const pagina = document.getElementById(`pagina-${atual}`);
        pagina.style = "display: inline-block;";
        document.querySelectorAll(".links-paginacao").forEach(a => (a.id[a.id.length - 1] == atual) ? a.style = "color: red; text-decoration: underline;" : a.style = "none");
    } else {
        gerarAlert("danger", "Não há paginas posteriores!");
    }
}

function anterior() {
    campo_alert.innerHTML = "";
    if (atual - 1 > 0) {
        atual--;
        document.querySelectorAll(".paginas").forEach(e => e.style = "display: none;");
        const pagina = document.getElementById(`pagina-${atual}`);
        pagina.style = "display: inline-block;";
        document.querySelectorAll(".links-paginacao").forEach(a => (a.id[a.id.length - 1] == atual) ? a.style = "color: red; text-decoration: underline;" : a.style = "none");
    } else {
        gerarAlert("danger", "Não há paginas anteriores!");
    }
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
    campo_alert.innerHTML = "";
    //Pegar o valor informado pelo usuário no input
    const pesquisa = document.getElementById("pesquisa").value;

    // Gerar uma lista de carros baseada nos valores informados
    const lista_carros = carros.filter(function (carro) {
        return carro.modelo == pesquisa || carro.marca == pesquisa;
    })

    //Se a lista possuir um registro: Gerar estrutura, caso contrário informar erro
    if (lista_carros.length > 0) {
        gerarAlert("success", `${lista_carros.length} carros encontrados!!`);
        estoque.innerHTML = gerarEstrutura(lista_carros);
    } else {
        if (campo_alert.innerHTML == "") {
            const wrapper = document.createElement('div')
            wrapper.innerHTML = [
                `<div class="alert alert-danger alert-dismissible" role="alert">`,
                `   <div>Não encontramos nenhum veículo com esta marca ou modelo!!</div>`,
                '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
                '</div>'
            ].join('');

            campo_alert.append(wrapper);
        }
    }
});

//Adicionar evento de clique ao botão de aplicar os filtros
document.querySelector("#aplicar-filtros").addEventListener("click", function () {
    campo_alert.innerHTML = "";
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
        gerarAlert("success", `${filtro.length} carros encontrados!!`);
        estoque.innerHTML = gerarEstrutura(filtro);
    } else {
        gerarAlert("danger", "Não encontramos nenhum veículo com este padrão de filtros!!")
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
if (sessionStorage.CARROS == null) {
    carregarVeiculos(carros);
} else {
    carregarVeiculos(JSON.parse(sessionStorage.CARROS));
    sessionStorage.removeItem("CARROS");
}
carregarValores();