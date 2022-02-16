//declarar variaveis CONTADOR e ACUMULADOR
var numContas = 0
var valTotal = 0

//variável STRING que acumulua as contas
var resposta = ''

//function
function registrarConta() {
  //referenciar variaveis
  var inDescrição = document.getElementById('inDescrição')
  var inValor = document.getElementById('inValor')
  var outDescricaoValor = document.getElementById('outDescricaoValor')
  var outValorTotal = document.getElementById('outValorTotal')

  //obter valroes dos inputs
  var descricao = inDescrição.value
  var valor = Number(inValor.value)

  //verificar inputs
  if (descricao == '' || valor == 0 || isNaN(valor)) {
    alert(
      'Digite um número positivo e diferente de zero. Não deixe a descrição em branco.'
    )
    inValor.focus()
    return
  }

  //adiciona valores ao contador e acumulador
  numContas++
  valTotal = valTotal + valor

  //concatena as respostas
  resposta = resposta + descricao + ' - R$: ' + valor.toFixed(2) + '\n'

  //output
  outDescricaoValor.textContent = resposta + '-----------------------------'
  outValorTotal.textContent =
    numContas + 'Conta(s) - Total R$: ' + valTotal.toFixed(2)

  //limpar campos
  inDescrição.value = ''
  inValor.value = ''
  inDescrição.focus()
}
//referencia o botao e associar evento
var btRegistrar = document.getElementById('btRegistrar')
btRegistrar.addEventListener('click', registrarConta)
