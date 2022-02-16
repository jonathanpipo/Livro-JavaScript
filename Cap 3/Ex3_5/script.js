//function
function calcularRaiz() {
  //referenciar as variaveis
  var inNumero = document.getElementById('inNumero')
  var outResposta = document.getElementById('outResposta')
  //obter valores dos inputs
  var numero = Number(inNumero.value)

  //verificar dados dos inputs
  if (numero == 0 || isNaN(numero)) {
    alert('Digite no formato correto')
    inNumero.focus()
    return
  }

  //processamento
  var raiz = Math.sqrt(numero)

  //outputs
  if (raiz == Math.floor(raiz)) {
    outResposta.textContent = 'A raiz do ' + numero + ' é ' + raiz + '.'
  } else {
    outResposta.textContent = 'O número ' + numero + ' não possui raiz exata.'
  }
  //fim fuction
}

//referenciar botao
var btConverter = document.getElementById('btConverter')

//adicionar evento ao botao
btConverter.addEventListener('click', calcularRaiz)
