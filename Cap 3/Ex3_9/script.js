//function
function parquimetro() {
  //referenciar variaveis
  var inValor = document.getElementById('inValor')
  var outTempo = document.getElementById('outTempo')
  var outTroco = document.getElementById('outTroco')

  //obter dados dos inputs
  var valor = Number(inValor.value)

  //verificar dados do input
  if (valor == 0 || isNaN(valor)) {
    alert('Digite um número positivo e maior que zero.')
    document.getElementById('inValor').focus()
    return
  }

  //processamento
  var dividendo175 = valor % 3.0 //2
  var dividendo1 = dividendo175 % 1.75 //1
  var troco = dividendo1 % 1

  var tempoValor3 = Math.floor(valor / 3.0) * 120
  var tempoValor175 = Math.floor(dividendo175 / 1.75) * 60
  var tempoValor1 = Math.floor(dividendo1 / 1) * 30
  var tempo = tempoValor3 + tempoValor175 + tempoValor1

  //output
  outTempo.textContent = 'Tempo: ' + tempo + ' minutos.'
  outTroco.textContent = 'Troco R$: ' + troco.toFixed(2)
}
//referenciar botao
var btTempoTroco = document.getElementById('btTempoTroco')
btTempoTroco.addEventListener('click', parquimetro)
