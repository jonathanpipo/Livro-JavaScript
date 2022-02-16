//inicio funcao
function calcularValor() {
  //referenciar variaveis
  var inPrecoQuilo = document.getElementById('inPrecoQuilo')
  var inConsumoCliente = document.getElementById('inConsumoCliente')
  var outValor = document.getElementById('outValor')

  //obtendo conteudo dos campos
  var precoQuilo = Number(inPrecoQuilo.value)
  var consumoCliente = Number(inConsumoCliente.value)

  //processamento
  var valorDaRefeicao = (precoQuilo / 1000) * consumoCliente

  //outputs
  outValor.textContent = 'Valor a pagar R$: ' + valorDaRefeicao.toFixed(2)
  // fim da função
}
//referenciar bt
var btnCalcular = document.getElementById('btnCalcular')

//registrando evento no btn
btnCalcular.addEventListener('click', calcularValor)
