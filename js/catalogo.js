//Seleciona todos os botoes "Ver detalhes"
const botoesDetalhes = document.querySelectorAll(".btn-detalhes");

//Seleciona o modal
const modalLivro = document.querySelector(".modal-livro");

//Seleciona o botao X
const botaoFecharLivro = document.querySelector(".btn-fechar-livro");

const botaoAdicionarCarrinho = document.querySelector(".btn-adicionar-carrinho");

const botaoCarrinho = document.querySelector(".btn-carrinho");

botaoCarrinho.addEventListener("click", function(){
    window.location.href = "carrinho.html";
});

//Abre o modao ao clicar em qualquer botao "ver detalhes"
botoesDetalhes.forEach(function (botao){

    botao.addEventListener("click", function (){
        modalLivro.style.display = "flex";
    });
});

//Fechar o modal quando clic no X
botaoFecharLivro.addEventListener("click", function(){
    modalLivro.style.display = "none";
});

botaoAdicionarCarrinho.addEventListener("click", function (){
    alert("Livro adicionado ao carrinho!");
});
