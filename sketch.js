document.addEventListener("DOMContentLoaded", () => {
    const passos = document.querySelectorAll(".passo");
    const botoes = document.querySelectorAll(".btn-proximo");

    // Função para mostrar apenas o passo atual
    function mostrarPasso(id) {
        passos.forEach(passo => {
            passo.classList.remove("ativo");
        });

        const passoAtual = document.getElementById(`passo-${id}`);
        if (passoAtual) {
            passoAtual.classList.add("ativo");
        }
    }

    // Adiciona evento aos botões para navegar entre os passos
    botoes.forEach(botao => {
        botao.addEventListener("click", () => {
            const proximoId = botao.getAttribute("data-proximo");
            mostrarPasso(proximoId);
        });
    });

    // Mostrar o primeiro passo ao carregar
    mostrarPasso(0);
});
