//function
function verificarNumero() {
  //referenciar variaveis
  var inNumero = document.getElementById('inNumero')
  var outDivisores = document.getElementById('outDivisores')
  var outNumeroPerfeito = document.getElementById('outNumeroPerfeito')

  //obter dados dos inputs
  var numero = Number(inNumero.value)

  //verificar inputs
  if (numero == 0 || isNaN(numero)) {
    alert('Digite um número positivo e maior que zero.')
    inNumero.focus()
    return
  }

  //variaveis globais
  var acumulador = '1'
  var contador = 1

  //processamento
  for (var i = 2; i <= numero / 2; i++) {
    if (numero % i == 0) {
      acumulador = acumulador + ', ' + i
      contador = contador + i
    }
  }

  if (contador == numero) {
    outDivisores.textContent =
      'Divisores do ' +
      numero +
      ': ' +
      acumulador +
      ' (Soma: ' +
      contador +
      ').'

    outNumeroPerfeito.textContent = numero + ' é um número perfeito.'
    inNumero.value = ''
    inNumero.focus()
  } else {
    outDivisores.textContent =
      'Divisores do ' +
      numero +
      ': ' +
      acumulador +
      ' (Soma: ' +
      contador +
      ').'
    outNumeroPerfeito.textContent = numero + ' não é um número perfeito.'
    inNumero.value = ''
    inNumero.focus()
  }
}

//referenciar e atribuir evento ao botao
var btVerificar = document.getElementById('btVerificar')
btVerificar.addEventListener('click', verificarNumero)
