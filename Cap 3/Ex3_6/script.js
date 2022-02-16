//function
function calcularNotas() {
  //referenciar as variaveis
  var inValorDoSaque = document.getElementById('inValorDoSaque')

  var outNotasDe100 = document.getElementById('outNotasDe100')
  var outNotasDe50 = document.getElementById('outNotasDe50')
  var outNotasDe10 = document.getElementById('outNotasDe10')

  //obtendo os valores dos inputs
  var valorDoSaque = Number(inValorDoSaque.value)

  //verificar os inputs
  if (valorDoSaque == 0 || isNaN(valorDoSaque)) {
    alert('Digite um numero')
    inValorDoSaque.focus()
    return
  }

  //processamento
  var notasDe100 = Math.floor(valorDoSaque / 100) // 2--
  var dividendoNotas50 = valorDoSaque % 100 //80 a

  var notasDe50 = Math.floor(dividendoNotas50 / 50) //1--
  var dividendoNotas10 = dividendoNotas50 % 50 // 30 a

  var notasDe10 = Math.floor(dividendoNotas10 / 10)

  //output
  if (notasDe100 > 0) {
    outNotasDe100.textContent = 'Notas de 100:' + notasDe100
  }

  if (notasDe50 > 0) {
    outNotasDe50.textContent = 'Notas de 50:' + notasDe50
  }

  if (notasDe10 > 0) {
    outNotasDe10.textContent = 'Notas de 10:' + notasDe10
  }
}

//referenciar o btn
var btContarNotas = document.getElementById('btContarNotas')
btContarNotas.addEventListener('click', calcularNotas)

//function
function limparCampos() {
  location.reload()
  document.getElementById('inValorDoSaque').focus()
}
//referenciando e atribuindo evento ao btn
var btLimparCampos = document.getElementById('btLimparCampos')
btLimparCampos.addEventListener('click', limparCampos)
