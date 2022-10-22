function calculoSimulacao() {

    // O cálculo foi feito atráves da fórmula para ter uma dimensão das parcelas mensais de um possível finaciamento
    // taxa de juros = ( valor Inicial * (juros mensais * 0,01)) / meses;
    // total = ((valor inicial / meses) + taxa de juros);


    entrada = parseInt(valorInicial);
    entrada = document.querySelector("#valorInicial").value;

    taxaMensal = parseInt(juroMensal)
    taxaMensal = document.querySelector("#juroMensal").value;

    const meses = document.querySelector("#meses").value;

    const botao = document.getElementById('button');

    const taxaJuro = (entrada * (taxaMensal * 0.01)) / meses;

    const total = ((entrada / meses) + taxaJuro).toFixed(2);


    var pagamentoFinal = document.getElementById('pagamentoFinal');
    pagamentoFinal.style.display = 'block';
    pagamentoFinal.innerHTML = '';
    var resultado = document.createElement('div');
    resultado.innerHTML = '<h3 style="text-align:center">O pagamento aproximado é:<br/></h3>' + '<h4 style="text-align:center; color: orange">' + total + ' R$ por mês</h4>';

    pagamentoFinal.append(resultado);

}
