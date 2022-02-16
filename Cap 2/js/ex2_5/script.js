//function
function mostrarPromocao() {
  //referenciar variaveis
  var inMedicamento = document.getElementById('inMedicamento')
  var inPreco = document.getElementById('inPreco')
  var outTitulo = document.getElementById('outTitulo')
  var outPromocao = document.getElementById('outPromocao')

  //obter conteudo dos campos
  var medicamento = inMedicamento.value
  var preco = Number(inPreco.value)

  //processamento
  var promocao = preco * 2
  //output
  outTitulo.textContent = 'Promoção de ' + medicamento
  outPromocao.textContent = 'Leve 2 por apenas R$: ' + Math.floor(promocao)
  //fim function
}
//referenciar btn
var btnMostrar = document.getElementById('btnMostrar')
//aplicar func ao btn
btnMostrar.addEventListener('click', mostrarPromocao)
