//function
function calcularTabuada() {
  //referenciar variaveis
  var inNumero = document.getElementById('inNumero')
  var outTabuada = document.getElementById('outTabuada')

  //obter dados dos inputs
  var numero = Number(inNumero.value)

  //verificar dados
  if (numero == 0 || isNaN(numero)) {
    alert('Digite um número positivo e maior que zero.')
    inNumero.focus()
    return
  }

  //processamento
  var resposta = '' //concatena as respostas

  for (var i = 1; i <= 10; i++) {
    resposta = resposta + numero + 'x' + i + '=' + numero * i + '\n'
  }
  outTabuada.textContent = resposta
}

//referenciar o botao
var btTabuada = document.getElementById('btTabuada')
btTabuada.addEventListener('click', calcularTabuada)
