//function
function preencherEspaco() {
  //referenciar variaveis
  var inNumero = document.getElementById('inNumero')
  var outEstrelas = document.getElementById('outEstrelas')

  //obter dados dos inputs
  var numero = Number(inNumero.value)

  //verificar dados
  if (numero == 0 || isNaN(numero)) {
    alert('Digite um número positivo e maior que zero.')
    inNumero.focus()
    return
  }

  //processamento
  var espaco = ''

  for (var i = 1; i <= numero; i++) {
    if (i % 2 == 1) {
      espaco = espaco + '*'
    } else {
      espaco = espaco + '-'
    }
  }

  outEstrelas.textContent = espaco
  //output
}
//referenciar botao e atribuir evento
var btPreencher = document.getElementById('btPreencher')
btPreencher.addEventListener('click', preencherEspaco)
