// Data de início do namoro: 10 de Agosto de 2024
const startDate = new Date('2024-08-10T00:00:00');

function updateCounter() {
    const now = new Date();
    
    // Define a hora da data atual para o início do dia para uma contagem de dias inteiros
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    // Calcula a diferença total em segundos
    let diffInSeconds = Math.floor((today - startDate) / 1000);

    // Calcula anos
    const years = Math.floor(diffInSeconds / (365.25 * 24 * 3600));
    diffInSeconds -= years * 365.25 * 24 * 3600;

    // Calcula meses (aproximado)
    const months = Math.floor(diffInSeconds / (30.44 * 24 * 3600));
    diffInSeconds -= months * 30.44 * 24 * 3600;

    // Calcula semanas
    const weeks = Math.floor(diffInSeconds / (7 * 24 * 3600));
    diffInSeconds -= weeks * 7 * 24 * 3600;
    
    // Calcula dias restantes
    const days = Math.floor(diffInSeconds / (24 * 3600));
    
    // Monta a string de texto para exibir, sem horas, minutos e segundos
    let counterText = '';
    if (years > 0) counterText += `<span>${years}</span> ${years > 1 ? 'anos' : 'ano'}<br>`;
    if (months > 0) counterText += `<span>${months}</span> ${months > 1 ? 'meses' : 'mês'}<br>`;
    if (weeks > 0) counterText += `<span>${weeks}</span> ${weeks > 1 ? 'semanas' : 'semana'}<br>`;
    // Mostra dias apenas se houverem, ou se for a única unidade de tempo (menos de 1 semana)
    if (days > 0 || counterText === '') counterText += `<span>${days}</span> ${days !== 1 ? 'dias' : 'dia'}<br>`;

    // Se o texto estiver vazio (menos de um dia), mostra uma mensagem especial
    if (counterText === '') {
        counterText = `<span>0</span> dias<br>`;
    }

    // Atualiza o HTML
    document.getElementById('relationship-counter').innerHTML = counterText;
}

// Atualiza o contador imediatamente e depois a cada minuto (não precisa ser a cada segundo)
updateCounter();
setInterval(updateCounter, 60000); // 60000 milissegundos = 1 minuto
/* --- CÓDIGO DO LIGHTBOX (FOTO AMPLIADA) --- */

document.addEventListener('DOMContentLoaded', () => {
    const galleryCards = document.querySelectorAll('.gallery-card');

    galleryCards.forEach(card => {
        card.addEventListener('click', () => {
            // Pega o caminho (src) da imagem dentro do card clicado
            const imgSrc = card.querySelector('img').src;

            // Cria os elementos do lightbox
            const lightbox = document.createElement('div');
            lightbox.classList.add('lightbox-overlay');

            const lightboxImage = document.createElement('img');
            lightboxImage.src = imgSrc;

            // Adiciona a imagem ao overlay
            lightbox.appendChild(lightboxImage);

            // Adiciona o lightbox completo à página
            document.body.appendChild(lightbox);
            document.body.classList.add('lightbox-open'); // Trava a rolagem

            // Função para fechar o lightbox
            lightbox.addEventListener('click', () => {
                document.body.removeChild(lightbox);
                document.body.classList.remove('lightbox-open'); // Libera a rolagem
            });
        });
    });
});