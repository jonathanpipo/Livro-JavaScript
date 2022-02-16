//function
function mostrarNotaSituacao() {
  //refrencias variaveis
  var inNomeAluno = document.getElementById('inNomeAluno')
  var inNotaUm = document.getElementById('inNotaUm')
  var inNotaDois = document.getElementById('inNotaDois')

  var outMedia = document.getElementById('outMedia')
  var outSituacao = document.getElementById('outSituacao')
  //obter dados
  var nomeAluno = inNomeAluno.value
  var notaUm = Number(inNotaUm.value)
  var notaDois = Number(inNotaDois.value)

  //processamento
  var mediaAluno = (notaUm + notaDois) / 2

  //output
  outMedia.textContent = 'Média das Notas: ' + mediaAluno.toFixed(1)

  if (mediaAluno >= 7) {
    outSituacao.textContent = 'Parabéns ' + nomeAluno + 'Você foi Aprovado!'
    outSituacao.style.color = 'Blue'
  } else if (mediaAluno >= 4) {
    outSituacao.textContent = 'Ops! ' + nomeAluno + ' Você está em exame.'
    outSituacao.style.color = 'Green'
  } else {
    outSituacao.textContent = 'Que pena ' + nomeAluno + 'Você foi Reprovado!'
    outSituacao.style.color = 'Red'
  }
  //final function
}
//referenciar btn
var btnMostrarNota = document.getElementById('btnMostrarNota')
//aplicar btn
btnMostrarNota.addEventListener('click', mostrarNotaSituacao)
