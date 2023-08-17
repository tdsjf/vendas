// Variáveis globais
let carrinho = [];
let total = 0;

// Função para adicionar um item ao carrinho
function adicionarAoCarrinho(nome, preco) {
  carrinho.push({ nome, preco });
  total += preco;
  exibirCarrinho();
}

// Função para remover um item do carrinho
function removerDoCarrinho(index) {
  total -= carrinho[index].preco;
  carrinho.splice(index, 1);
  exibirCarrinho();
}

// Função para exibir o carrinho na página
function exibirCarrinho() {
  const listaCarrinho = document.getElementById('lista-carrinho');
  listaCarrinho.innerHTML = '';

  if (carrinho.length === 0) {
    listaCarrinho.innerHTML = '<li>Nenhum item no carrinho</li>';
  } else {
    carrinho.forEach((item, index) => {
      const li = document.createElement('li');
      li.innerHTML = `${item.nome} - R$ ${item.preco.toFixed(2)} <button onclick="removerDoCarrinho(${index})">Remover</button>`;
      listaCarrinho.appendChild(li);
    });
  }

  const totalCarrinho = document.getElementById('total-carrinho');
  totalCarrinho.innerHTML = `Total: R$ ${total.toFixed(2)}`;
}

// Função para finalizar a compra
function finalizarCompra() {
  const nomeCliente = prompt('Digite seu nome:');
  const emailCliente = prompt('Digite seu e-mail:');

  // Armazenar os dados da compra em Local Storage
  localStorage.setItem('nomeCliente', nomeCliente);
  localStorage.setItem('emailCliente', emailCliente);
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  localStorage.setItem('total', total);

  // Redirecionar para a página de confirmação
  window.location.href = 'confirmacao.html';
}