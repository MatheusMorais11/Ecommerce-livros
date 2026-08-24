const botaoPedidosAdmin = document.querySelector(".btn-admin-pedidos");

const botaoSairAdmin = document.querySelector(".btn-sair-admin");

botaoPedidosAdmin.addEventListener("click", function(){
    window.location.href = "pedidos-admin.html";
});

botaoSairAdmin.addEventListener("click", function () {
    window.location.href = "../index.html";
});
