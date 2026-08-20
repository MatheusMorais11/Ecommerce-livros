const botaoNovoEndereco = document.querySelector(".btn-novo-endereco");

const formularioNovoEndereco = document.querySelector(".form-novo-endereco");

const botaoSalvarEndereco = document.querySelector(".btn-salvar-endereco");

const botaoContinuarPagamento = document.querySelector(".btn-continuar-pagamento");

const etapaEndereco = document.querySelector(".etapa-endereco");

const etapaPagamento = document.querySelector(".etapa-pagamento");

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