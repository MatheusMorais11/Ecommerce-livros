const botaoPedidosAdmin = document.querySelector(".btn-admin-pedidos");

const botaoSairAdmin = document.querySelector(".btn-sair-admin");

const botaoTrocasAdmin = document.querySelector(".btn-admin-trocas");

const botaoCatalogoAdmin = document.querySelector(".btn-admin-catalogo");

const botaoClientesAdmin = document.querySelector(".btn-admin-clientes");

const botaoAnaliseAdmin = document.querySelector(".btn-admin-analise");


botaoClientesAdmin.addEventListener("click", function () {
    window.location.href = "clientes-admin.html";
});

botaoTrocasAdmin.addEventListener("click", function () {
    window.location.href = "trocas-admin.html";
});

botaoPedidosAdmin.addEventListener("click", function () {
    window.location.href = "pedidos-admin.html";
});

botaoSairAdmin.addEventListener("click", function () {
    window.location.href = "../index.html";
});

botaoCatalogoAdmin.addEventListener("click", function () {
    window.location.href = "catalogo-admin.html";
});

botaoAnaliseAdmin.addEventListener("click", function () {
    window.location.href = "analise-admin.html";
});