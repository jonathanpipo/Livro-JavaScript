//vetor global
var pacientes = []

//function adicionarPacientes
function adicionarPacientes() {
  //referenciar variaveis
  var inPaciente = document.getElementById('inPaciente')
  var outLista = document.getElementById('outLista')

  //obter dados do input
  var nome = inPaciente.value

  //verificar o nome do paciente
  if (nome == '') {
    alert('Não deixe o espaço em branco.')
    inPaciente.focus()
    return
  }

  pacientes.push(nome) //adiciona ao vetor

  var lista = '' //string para concatenar

  //percorrer elementos do vetor
  for (var i = 0; i < pacientes.length; i++) {
    lista += i + 1 + '. ' + pacientes[i] + '\n'
  }

  //alterar conteudo da tag outLista
  outLista.textContent = lista

  //limpar campo e focus
  inPaciente.value = ''
  inPaciente.focus()
}
//referenciar e atribuir evento ao botao
var btAdicionar = document.getElementById('btAdicionar')
btAdicionar.addEventListener('click', adicionarPacientes)
//function FIM adicionarPacientes

//////////////////////////////////////////////////////////

//function urgenciaPacientes
function urgenciaPacientes() {
  //referenciar variaveis
  var inPaciente = document.getElementById('inPaciente')
  var outLista = document.getElementById('outLista')

  //obter dados do input
  var nome = inPaciente.value

  //verificar o nome do paciente
  if (nome == '') {
    alert('Não deixe o espaço em branco.')
    inPaciente.focus()
    return
  }

  pacientes.unshift(nome) //adiciona ao vetor

  var lista = '' //string para concatenar

  //percorrer elementos do vetor
  for (var i = 0; i < pacientes.length; i++) {
    lista += i + 1 + '. ' + pacientes[i] + '\n'
  }

  //alterar conteudo da tag outLista
  outLista.textContent = lista

  //limpar campo e focus
  inPaciente.value = ''
  inPaciente.focus()
}
//referenciar botao e atribuir evento
var btUrgencia = document.getElementById('btUrgencia')
btUrgencia.addEventListener('click', urgenciaPacientes)
//function FIM urgenciaPacientes

//////////////////////////////////////////////////////////

//function atenderPacientes
function atenderPacientes() {
  //verificar vetor
  if (pacientes.length == 0) {
    alert('Não há pacientes para atender.')
    inPaciente.focus()
    return
  }

  //referenciar variaveis de saida de dados
  var outAtendimento = document.getElementById('outAtendimento')
  var outLista = document.getElementById('outLista')

  //remover paciente do inicio da fila
  var atender = pacientes.shift()

  //exibir nome do paciente em atendimento
  outAtendimento.textContent = atender

  //concatenas pacientes
  var lista = ''

  //percorrer os pacientes no vetor
  for (var i = 0; i < pacientes.length; i++) {
    lista += i + 1 + '. ' + pacientes[i] + '\n'
  }

  //altera o conteudo da tag outLista
  outLista.textContent = lista
}
// referenciar botao e atribuir evento
var btAtender = document.getElementById('btAtender')
btAtender.addEventListener('click', atenderPacientes)
