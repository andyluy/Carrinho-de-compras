let totalGeral = 0; // Inicializa o valor total das compras como 0

// Limpa a lista de produtos e o valor total ao carregar a página
document.getElementById("lista-produtos").innerHTML = "";
document.getElementById("valor-total").innerHTML = "R$ 0";

function adicionar() {
    // Obtém os valores do formulário
    let produtoSelecionado = document.getElementById("produto").value;
    // Separa o nome do produto e o valor unitário a partir do valor selecionado no dropdown
    let nomeProduto = produtoSelecionado.split("-")[0];
    let valorUnitario = parseFloat(produtoSelecionado.split("R$")[1]); // Converte o valor para número decimal
    let quantidade = parseInt(document.getElementById("quantidade").value); // Converte a quantidade para número inteiro

    // Calcula o preço total do produto
    let precoTotalProduto = quantidade * valorUnitario;

    // Obtém o elemento HTML da lista de produtos
    let carrinho = document.getElementById("lista-produtos");

    // Adiciona um novo item à lista de produtos
    carrinho.innerHTML += `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${precoTotalProduto}</span>
    </section>`;

    // Atualiza o valor total da compra
    totalGeral += precoTotalProduto;
    document.getElementById("valor-total").textContent = `R$ ${totalGeral.toFixed(2)}`; // Formata o valor total com duas casas decimais

    // Limpa o campo de quantidade para a próxima adição
    document.getElementById("quantidade").value = "";
}

function limpar() {
    // Limpa a lista de produtos, o valor total e o campo de quantidade
    document.getElementById("lista-produtos").innerHTML = "";
    document.getElementById("valor-total").innerHTML = "R$ 0";
    document.getElementById("quantidade").value = "";
}