//var global
var carros = []

//function
function adicionarCarros() {
  //referenciar variaveis
  var inModelo = document.getElementById('inModelo')
  var inPreco = document.getElementById('inPreco')

  //obtendo valores dos inputs
  var modelo = inModelo.value
  var preco = Number(inPreco.value)

  //verifica os dados
  if (modelo == '' || preco == 0 || isNaN(preco)) {
    alert('Digite os dados corretamente.')
    inModelo.focus()
    return
  }

  //adiciona dados ao vetor
  carros.push({ modelo: modelo, preco: preco })

  //limpando os campos e posicionando o foco no modelo
  inModelo.value = ''
  inPreco.value = ''
  inModelo.focus()

  listarCarros()
}
//referenciar o botao e atribuir evento
var btAdicionar = document.getElementById('btAdicionar')
btAdicionar.addEventListener('click', adicionarCarros)

/////////////////////////////////////////////////////////////////

//function
function listarCarros() {
  //verificando o vetor
  if (carros.length == 0) {
    alert('Não há carros na lista.')
    return
  }

  var lista = ''

  //percorre os elements do vetor
  for (var i = 0; i < carros.length; i++) {
    //adiciona na lista, cada objeto do vetor
    lista += carros[i].modelo + ' - R$: ' + carros[i].preco.toFixed(2) + '\n'
  }

  //referencia o elemento e altera o conteudo
  document.getElementById('outLista').textContent = lista
}
//referenciar o botao e atribuir evento
var btListarTodos = document.getElementById('btListarTodos')
btListarTodos.addEventListener('click', listarCarros)

//function
function filtrarCarros() {
  //leitura do valor max a partir do metodo prompt
  var maximo = Number(prompt('Qual o valor máximo que o cliente deseja pagar?'))

  //verificando a var maximo
  if (maximo == 0 || isNaN(maximo)) {
    alert('Digite um valor correto.')
    return
  }

  //concatenar a lista de carros que obedecem ao criterio de pesquisa
  var lista = ''

  //percorre todos os elementos do vetor
  for (var i = 0; i < carros.length; i++) {
    //verifica se o preço é inferior (ou igual) ao maximo
    if (carros[i].preco <= maximo) {
      lista += carros[i].modelo + ' - R$ ' + carros[i].preco.toFixed(2) + '\n'
    }
  }

  //referencia a outLista
  var outLista = document.getElementById('outLista')

  //se a lista esta vazia, significa que nenhum veículo foi encontrado (no for)
  if (lista == '') {
    outLista.textContent =
      'Não há carros com o preço até R$ ' + maximo.toFixed(2)
  } else {
    //senão, mostra os veículos obtidos
    outLista.textContent =
      'Carros até R$ ' + maximo.toFixed(2) + '\n--------------------\n' + lista
  }
}

//referenciando o botao e atribuindo evento
var btFiltrarPreco = document.getElementById('btFiltrarPreco')
btFiltrarPreco.addEventListener('click', filtrarCarros)
