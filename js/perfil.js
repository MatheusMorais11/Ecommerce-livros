const botaoEditarPerfil = document.querySelector(".btn-editar-perfil");

const botaoSalvarPerfil = document.querySelector(".btn-salvar-perfil");

const botaoInativarCliente = document.querySelector(".btn-inativar-cliente");

const campoNome = document.querySelector(".campo-nome");

const campoEmail = document.querySelector(".campo-email");

const campoTelefone = document.querySelector(".campo-telefone");

const statusCliente = document.querySelector(".status-cliente");


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