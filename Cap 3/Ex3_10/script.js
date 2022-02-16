//function
function verificarLados() {
  //refrenciar variaveis
  var inLadoA = document.getElementById('inLadoA')
  var inLadoB = document.getElementById('inLadoB')
  var inLadoC = document.getElementById('inLadoC')

  var outLados = document.getElementById('outLados')
  var outTipo = document.getElementById('outTipo')

  //obter dados input
  var ladoA = Number(inLadoA.value)
  var ladoB = Number(inLadoB.value)
  var ladoC = Number(inLadoC.value)

  //verificar dados
  if ((ladoA || ladoB || ladoC) == 0 || isNaN(ladoA || ladoB || ladoC)) {
    alert('Digite um numero positivo e maior que zero.')
    document.getElementById('inLadoA').focus()
    return
  }

  //processamento
  if (ladoA > ladoB + ladoC || ladoB > ladoA + ladoC || ladoC > ladoA + ladoB) {
    outLados.textContent = 'Os lados não podem formar um triângulo.'
  } else {
    outLados.textContent = 'Lados podem formar um triângulo.'
    if (ladoA == ladoB && ladoA == ladoC) {
      outTipo.textContent = 'Tipo: Equilatero'
    } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
      outTipo.textContent = 'Tipo: Isósceles'
    } else outTipo.textContent = 'Tipo: Escaleno'
  }
}

//referenciar o botao
var btVerificar = document.getElementById('btVerificar')
btVerificar.addEventListener('click', verificarLados)
