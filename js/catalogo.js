//Seleciona todos os botoes "Ver detalhes"
const botoesDetalhes = document.querySelectorAll(".btn-detalhes");

//Seleciona o modal
const modalLivro = document.querySelector(".modal-livro");

//Seleciona o botao X
const botaoFecharLivro = document.querySelector(".btn-fechar-livro");

const botaoAdicionarCarrinho = document.querySelector(".btn-adicionar-carrinho");

const botaoCarrinho = document.querySelector(".btn-carrinho");

const botaoChatbot = document.querySelector(".btn-chatbot");

const chatbot = document.querySelector(".chatbot");

const botaoFecharChatbot = document.querySelector(".btn-fechar-chatbot");

const campoChatbot = document.querySelector(".campo-chatbot");

const botaoEnviarChatbot = document.querySelector(".btn-enviar-chatbot");

const mensagensChatbot = document.querySelector(".mensagens-chatbot");

const botaoPerfil = document.querySelector(".btn-perfil");

const botaoPedidos = document.querySelector(".btn-pedidos");

const campoBuscaCatalogo = document.querySelector(".campo-busca-catalogo");

const botaoBuscarCatalogo = document.querySelector(".btn-buscar-catalogo");

const livrosCatalogo = document.querySelectorAll(".card-livro");

botaoPedidos.addEventListener("click", function () {
    window.location.href = "pedidos.html";
});

botaoPerfil.addEventListener("click", function () {
    window.location.href = "perfil.html";
});

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

// Abre o chatbot
botaoChatbot.addEventListener("click", function () {
    chatbot.style.display = "block";
});

// Fecha o chatbot
botaoFecharChatbot.addEventListener("click", function () {
    chatbot.style.display = "none";
});

// Envia uma mensagem no chatbot
botaoEnviarChatbot.addEventListener("click", function () {

    const mensagem = campoChatbot.value;

    if (mensagem === "") {
        return;
    }

    mensagensChatbot.innerHTML += `
        <p><strong>Você:</strong> ${mensagem}</p>
    `;

    campoChatbot.value = "";

    mensagensChatbot.scrollTop = mensagensChatbot.scrollHeight;
});

botaoBuscarCatalogo.addEventListener("click", function () {

    const textoBusca = campoBuscaCatalogo.value.toLowerCase();

    livrosCatalogo.forEach(function (livro) {

        const tituloLivro = livro.querySelector("h3").textContent.toLowerCase();

        if (tituloLivro.includes(textoBusca)) {
            livro.style.display = "block";
        } else {
            livro.style.display = "none";
        }

    });

});
