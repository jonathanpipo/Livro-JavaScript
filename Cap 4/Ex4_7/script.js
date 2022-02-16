//function
function previsaoChinchilas() {
  //referenciar variaveis
  var inChinchilas = document.getElementById('inChinchilas')
  var inAnos = document.getElementById('inAnos')
  var outResposta = document.getElementById('outResposta')

  //obter dados dos inputs
  var chinchilas = Number(inChinchilas.value)
  var anos = Number(inAnos.value)

  //verificar inputs
  if (chinchilas < 2 || isNaN(chinchilas) || anos == 0 || isNaN(anos)) {
    alert('Digite números positivos e maiores do que zero.')
    inChinchilas.focus()
    return
  }

  //processamento
  var resposta = ''
  var total = chinchilas

  for (var i = 1; i <= anos; i++) {
    resposta = resposta + i + '° Ano: ' + total + ' Chinchilas\n'
    total = total * 3
  }

  //output
  outResposta.textContent = resposta
}

//referenciar botao e atribuir evento
var btMostrar = document.getElementById('btMostrar')
btMostrar.addEventListener('click', previsaoChinchilas)
