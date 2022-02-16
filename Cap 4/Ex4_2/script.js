//function
function descrescerNumero() {
  //referenciar variaveis
  var inNumero = document.getElementById('inNumero')
  var outResposta = document.getElementById('outResposta')

  //obter dados do input
  var numero = Number(inNumero.value)

  //verificar dados
  if (numero == 0 || isNaN(numero)) {
    alert('Digite um número positivo e maior que zero.')
    inNumero.focus()
    return
  }

  //processamento
  var resposta = 'Entre ' + numero + ' e 1: '

  for (var i = numero; i > 0; i--) {
    resposta = resposta + i + ', '
  }
  resposta = resposta + i + '.'

  //output
  outResposta.textContent = resposta
}

//referenciar botao
var btDecrescer = document.getElementById('btDecrescer')
btDecrescer.addEventListener('click', descrescerNumero)
