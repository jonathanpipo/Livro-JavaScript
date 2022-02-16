//declarando a funcao
function mostrarOla() {
  //obtém o conteudo do campo (com id = nome)
  var nome = document.getElementById('nome').value
  //exibe no parágrafo (resposta)
  document.getElementById('resposta').textContent = 'Olá ' + nome
}
//cria uma referencia ao botao (com id= mostrar)
var mostrar = document.getElementById('mostrar')
// registra para o botao "mostrar" um ouvinte para o evento click
// que ao ser clicado irá chamar a função mostrarOla
mostrar.addEventListener('click', mostrarOla)
