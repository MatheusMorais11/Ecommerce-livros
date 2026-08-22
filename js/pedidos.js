const botaoCancelarPedido = document.querySelector(".btn-cancelar-pedido");

const botaoConfirmarRecebimento = document.querySelector(".btn-confirmar-recebimento");

botaoCancelarPedido.addEventListener("click", function(){

    const pedido = botaoCancelarPedido.closest(".pedido");//procura um elemtno em ".pedido" que tenha sido usado anteriormente

    const statusPedido = pedido.querySelector(".status-pedido");

    statusPedido.textContent = "Cancelado";

    botaoCancelarPedido.style.display = "none";

    alert("Pedido cancelado com sucesso!");
});

botaoConfirmarRecebimento.addEventListener("click", function(){
    const pedido = botaoConfirmarRecebimento.closest(".pedido");

    const statusPedido = pedido.querySelector(".status-pedido");

    statusPedido.textContent = "Entregue";

    botaoConfirmarRecebimento.style.display = "none";

    alert("Recebimento confirmado com sucesso!");
});
