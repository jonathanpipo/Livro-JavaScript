function verPromocao() {
  //referenciar
  var inVeiculo = document.getElementById('inVeiculo')
  var inPreco = document.getElementById('inPreco')

  //obtendo os valores dos inputs
  var veiculo = inVeiculo.value
  var preco = Number(inPreco.value)

  //processamento
  var entrada = preco * 0.5
  var parcelado = entrada / 12

  //alterar conteudo output
  outTitulo.textContent = 'Promoção: ' + veiculo
  outEntrada.textContent = 'Entrada de R$: ' + entrada.toFixed(2)
  outParcelado.textContent = '+ 12x de R$: ' + parcelado.toFixed(2)
}

//referenciando o botao
var btPromocao = document.getElementById('btPromocao')
btPromocao.addEventListener('click', verPromocao)
