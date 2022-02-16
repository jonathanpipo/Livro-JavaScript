//function
function verificarVelocidade() {
  //referenciar variaveis
  var inVelocidadePermitida = document.getElementById('inVelocidadePermitida')
  var inVelocidadeCondutor = document.getElementById('inVelocidadeCondutor')
  var outResposta = document.getElementById('outResposta')

  //obter dados dos inputs
  var velocidadePermitida = Number(inVelocidadePermitida.value)
  var velocidadeCondutor = Number(inVelocidadeCondutor.value)

  //verificar dados input
  if (
    (velocidadePermitida || velocidadeCondutor) == 0 ||
    isNaN(velocidadePermitida || velocidadeCondutor)
  ) {
    alert('Digite um valor numérico diferente de 0 e positivo')
    document.getElementById('inVelocidadePermitida').focus()
    return
  }

  //processamento
  var vintePorcento = velocidadePermitida * 1.2

  //output
  if (
    velocidadeCondutor > velocidadePermitida &&
    velocidadeCondutor <= vintePorcento
  ) {
    outResposta.textContent = 'Situalçao: Multa leve.'
  } else if (velocidadeCondutor > vintePorcento) {
    outResposta.textContent = 'Situação: Multa grave.'
  } else {
    outResposta.textContent = 'Situação: Sem multa.'
  }
}

//referenciar botao
var btVerificar = document.getElementById('btVerificar')
btVerificar.addEventListener('click', verificarVelocidade)
