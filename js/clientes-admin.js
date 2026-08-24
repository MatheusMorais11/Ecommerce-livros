const campoBuscaCliente = document.querySelector(".campo-busca-cliente");

const botaoBuscarCliente = document.querySelector(".btn-buscar-cliente");

const clientesAdmin = document.querySelectorAll(".cliente-admin");

const botaoVoltarAdmin = document.querySelector(".btn-voltar-admin");

botaoVoltarAdmin.addEventListener("click", function () {
    window.location.href = "admin.html";
});

botaoBuscarCliente.addEventListener("click", function () {

    const textoBusca = campoBuscaCliente.value.toLowerCase();

    clientesAdmin.forEach(function (cliente) {

        const nomeCliente = cliente.querySelector("h2").textContent.toLowerCase();
        //includes ve se um texto tem outro dentro
        if (nomeCliente.includes(textoBusca)) {
            cliente.style.display = "block";
        } else {
            cliente.style.display = "none";
        }

    });

});