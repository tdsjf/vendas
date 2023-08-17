// Obter os dados da compra armazenados no Local Storage
const nomeCliente = localStorage.getItem('nomeCliente');
const emailCliente = localStorage.getItem('emailCliente');
const carrinho = JSON.parse(localStorage.getItem('carrinho'));
const total = localStorage.getItem('total');

// Preencher os dados do cliente na página de confirmação
document.getElementById('nomeCliente').textContent = nomeCliente;
document.getElementById('emailCliente').textContent = emailCliente;

// Preencher os itens da compra na página de confirmação
const itensCompra = document.getElementById('itensCompra');
carrinho.forEach((item) => {
  const li = document.createElement('li');
  li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
  itensCompra.appendChild(li);
});

// Exibir o valor total da compra na página de confirmação
document.getElementById('totalCompra').textContent = `Total: R$ ${total.toFixed(2)}`;

// Função para emitir o recibo
function emitirRecibo() {
  const formaPagamento = document.querySelector('input[name="pagamento"]:checked').value;

  const recibo = `Nome: ${nomeCliente}\nE-mail: ${emailCliente}\n\nItens da compra:\n`;

  carrinho.forEach((item) => {
    recibo += `${item.nome} - R$ ${item.preco.toFixed(2)}\n`;
  });

  recibo += `\nTotal: R$ ${total.toFixed(2)}\nForma de pagamento: ${formaPagamento}`;

  alert(recibo);
}

// Função para voltar às compras
function voltarCompras() {
  // Limpar o Local Storage
  localStorage.removeItem('nomeCliente');
  localStorage.removeItem('emailCliente');
  localStorage.removeItem('carrinho');
  localStorage.removeItem('total');

  // Redirecionar de volta para a página inicial
  window.location.href = 'index.html';
}

// Função para imprimir a tela atual
function imprimirTela() {
  window.print();
}
