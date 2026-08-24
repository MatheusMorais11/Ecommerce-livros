const botaoEditarPerfil = document.querySelector(".btn-editar-perfil");

const botaoSalvarPerfil = document.querySelector(".btn-salvar-perfil");

const botaoInativarCliente = document.querySelector(".btn-inativar-cliente");

const campoNome = document.querySelector(".campo-nome");

const campoEmail = document.querySelector(".campo-email");

const campoTelefone = document.querySelector(".campo-telefone");

const statusCliente = document.querySelector(".status-cliente");

const campoSenhaAtual = document.querySelector(".senha-atual");

const campoNovaSenha = document.querySelector(".nova-senha");

const campoConfirmarSenha = document.querySelector(".confirmar-senha");

const botaoAlterarSenha = document.querySelector(".btn-alterar-senha");

const botaoVoltarCatalogo = document.querySelector(".btn-voltar-catalogo");

const botaoEditarEndereco = document.querySelector(".btn-editar-endereco");

const formularioEditarEndereco = document.querySelector(".form-editar-endereco");

const botaoSalvarEnderecoPerfil = document.querySelector(".btn-salvar-endereco-perfil");

const botaoCancelarEdicaoEndereco = document.querySelector(".btn-cancelar-edicao-endereco");

const botaoEditarCartao = document.querySelector(".btn-editar-cartao");

const formularioEditarCartao = document.querySelector(".form-editar-cartao");

const botaoSalvarCartaoPerfil = document.querySelector(".btn-salvar-cartao-perfil");

const botaoCancelarEdicaoCartao = document.querySelector(".btn-cancelar-edicao-cartao");

const botaoNovoEnderecoPerfil = document.querySelector(".btn-novo-endereco");

const formularioNovoEnderecoPerfil = document.querySelector(".form-novo-endereco-perfil");

const botaoSalvarNovoEndereco = document.querySelector(".btn-salvar-novo-endereco");

const botaoCancelarNovoEndereco = document.querySelector(".btn-cancelar-novo-endereco");

const botaoNovoCartaoPerfil = document.querySelector(".btn-novo-cartao");

const formularioNovoCartaoPerfil = document.querySelector(".form-novo-cartao-perfil");

const botaoSalvarNovoCartao = document.querySelector(".btn-salvar-novo-cartao");

const botaoCancelarNovoCartao = document.querySelector(".btn-cancelar-novo-cartao");

botaoEditarPerfil.addEventListener("click", function () {

    campoNome.disabled = false;
    campoEmail.disabled = false;
    campoTelefone.disabled = false;

    botaoEditarPerfil.style.display = "none";
    botaoSalvarPerfil.style.display = "inline-block";
});

botaoSalvarPerfil.addEventListener("click", function () {

    campoNome.disabled = true;
    campoEmail.disabled = true;
    campoTelefone.disabled = true;

    botaoSalvarPerfil.style.display = "none";
    botaoEditarPerfil.style.display = "inline-block";

    alert("Dados alterados com sucesso!");
});

botaoInativarCliente.addEventListener("click", function () {

    const confirmar = confirm("Deseja realmente inativar este cliente?");

    if (confirmar) {

        statusCliente.textContent = "Status: Inativo";

        botaoEditarPerfil.style.display = "none";
        botaoSalvarPerfil.style.display = "none";
        botaoInativarCliente.style.display = "none";
        
        alert("Cliente inativado com sucesso!");
    }
});

botaoAlterarSenha.addEventListener("click", function () {

    if (
        campoSenhaAtual.value === "" ||
        campoNovaSenha.value === "" ||
        campoConfirmarSenha.value === ""
    ) {
        alert("Preencha todos os campos.");
        return;
    }

    if (campoNovaSenha.value !== campoConfirmarSenha.value) {
        alert("As novas senhas não coincidem.");
        return;
    }

    alert("Senha alterada com sucesso!");

    campoSenhaAtual.value = "";
    campoNovaSenha.value = "";
    campoConfirmarSenha.value = "";

});

botaoVoltarCatalogo.addEventListener("click", function () {

    window.location.href = "catalogo.html";

});

botaoEditarEndereco.addEventListener("click", function () {

    formularioEditarEndereco.style.display = "block";

});

botaoCancelarEdicaoEndereco.addEventListener("click", function () {

    formularioEditarEndereco.style.display = "none";

});

botaoSalvarEnderecoPerfil.addEventListener("click", function () {

    alert("Endereço alterado com sucesso!");

    formularioEditarEndereco.style.display = "none";

});

botaoEditarCartao.addEventListener("click", function () {

    formularioEditarCartao.style.display = "block";

});

botaoCancelarEdicaoCartao.addEventListener("click", function () {

    formularioEditarCartao.style.display = "none";

});

botaoSalvarCartaoPerfil.addEventListener("click", function () {

    alert("Cartão alterado com sucesso!");

    formularioEditarCartao.style.display = "none";

});

botaoNovoEnderecoPerfil.addEventListener("click", function () {
    formularioNovoEnderecoPerfil.style.display = "block";
});

botaoCancelarNovoEndereco.addEventListener("click", function () {
    formularioNovoEnderecoPerfil.style.display = "none";
});

botaoSalvarNovoEndereco.addEventListener("click", function () {
    alert("Endereço cadastrado com sucesso!");

    formularioNovoEnderecoPerfil.style.display = "none";
});

botaoNovoCartaoPerfil.addEventListener("click", function () {
    formularioNovoCartaoPerfil.style.display = "block";
});

botaoCancelarNovoCartao.addEventListener("click", function () {
    formularioNovoCartaoPerfil.style.display = "none";
});

botaoSalvarNovoCartao.addEventListener("click", function () {
    alert("Cartão cadastrado com sucesso!");

    formularioNovoCartaoPerfil.style.display = "none";
});