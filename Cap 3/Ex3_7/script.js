//function
function verificarParImpar() {
  //referenciar as variaveis
  var inNumero = document.getElementById('inNumero')
  var outResposta = document.getElementById('outResposta')

  //obter dados do input
  var numero = Number(inNumero.value)

  //verificar os dados
  if (isNaN(numero)) {
    alert('Digite um numero.')
  }

  //processmento
  var parOuImpar = numero % 2

  //outputs
  if (parOuImpar == 0) {
    outResposta.textContent = 'Resposta: ' + numero + ' é Par.'
  } else {
    outResposta.textContent = 'Resposta: ' + numero + ' é Ímpar.'
  }
}

//refernciar o botao
var btVerificar = document.getElementById('btVerificar')
btVerificar.addEventListener('click', verificarParImpar)
