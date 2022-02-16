//function
function verificarPrimo() {
  //referenciar variaveis
  var inNumero = document.getElementById('inNumero')
  var outResposta = document.getElementById('outResposta')

  //obter dados dos inputs
  var numero = Number(inNumero.value)

  //verificar numero
  if (numero == 0 || isNaN(numero)) {
    alert('Digite um número positivo e maior que zero.')
    inNumero.focus()
    return
  }

  //declarando e iniciando o contador
  var temDivisor = 0

  //percorre todos os possivei divisores do numero
  for (var i = 2; i <= numero / 2; i++) {
    if (numero % i == 0) {
      temDivisor = 1
      break
    }
  }

  //output
  if (numero > 1 && !temDivisor) {
    outResposta.textContent = numero + ' é primo.'
    inNumero.value = ''
    inNumero.focus()
  } else {
    outResposta.textContent = numero + ' não é primo.'
    inNumero.value = ''
    inNumero.focus()
  }
}
//referenciar botao
var brVerificar = document.getElementById('brVerificar')
brVerificar.addEventListener('click', verificarPrimo)
