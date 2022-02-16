//function
function calcularPeso() {
  //referenciar variaveis
  var inNome = document.getElementById('inNome')
  var rbMasculino = document.getElementById('rbMasculino')
  var rbFeminino = document.getElementById('rbFeminino')
  var inAltura = document.getElementById('inAltura')
  var outResposta = document.getElementById('outResposta')

  //obter o conteudo dos campos
  var nome = inNome.value
  var masculino = rbMasculino.checked
  var feminino = rbFeminino.checked
  var altura = Number(inAltura.value)

  //verifica se nome e sexo foram preechidos
  if (nome == '' || (masculino == false && feminino == false)) {
    alert('Por favor, informe o nome e selecione o sexo...')
    inNome.focus()
    return
  }

  //verifica se a altura foi preenchido
  if (altura == 0 || isNaN(altura)) {
    alert('Por favor, informe a altura corretamente...')
    inAltura.focus()
    return
  }

  //altera a variavel peso conforme o sexo selecionado
  if (masculino) {
    var peso = 22 * Math.pow(altura, 2)
  } else {
    var peso = 21 * Math.pow(altura, 2)
  }

  //output
  outResposta.textContent =
    nome + ': Seu peso ideal é ' + peso.toFixed(3) + ' kg'
}
//referenciar o botao
var btResultado = document.getElementById('btCalcular')

//registrar evento
btCalcular.addEventListener('click', calcularPeso)

//function
function limparCampos() {
  //recarregar a página
  location.reload()
  //posiciona no elemento inNome
  document.getElementById('inNome').focus()
}

var btnLimparCampos = document.getElementById('btnLimparCampos')
btnLimparCampos.addEventListener('click', limparCampos)
