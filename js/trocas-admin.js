const botaoAceitarTroca = document.querySelector(".btn-aceitar-troca");

const botaoNegarTroca = document.querySelector(".btn-negar-troca");

const botaoConfirmarRecebimentoTroca = document.querySelector(".btn-confirmar-recebimento-troca");

const botaoProcessarTroca = document.querySelector(".btn-processar-troca");

const botaoVoltarAdmin = document.querySelector(".btn-voltar-admin");

const cupomGerado = document.querySelector(".cupom-gerado");

botaoAceitarTroca.addEventListener("click", function () {

    const troca = botaoAceitarTroca.closest(".troca-admin");

    const statusTroca = troca.querySelector(".status-troca strong");

    statusTroca.textContent = "Troca aceita";

    botaoAceitarTroca.style.display = "none";
    botaoNegarTroca.style.display = "none";

    alert("Troca aceita com sucesso!");
});

botaoNegarTroca.addEventListener("click", function () {

    const troca = botaoNegarTroca.closest(".troca-admin");

    const statusTroca = troca.querySelector(".status-troca strong");

    statusTroca.textContent = "Troca negada";

    botaoAceitarTroca.style.display = "none";
    botaoNegarTroca.style.display = "none";

    alert("Troca negada.");
});

botaoConfirmarRecebimentoTroca.addEventListener("click", function () {

    const troca = botaoConfirmarRecebimentoTroca.closest(".troca-admin");

    const statusTroca = troca.querySelector(".status-troca strong");

    statusTroca.textContent = "Item recebido";

    botaoConfirmarRecebimentoTroca.style.display = "none";

    alert("Recebimento do item confirmado!");
});

botaoProcessarTroca.addEventListener("click", function () {

    const troca = botaoProcessarTroca.closest(".troca-admin");

    const statusTroca = troca.querySelector(".status-troca strong");

    statusTroca.textContent = "Troca processada";

    botaoProcessarTroca.style.display = "none";

    cupomGerado.style.display = "block";

    alert("Troca processada com sucesso!");
});

botaoVoltarAdmin.addEventListener("click", function () {
    window.location.href = "admin.html";
});