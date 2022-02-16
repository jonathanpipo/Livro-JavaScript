//function
function calcularValor() {
  //referenciar variaveis
  var inValorDeUso = document.getElementById('inValorDeUso')
  var inTempoDeUso = document.getElementById('inTempoDeUso')
  var outValorPagar = document.getElementById('outValorPagar')

  //obter dados dos inputs
  var valorDeUso = Number(inValorDeUso.value)
  var tempoDeUso = Number(inTempoDeUso.value)

  //processamento
  var divisao = tempoDeUso / 15
  var resultadoDivisao = Math.ceil(divisao)
  var valorTotal = resultadoDivisao * valorDeUso

  //output
  outValorPagar.textContent = 'Valor a pagar R$: ' + valorTotal

  //fim da function
}
//referenciar btn
var btnCalcularValor = document.getElementById('btnCalcularValor')

//atribuir function ao btn
btnCalcularValor.addEventListener('click', calcularValor)
