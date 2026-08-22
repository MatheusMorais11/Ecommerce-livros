const botaoNovoEndereco = document.querySelector(".btn-novo-endereco");

const formularioNovoEndereco = document.querySelector(".form-novo-endereco");

const botaoSalvarEndereco = document.querySelector(".btn-salvar-endereco");

const botaoContinuarPagamento = document.querySelector(".btn-continuar-pagamento");

const etapaEndereco = document.querySelector(".etapa-endereco");

const etapaPagamento = document.querySelector(".etapa-pagamento");

const botaoNovoCartao = document.querySelector(".btn-novo-cartao");

const formularioNovoCartao = document.querySelector(".form-novo-cartao");

const botaoSalvarCartao = document.querySelector(".btn-salvar-cartao");

const botaoContinuarResumo = document.querySelector(".btn-continuar-resumo");

const etapaResumo = document.querySelector(".etapa-resumo");

const botaoConfirmarPedido = document.querySelector(".btn-confirmar-pedido");

botaoContinuarPagamento.addEventListener("click", function(){
    etapaEndereco.style.display ="none";
    etapaPagamento.style.display = "block";
});

botaoNovoEndereco.addEventListener("click", function(){
    formularioNovoEndereco.style.display = "block";
});

botaoSalvarEndereco.addEventListener("click", function(){
    alert("Endereço Cadastrado com sucesso!");

    formularioNovoEndereco.style.display = "none";
});

botaoNovoCartao.addEventListener("click", function (){
    formularioNovoCartao.style.display = "block";
});

botaoSalvarCartao.addEventListener("click", function(){
    alert("Cartão cadastrado com sucesso!");

    formularioNovoCartao.style.display = "none";
});

botaoContinuarResumo.addEventListener("click", function(){
    etapaPagamento.style.display = "none";
    etapaResumo.style.display = "block";
});

botaoConfirmarPedido.addEventListener("click", function(){
    alert("Pedido Realizado com sucesso");

    window.location.href = "pedidos.html";
});