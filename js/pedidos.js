const botaoCancelarPedido = document.querySelector(".btn-cancelar-pedido");

const botaoConfirmarRecebimento = document.querySelector(".btn-confirmar-recebimento");

const botaoSolicitarTroca = document.querySelector(".btn-solicitar-troca");

const formularioTroca = document.querySelector(".form-troca");

const botaoEnviarTroca = document.querySelector(".btn-enviar-troca");

const botaoInformarDespacho = document.querySelector(".btn-informar-despacho");

const botoesVerDetalhes = document.querySelectorAll(".btn-ver-detalhes");

const botaoVoltarCatalogo = document.querySelector(".btn-voltar-catalogo");

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

botaoSolicitarTroca.addEventListener("click", function(){
    formularioTroca.style.display = "block";
});

botaoEnviarTroca.addEventListener("click", function(){
    
    const pedido = botaoSolicitarTroca.closest(".pedido");

    const statusPedido = pedido.querySelector(".status-pedido");
    
    statusPedido.textContent = "Troca solicitada";

    formularioTroca.style.display = "none";

    botaoSolicitarTroca.style.display = "none";

    alert("Solicitação de troca enviada com sucesso!");
});

botaoInformarDespacho.addEventListener("click", function(){

    const pedido = botaoInformarDespacho.closest(".pedido");

    const statusPedido = pedido.querySelector(".status-pedido");

    statusPedido.textContent = "item enviado";

    botaoInformarDespacho.style.display = "none";

    alert("Despacho do item informado com sucesso!");
});

botoesVerDetalhes.forEach(function (botao){

    botao.addEventListener("click", function(){

        const pedido = botao.closest(".pedido");

        const detalhesPedido = pedido.querySelector(".detalhes-pedido");

        if (detalhesPedido.style.display === "none"){
            detalhesPedido.style.display = "block";
            botao.textContent = "Ocultar detalhes";
        } else{
            detalhesPedido.style.display = "none";
            botao.textContent = "Ver detalhes";
        }
    });
});

botaoVoltarCatalogo.addEventListener("click", function () {
    window.location.href = "catalogo.html";
});
