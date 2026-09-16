// Número oficial do WhatsApp (usado em todo o site)
const numeroWhatsApp = "5591984945542";

// MENU MOBILE
const menuMobile = document.getElementById("menuMobile");
const menu = document.querySelector(".menu");

menuMobile.addEventListener("click", () => {
    menu.classList.toggle("active");
});

// Fecha o menu ao clicar em um link
document.querySelectorAll(".menu a").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
    });
});


// FORMULÁRIO DE COTAÇÃO
const form = document.getElementById("quoteForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const idade = document.getElementById("idade").value.trim();
    const tipo = document.getElementById("tipo").value;

    const mensagem = `
Olá! Gostaria de solicitar uma cotação de plano de saúde.

👤 Nome: ${nome}
📱 WhatsApp: ${telefone}
🎂 Idade: ${idade || "Não informado"}
📋 Tipo de plano: ${tipo || "Não informado"}

Gostaria de receber informações sobre as opções disponíveis.
    `;

    const url =
        `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");

});


// LOGOS DAS OPERADORAS -> WHATSAPP
document.querySelectorAll(".operator").forEach(operator => {

    const abrirWhatsApp = () => {
        const produto = operator.dataset.produto || "plano de saúde";

        const mensagem =
            `Olá! Tenho interesse no plano ${produto}. Poderiam me passar mais informações?`;

        const url =
            `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

        window.open(url, "_blank");
    };

    operator.addEventListener("click", abrirWhatsApp);

    // Acessibilidade: também funciona com Enter/Espaço via teclado
    operator.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            abrirWhatsApp();
        }
    });

});