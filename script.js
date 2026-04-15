const progressBar = document.getElementById('progress-bar');
const percentageText = document.getElementById('percentage');
const statusText = document.getElementById('status-text');

let width = 0;

function simulateLoading() {
    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            statusText.innerText = "Carregamento Completo!";
            statusText.style.color = "#A1E44D";
        } else {
            // Incremento aleatório para parecer mais real
            width += Math.floor(Math.random() * 5) + 1;
            if (width > 100) width = 100;
            
            progressBar.style.width = width + '%';
            percentageText.innerText = width + '%';

            // Mudar o texto conforme o progresso
            if (width > 40 && width < 80) {
                statusText.innerText = "Otimizando módulos...";
                statusText.style.color = "#D8A39D";
            } else if (width >= 80) {
                statusText.innerText = "Finalizando...";
                statusText.style.color = "#E6A8C4";
            }
        }
    }, 150);
}

// Inicia a animação ao carregar a página
window.onload = simulateLoading;