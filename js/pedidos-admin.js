const botoesAtualizarStatus = document.querySelectorAll(".btn-atualizar-status");

const filtroStatus = document.querySelector(".filtro-status");

const pedidosAdmin = document.querySelectorAll(".pedido-admin");

botoesAtualizarStatus.forEach(function (botao) {

    botao.addEventListener("click", function () {

        const pedido = botao.closest(".pedido-admin");

        const selectStatus = pedido.querySelector(".status-pedido-admin");

        let novoStatus;

        if (selectStatus.value === "Em Processamento") {
            novoStatus = "processamento";
        } else if (selectStatus.value === "Pagamento Realizado"){
            novoStatus = "pagamento";
        } else if (selectStatus.value === "Em Trânsito"){
            novoStatus = "transito";
        } else if (selectStatus.value === "Entregue") {
            novoStatus = "entregue";
        }

        pedido.dataset.status = novoStatus;

        alert("Status atualizado para: " + selectStatus.value);
    });

});

filtroStatus.addEventListener("change", function(){

    const statusSelecionado = filtroStatus.value;

    pedidosAdmin.forEach(function (pedido) {

        if (
            statusSelecionado === "todos" ||
            pedido.dataset.status === statusSelecionado //esse pedido le o data-status="entregue"
        ) {
            pedido.style.display = "flex";
        } else {
            pedido.style.display = "none";
        }
    });
});