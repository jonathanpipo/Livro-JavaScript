//function
function repetirFruta() {
  //referenciar variaveis
  var inFruta = document.getElementById('inFruta')
  var inNumero = document.getElementById('inNumero')
  var outResposta = document.getElementById('outResposta')

  //obter dados dos inputs
  var fruta = inFruta.value
  var numero = Number(inNumero.value)

  //verirficando os inputs
  if (fruta == '' || numero == 0 || isNaN(numero)) {
    alert(
      'Não deixe nenhum espaço em branco e digite um número positivo e maior que zero.'
    )
    inFruta.focus()
    return
  }

  //processamento
  var frutasRepetidas = ''

  for (var i = 1; i <= numero; i++) {
    if (i == numero) {
      frutasRepetidas = frutasRepetidas + fruta + '.'
    } else frutasRepetidas = frutasRepetidas + fruta + ' * '
  }

  //output
  outResposta.textContent = frutasRepetidas
}

//refernciar botao e atribuir evento
var btRepetir = document.getElementById('btRepetir')
btRepetir.addEventListener('click', repetirFruta)
