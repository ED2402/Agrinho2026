// Projeto Agrinho 2026 - Front-End puro (HTML/CSS/JS)
// Tema: Agro forte, futuro sustentável

document.addEventListener('DOMContentLoaded', () => {
    const botoes = document.querySelectorAll('button[data-impacto]');
    const respostaDiv = document.getElementById('resposta-impacto');

    function mostrarImpacto(mensagem) {
        respostaDiv.innerHTML = `🌱 Impacto positivo: ${mensagem}! 🌍`;
        respostaDiv.style.opacity = '0';
        respostaDiv.style.transform = 'translateY(10px)';
        
        // pequena animação
        setTimeout(() => {
            respostaDiv.style.transition = 'all 0.3s ease';
            respostaDiv.style.opacity = '1';
            respostaDiv.style.transform = 'translateY(0)';
        }, 10);
    }

    botoes.forEach(botao => {
        botao.addEventListener('click', () => {
            const impacto = botao.getAttribute('data-impacto');
            mostrarImpacto(impacto);
        });
    });

    // Mensagem inicial opcional (sem impacto nos requisitos)
    respostaDiv.innerHTML = '✨ Clique em uma prática para ver o benefício ambiental ✨';
    respostaDiv.style.backgroundColor = '#f0f7e8';
    respostaDiv.style.color = '#2e5c2e';
});