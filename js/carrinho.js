
const botaoDiminuir = document.querySelector(".btn-diminuir");

const botaoAumentar = document.querySelector(".btn-aumentar");

const quantidade = document.querySelector(".quantidade");

const valorSubtotal = document.querySelector(".valor-subtotal");

const valorTotal = document.querySelector(".valor-total");

const precoLivro = 49.90;

/* let pq esse valor muda depois*/
let descontoPercentual = 0;

const botaoRemover = document.querySelector(".btn-remover");

const itemCarrinho = document.querySelector(".item-carrinho");

const mensagemCarrinhoVazio = document.querySelector(".carrinho-vazio");

const campoCupom = document.querySelector("#cupom");

const botaoAplicarCupom = document.querySelector(".btn-aplicar-cupom");

const valorDesconto = document.querySelector(".valor-desconto");

const botaoFinalizarCompra = document.querySelector(".btn-finalizar-compra");

botaoFinalizarCompra.addEventListener("click", function (){
    window.location.href = "checkout.html";
});

botaoAumentar.addEventListener("click", function(){
    quantidade.textContent = Number(quantidade.textContent) + 1;

    atualizarValores();
});

botaoDiminuir.addEventListener("click", function (){
    if (Number(quantidade.textContent) > 1){
    quantidade.textContent = Number(quantidade.textContent) - 1;

    atualizarValores();
    }
});

botaoRemover.addEventListener("click", function(){

    itemCarrinho.style.display = "none";

    mensagemCarrinhoVazio.style.display = "block";

    valorSubtotal.textContent = "R$ 0,00";
    valorTotal.textContent = "R$ 0,00";
});

botaoAplicarCupom.addEventListener("click", function(){
    /*campoCupom pega oq o usuario digitou no input e o toUpperCase transforma tudo em maiusculo*/
    if(campoCupom.value.toUpperCase() === "LIVRO10"){
        descontoPercentual = 10;
        alert("Cupom aplicado com sucesso!");

        atualizarValores();
    } else{
        alert("Cupom inválido.");
    }
});


/* funcao para atualizar os valores*/
function atualizarValores(){
    const quantidadeAtual = Number(quantidade.textContent);

    const subtotal = precoLivro * quantidadeAtual;

    const desconto = subtotal * (descontoPercentual / 100);

    const total = subtotal - desconto;

    valorSubtotal.textContent = "R$ " + subtotal.toFixed(2).replace(".", ",");

    valorDesconto.textContent = "R$ " + desconto.toFixed(2).replace(".", ",");

    valorTotal.textContent = "R$ " + total.toFixed(2).replace(".", ",");
}

