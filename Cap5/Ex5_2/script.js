//vetor global dos erros
var erros = []

//gera um numero aleatorio entre 1 e 100
var sorteado = Math.floor(Math.random() * 100) + 1

//declara CONST como numero de chances
const CHANCES = 6

//function apostarNumero
function apostarNumero() {
  //referencia a variavel e obtem o conteudo
  var inNumero = document.getElementById('inNumero')
  var numero = Number(inNumero.value)

  //valida o numero
  if (numero <= 0 || numero > 100 || isNaN(numero)) {
    alert('Informe um número válido.')
    inNumero.focus()
    return
  }

  //referenciar as saidas de dados
  var outDicas = document.getElementById('outDicas')
  var outErros = document.getElementById('outErros')
  var outChances = document.getElementById('outChances')

  //aposta do jogador = sorteado
  if (numero == sorteado) {
    alert('Parabéns! Você acertou!')
    //alterar status dos botões
    btApostar.disabled = true
    btJogarNovamente.className = 'exibe'
    outDicas.textContent = 'Parabéns! Número sorteado: ' + sorteado
  } else {
    //se o numero existe no vetor erros
    if (erros.indexOf(numero) >= 0) {
      alert('Você já apostou o número ' + numero + '. Tente outro...')
    } else {
      erros.push(numero)
      var numErros = erros.length
      var numChances = CHANCES - numErros

      //exibe o numero de erros, de chances e conteudo do vetor
      outErros.textContent = numErros + ' (' + erros.join(', ') + ') '
      outChances.textContent = numChances

      if (numChances == 0) {
        alert('Suas chances acabaram.')
        btApostar.disabled = true
        btJogarNovamente.className = 'exibe'
        outDicas.textContent = 'Game over! O número sorteado foi ' + sorteado
      } else {
        //usa operador ternario (condicional) para mensagem da dica
        var dica = numero < sorteado ? 'maior' : 'menor'
        outDicas.textContent =
          'Dica: tente um número ' + dica + ' que ' + numero
      }
    }
  }
  inNumero.value = ''
  inNumero.focus()
}
//referencia o botao e atribui o evento
var btApostar = document.getElementById('btApostar')
btApostar.addEventListener('click', apostarNumero)
//function FIM apostarNumero

//////////////////////////////////////////////////////////

//funcion jogarNovamente
function jogarNovamente() {
  location.reload()
}
//referenciar botao e atriuir evento
var btJogarNovamente = document.getElementById('btJogarNovamente')
btJogarNovamente.addEventListener('click', jogarNovamente)
