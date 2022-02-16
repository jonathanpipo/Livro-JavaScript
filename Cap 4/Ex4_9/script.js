//function
function criarEstrelas() {
  //referenciar variaveis
  var inNumero = document.getElementById('inNumero')
  var outResposta = document.getElementById('outResposta')

  //obter dados dos inputs
  var numero = Number(inNumero.value)

  //veriricar input
  if (numero == 0 || isNaN(numero)) {
    alert('Digite um número positivo e maior que zero.')
    inNumero.focus()
    return
  }

  //variaveis globais
  var estrelas = ''

  //processamento
  for (var i = 1; i <= numero; i++) {
    for (var j = 1; j <= i; j++) {
      estrelas = estrelas + '*'
    }
    estrelas = estrelas + '\n'
  }

  //output
  outResposta.textContent = estrelas
  inNumero.value = ''
  inNumero.focus()
}

//referenciando e atribuindo valor ao botao
var btCriarEstrelas = document.getElementById('btCriarEstrelas')
btCriarEstrelas.addEventListener('click', criarEstrelas)
