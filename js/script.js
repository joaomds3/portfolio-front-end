document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form-contato");
    const resultado = document.getElementById("mensagem-resultado");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const nome = document.getElementById("nome").value.trim();
            const email = document.getElementById("email").value.trim();
            const mensagem = document.getElementById("mensagem").value.trim();

            if (!nome || !email || !mensagem) {
                resultado.textContent = "Por favor, preencha todos os campos.";
                resultado.style.color = "red";
                return;
            }

            const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
            if (!emailValido) {
                resultado.textContent = "Digite um e-mail válido.";
                resultado.style.color = "red";
                return;
            }

            resultado.textContent = "Mensagem enviada com sucesso!";
            resultado.style.color = "green";

            form.reset();
        });
    }
});
