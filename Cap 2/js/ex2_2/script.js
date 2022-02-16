function converterDuracao() {
  //referencias
  var inTitulo = document.getElementById('inTitulo')
  var inDuracao = document.getElementById('inDuracao')
  var outTitulo = document.getElementById('outTitulo')
  var outResposta = document.getElementById('outResposta')

  //obtem conteudo dos campos de entrada
  var titulo = inTitulo.value
  var duracao = Number(inDuracao.value)

  //arredondar p/ baixo a divisao
  var horas = Math.floor(duracao / 60)

  //obtem o resto da divisao entre os numeros
  var minutos = duracao % 60

  //altera o conteudo dos paragrafos de resposta
  outTitulo.textContent = titulo
  outResposta.textContent = horas + ' hora(s) e ' + minutos + ' minuto(s).'
}
//referencia ao botao converter
var btConverter = document.getElementById('btConverter')

//regista um evento ao botao
btConverter.addEventListener('click', converterDuracao)
