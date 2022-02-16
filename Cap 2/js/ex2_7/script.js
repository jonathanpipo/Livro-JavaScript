//function
function mostrarPromocao() {
  //referenciar variaveis
  var inProduto = document.getElementById('inProduto')
  var inPreco = document.getElementById('inPreco')
  var outPromocao = document.getElementById('outPromocao')
  var outTerceiroProduto = document.getElementById('outTerceiroProduto')
  //obter dados dos inputs
  var produto = inProduto.value
  var preco = Number(inPreco.value)

  //processamento
  var terceiro = preco * 0.5
  var precoTotal = preco * 2 + terceiro

  //output
  outPromocao.textContent = produto + '- Promoção: Leve 3 por R$: ' + precoTotal
  outTerceiroProduto.textContent = 'O 3° produto custa apenas R$: ' + terceiro

  //fim function
}

//referenciar btn
var btnPromocao = document.getElementById('btnPromocao')

//registrar evento no btn
btnPromocao.addEventListener('click', mostrarPromocao)
