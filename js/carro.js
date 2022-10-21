const carro = JSON.parse(sessionStorage.getItem("CARRO"));
console.log(carro);

document.querySelector("#nome-carro").innerHTML = carro.modelo;
document.querySelector("#descricao-carro").innerHTML = carro.descricao;
document.querySelector("#ficha-tecnica").innerHTML = `
    <tr>
    <td colspan="3">
        <b>Preço:</b><span class="preco"> R$ ${carro.preco}</span>
    </td>
    </tr>
    <tr>
        <td><b>Câmbio:</b> ${carro.cambio}</td>
        <td><b>Ano:</b> ${carro.ano}</td>
        <td><b>Km:</b> ${carro.quilometragem}</td>
    </tr>
    <tr>
        <td><b>Cor:</b> ${carro.cor}</td>
        <td><b>Motor: </b> ${carro.motor}</td>
        <td><b>Airbag:</b> ${carro.airbag}</td>
    </tr>
    <tr>
        <td><b>Alarme:</b> ${carro.alarme}</td>
        <td><b>Garantia: </b> ${carro.garantia}</td>
        <td><b>Freio ABS:</b> ${carro.freio}</td>
    </tr>
`

for (let i = 0; i < carro.nome_imagem.length; i++) {
    document.querySelector("#carousel-images").innerHTML += `
    <div class="carousel-item active">
        <img src="/img/${carro.modelo.toLowerCase()}/${carro.nome_imagem[i]}" class="d-block w-100" alt="${carro.nome_imagem[i]}">
    </div>
    `;
}

document.querySelector("#texto-carro").innerHTML = `
A procura de um ${carro.marca} ${carro.modelo} ${carro.descricao} - ${carro.cor}? Aqui tem ${carro.garantia} de
garantia. Ano: ${carro.ano} KM: ${carro.quilometragem}. Gostou deste carro? Temos uma equipe de atendimento on-line pronta
para te atender. Tire todas suas dúvidas de forma rápida e descomplicada, através do nosso WhatsApp
(47)99286-8428, ou se preferir, faça uma visita. Nosso endereço é Rodovia BR-470, nº 3577, Badenfurt,
Blumenau - Santa Catarina. Te esperamos! Preço à vista, em caso de troca, favor consultar.
`;
