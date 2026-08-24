const botoesAlterarEstoque = document.querySelectorAll(".btn-alterar-estoque");

const botoesInativarLivro = document.querySelectorAll(".btn-inativar-livro");

const botoesReativarLivro = document.querySelectorAll(".btn-reativar-livro");

const botoesEditarLivro = document.querySelectorAll(".btn-editar-livro");

const modalEditarLivro = document.querySelector(".modal-editar-livro");

const botaoFecharEdicao = document.querySelector(".btn-fechar-edicao");

const botaoSalvarEdicao = document.querySelector(".btn-salvar-edicao");

const campoEditarTitulo = document.querySelector(".editar-titulo");

const campoEditarAutor = document.querySelector(".editar-autor");

const campoEditarPreco = document.querySelector(".editar-preco");

const campoEditarEstoque = document.querySelector(".editar-estoque");

const botaoNovoLivro = document.querySelector(".btn-novo-livro");

const modalCadastrarLivro = document.querySelector(".modal-cadastrar-livro");

const botaoFecharCadastro = document.querySelector(".btn-fechar-cadastro");

const botaoSalvarCadastroLivro = document.querySelector(".btn-salvar-cadastro-livro");

const campoCadastroTitulo = document.querySelector(".cadastro-titulo");

const campoCadastroAutor = document.querySelector(".cadastro-autor");

const campoCadastroPreco = document.querySelector(".cadastro-preco");

const campoCadastroEstoque = document.querySelector(".cadastro-estoque");

const listaLivrosAdmin = document.querySelector(".lista-livros-admin");

const botaoVoltarAdmin = document.querySelector(".btn-voltar-admin");

let livroEmEdicao = null;

botoesAlterarEstoque.forEach(function (botao) {

    botao.addEventListener("click", function () {

        const livro = botao.closest(".livro-admin");

        const estoqueAtual = livro.querySelector(".info-livro-admin p:nth-of-type(3)");

        const novaQuantidade = prompt("Digite a nova quantidade em estoque:"); //prompt aqui é para o usuario digitar a nova quantidade//

        if (novaQuantidade !== null && novaQuantidade !== "") {
            estoqueAtual.innerHTML = "<strong>Estoque:</strong> " + novaQuantidade + " unidades";

            alert("Estoque atualizado com sucesso!");
        }

    });

});

botoesInativarLivro.forEach(function (botao) {

    botao.addEventListener("click", function () {

        const livro = botao.closest(".livro-admin");

        const statusLivro = livro.querySelector(".info-livro-admin p:nth-of-type(4)");

        const confirmar = confirm("Deseja realmente inativar este livro?");

        if (confirmar) {
            statusLivro.innerHTML = "<strong>Status:</strong> Inativo";

            botao.textContent = "Reativar";
            botao.classList.remove("btn-inativar-livro");
            botao.classList.add("btn-reativar-livro");

            alert("Livro inativado com sucesso!");
        }

    });

});

botoesReativarLivro.forEach(function (botao) {

    botao.addEventListener("click", function () {

        const livro = botao.closest(".livro-admin");

        const statusLivro = livro.querySelector(".info-livro-admin p:nth-of-type(4)");

        statusLivro.innerHTML = "<strong>Status:</strong> Ativo";

        botao.textContent = "Inativar";

        alert("Livro reativado com sucesso!");
    });

});

botoesEditarLivro.forEach(function (botao) {

    botao.addEventListener("click", function () {

        livroEmEdicao = botao.closest(".livro-admin");

        const titulo = livroEmEdicao.querySelector("h2");

        const paragrafos = livroEmEdicao.querySelectorAll(".info-livro-admin p");

        campoEditarTitulo.value = titulo.textContent;

        campoEditarAutor.value =
            paragrafos[0].textContent.replace("Autor: ", "");

        campoEditarPreco.value =
            paragrafos[1].textContent.replace("Preço: ", "");

        campoEditarEstoque.value =
            paragrafos[2].textContent
                .replace("Estoque: ", "")
                .replace(" unidades", "");

        modalEditarLivro.style.display = "flex";

    });

});

botaoSalvarEdicao.addEventListener("click", function () {

    const titulo = livroEmEdicao.querySelector("h2");

    const paragrafos = livroEmEdicao.querySelectorAll(".info-livro-admin p");

    titulo.textContent = campoEditarTitulo.value;

    paragrafos[0].innerHTML =
        "<strong>Autor:</strong> " + campoEditarAutor.value;

    paragrafos[1].innerHTML =
        "<strong>Preço:</strong> " + campoEditarPreco.value;

    paragrafos[2].innerHTML =
        "<strong>Estoque:</strong> " + campoEditarEstoque.value + " unidades";

    modalEditarLivro.style.display = "none";

    alert("Livro atualizado com sucesso!");

});

botaoFecharEdicao.addEventListener("click", function () {

    modalEditarLivro.style.display = "none";

});

botaoNovoLivro.addEventListener("click", function () {

    modalCadastrarLivro.style.display = "flex";

});

botaoFecharCadastro.addEventListener("click", function () {

    modalCadastrarLivro.style.display = "none";

});

botaoSalvarCadastroLivro.addEventListener("click", function () {

    const titulo = campoCadastroTitulo.value;
    const autor = campoCadastroAutor.value;
    const preco = campoCadastroPreco.value;
    const estoque = campoCadastroEstoque.value;

    if (
        titulo === "" ||
        autor === "" ||
        preco === "" ||
        estoque === ""
    ) {
        alert("Preencha todos os campos.");
        return;
    }

    listaLivrosAdmin.insertAdjacentHTML("beforeend", `
        <article class="livro-admin">

            <div class="capa-livro-admin">
                Capa
            </div>

            <div class="info-livro-admin">
                <h2>${titulo}</h2>

                <p><strong>Autor:</strong> ${autor}</p>
                <p><strong>Preço:</strong> R$ ${preco}</p>
                <p><strong>Estoque:</strong> ${estoque} unidades</p>
                <p><strong>Status:</strong> Ativo</p>
            </div>

            <div class="acoes-livro-admin">

                <button class="btn-editar-livro">
                    Editar
                </button>

                <button class="btn-alterar-estoque">
                    Alterar estoque
                </button>

                <button class="btn-inativar-livro">
                    Inativar
                </button>

            </div>

        </article>
    `);

    alert("Livro cadastrado com sucesso!");

    modalCadastrarLivro.style.display = "none";

    campoCadastroTitulo.value = "";
    campoCadastroAutor.value = "";
    campoCadastroPreco.value = "";
    campoCadastroEstoque.value = "";
});

botaoVoltarAdmin.addEventListener("click", function () {
    window.location.href = "admin.html";
});

