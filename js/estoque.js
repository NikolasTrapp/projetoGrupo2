//Nikolas

//Pegar a div que comporta os carros
const estoque = document.getElementById("estoque");
var atual = 1;
var max = 1;
const campo_alert = document.getElementById("liveAlertPlaceholder");
var marcas_carro;
var modelos_carro;

//Função para gerar a estrutura recebendo a lista como parâmetro
function gerarEstrutura(lista_carros) {
    max = Math.ceil(lista_carros.length / 9);
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
                                    <img src="img/${lista_carros[j].modelo.toLowerCase()}/${lista_carros[j].nome_imagem[0]}" class="card-img-top" alt="${lista_carros[j].nome_imagem[0]}" style="width: 100%; height: 275px;">
                                    <div class="card-body">
                                        <div class="text-start">
                                            <h5 class="card-title">${lista_carros[j].modelo} - ${lista_carros[j].ano}</h5>
                                            <span class="card-text descricao">${lista_carros[j].descricao}</span>
                                            <span class="card-text descricao">${lista_carros[j].ano} | ${lista_carros[j].quilometragem} km</span>
                                            <span class="preco">R$ ${lista_carros[j].preco}</span>
                                        </div>
                                        <div class="text-end">
                                            <a href="#" class="btn btn-outline-dark btn-sm botao-vermais" rel="${lista_carros[j].id}">VER MAIS</a>
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
                                    <img src="img/${lista_carros[j + 1].modelo.toLowerCase()}/${lista_carros[j + 1].nome_imagem[0]}" class="card-img-top" alt="${lista_carros[j + 1].nome_imagem[0]}" style="width: 100%; height: 275px;">
                                    <div class="card-body">
                                        <div class="text-start">
                                            <h5 class="card-title">${lista_carros[j + 1].modelo} - ${lista_carros[j + 1].ano}</h5>
                                            <span class="card-text descricao">${lista_carros[j + 1].descricao}</span>
                                            <span class="card-text descricao">${lista_carros[j + 1].ano} | ${lista_carros[j + 1].quilometragem} km</span>
                                            <span class="preco">R$ ${lista_carros[j + 1].preco}</span>
                                        </div>
                                        <div class="text-end">
                                            <a href="#" class="btn btn-outline-dark btn-sm botao-vermais" rel="${lista_carros[j + 1].id}">VER MAIS</a>
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
                                    <img src="img/${lista_carros[j + 2].modelo.toLowerCase()}/${lista_carros[j + 2].nome_imagem[0]}" class="card-img-top" alt="${lista_carros[j + 2].nome_imagem[0]}" style="width: 100%; height: 275px;">
                                    <div class="card-body">
                                        <div class="text-start">
                                            <h5 class="card-title">${lista_carros[j + 2].modelo} - ${lista_carros[j + 2].ano}</h5>
                                            <span class="card-text descricao">${lista_carros[j + 2].descricao}</span>
                                            <span class="card-text descricao">${lista_carros[j + 2].ano} | ${lista_carros[j + 2].quilometragem} km</span>
                                            <span class="preco">R$ ${lista_carros[j + 2].preco}</span>
                                        </div>
                                        <div class="text-end">
                                            <a href="#" class="btn btn-outline-dark btn-sm botao-vermais" rel="${lista_carros[j + 2].id}">VER MAIS</a>
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

function gerarAlert(tipo, mensagem) {
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
    marcas_carro = new Set(carros.map(carro => carro.marca));
    modelos_carro = new Set(carros.map(carro => carro.modelo));

    //Gerar as estruturas e inseri-las na tela
    marcas_carro.forEach(marca => {
        marcas.innerHTML += `<option value="${marca}">${marca}</option>`;
    });
    modelos_carro.forEach(modelo => {
        modelos.innerHTML += `<option value="${modelo}">${modelo}</option>`;
    });

    document.querySelectorAll(".botao-vermais").forEach(a => a.addEventListener("click", vermais));

    const select = document.querySelector('select[name=modelos-container]');
    new lc_select(select, {
        wrap_width: '100%',
        min_for_search: 3,
        pre_placeh_opt: true,
    });
    const select2 = document.querySelector('select[name=marcas-container]');
    new lc_select(select2, {
        wrap_width: '100%',
        min_for_search: 3,
        pre_placeh_opt: true,
    }); 
}

//Pegar evento de clique do botão de pesquisar modelos ou marcas
document.querySelector("#bt-pesquisa").addEventListener("click", function () {
    campo_alert.innerHTML = "";
    //Pegar o valor informado pelo usuário no input
    const pesquisa = document.getElementById("pesquisaEstoque").value;

    // Gerar uma lista de carros baseada nos valores informados
    const lista_carros = carros.filter(function (carro) {
        return carro.modelo == pesquisa || carro.marca == pesquisa;
    })

    //Se a lista possuir um registro: Gerar estrutura, caso contrário informar erro
    if (lista_carros.length > 0) {
        gerarAlert("success", `${lista_carros.length} carro(s) encontrados!!`);
        estoque.innerHTML = gerarEstrutura(lista_carros);
        atual = 1;
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

function vermais() {
    const id = this.rel
    carro = carros.filter(function (carro) {
        return carro.id == id;
    })[0];

    sessionStorage.setItem("CARRO", JSON.stringify(carro));
    window.location = "carro.html"
}

//Adicionar evento de clique ao botão de aplicar os filtros
document.querySelector("#aplicar-filtros").addEventListener("click", function () {
    campo_alert.innerHTML = "";
    //Iniciar variaveis
    var listaMarcas = [];
    var listaModelos = [];
    document.querySelectorAll(".lcslt-multi-selected").forEach(d => (marcas_carro.has(d.title) ? listaMarcas.push(d.title) : listaModelos.push(d.title)));
    let anoMin = document.getElementById("ano-minimo").value;
    let anoMax = document.getElementById("ano-maximo").value;
    let precoMin = document.getElementById("preco-minimo").value;
    let precoMax = document.getElementById("preco-maximo").value;



    //Aplicar o primeiro filtro, verificar as marcas
    let filtro = carros.filter(function (carro) {
        if (listaMarcas.length > 0) {
            return listaMarcas.includes(carro.marca.trim());
        } else {
            return true;
        }
    }).filter(function (carro) { //Segundo filtro, verificar os modelos
        if (listaModelos.length > 0) {
            return listaModelos.includes(carro.modelo.trim());
        } else {
            return true;
        }
    }).filter(function (carro) { //Terceiro filtro, verificar o ano
        if (anoMin || anoMax) {
            if (anoMin && !anoMax) {
                return parseInt(carro.ano.split("/")[0]) >= anoMin;
            } else if (!anoMin && anoMax) {
                return parseInt(carro.ano.split("/")[1]) <= anoMax;
            } else {
                return parseInt(carro.ano.split("/")[0]) >= anoMin && parseInt(carro.ano.split("/")[1]) <= anoMax;
            }
        } else {
            return true;
        }
    }).filter(function (carro) { //Quarto filtro, verificar o preço
        if (precoMin || precoMax) {
            if (precoMin && !precoMax) {
                return carro.preco >= parseFloat(precoMin);
            } else if (!precoMin && precoMax) {
                return carro.preco <= parseFloat(precoMax);
            } else {

                return carro.preco >= parseFloat(precoMin) && carro.preco <= parseFloat(precoMax);
            }
        } else {
            return true;
        }
    });

    //Caso o filtro gere uma lista com mais de um valor, inseri-los na tela, caso contrário informar erro
    if (filtro.length > 0) {
        gerarAlert("success", `${filtro.length} carro(s) encontrados!!`);
        estoque.innerHTML = gerarEstrutura(filtro);
        atual = 1;
    } else {
        gerarAlert("danger", "Não encontramos nenhum veículo com este padrão de filtros!!")
    }
});

//Adicionar valores à janela modal
function modal(modelo) {
    document.querySelector("#titulo-modal").innerHTML += " ao " + modelo;
    document.querySelector("#botao-enviar").setAttribute("rel", modelo);
}

//Adicionar evento de clique ao botão de limpar os filtros (Reiniciar os valores)
document.querySelector("#limpar-filtros").addEventListener("click", function () {
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