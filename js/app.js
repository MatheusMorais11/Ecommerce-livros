// Botao responsavel por abrir a lista de clientes
const botaoSelecionarCliente = document.querySelector(".btn-selecionar-cliente");

//Lista que contem os clientes cadastrados
const listaClientes = document.querySelector(".lista-clientes");

//Botao "Entrar como cliente da tela inicial"
const botaoCliente = document.querySelector(".btn-cliente");

//Botao X do modal
const botaoFecharModal = document.querySelector(".btn-fechar-modal");

//Modal de login
const modalLogin = document.querySelector(".modal-login");

//otao para entrar apos sleecionar um cliente
const botaoEntrarCliente = document.querySelector(".btn-entrar-cliente");

const botaoCadastrar = document.querySelector(".btn-cadastrar");

const formularioCadastro = document.querySelector(".form-cadastro-cliente");

const botaoSalvarCadastro = document.querySelector(".btn-salvar-cadastro");

const botaoAdmin = document.querySelector(".btn-admin");

//Executa uma açao quando o usuario clicar no seletor de cliente
botaoSelecionarCliente.addEventListener("click", function (){

    if (listaClientes.style.display === "flex"){
        listaClientes.style.display = "none";
    } else{
        listaClientes.style.display = "flex";
        listaClientes.scrollTop = 0; //faz com que a lista sempre abra no topo
    }

});

//Botoes de clientes disponiveis na lista
const botoesClientes = document.querySelectorAll(".lista-clientes button");

//percorre todos os botoes de cliuentes
botoesClientes.forEach(function (botaoCliente){

    //quando clicar em um cliente
    botaoCliente.addEventListener("click", function(){

        //troca o texto do seletor pelo nome do cliente escolhido
        botaoSelecionarCliente.innerHTML =
            botaoCliente.textContent + ' <i class="bi bi-chevron-down"></i>';

        //fechar a lista depois que selecionar um cliente
        listaClientes.style.display = "none";

        //Mostra o botao entrar
        botaoEntrarCliente.style.display = "block";

    });
});

//Abre o modal ao clicar em "Entrar como Cliente"
botaoCliente.addEventListener("click", function(){
    modalLogin.style.display = "flex";

});

//fechar o modal clicando no X
botaoFecharModal.addEventListener("click", function(){
    modalLogin.style.display = "none";
})

botaoEntrarCliente.addEventListener("click", function(){
    window.location.href = "cliente/catalogo.html";
});

botaoCadastrar.addEventListener("click", function(){
    formularioCadastro.style.display = "block";
});

botaoSalvarCadastro.addEventListener("click", function(){
    alert("Cliente cadastrado com sucesso!");

    formularioCadastro.style.display = "none";
});

botaoAdmin.addEventListener("click", function(){
    window.location.href = "admin/admin.html";
});