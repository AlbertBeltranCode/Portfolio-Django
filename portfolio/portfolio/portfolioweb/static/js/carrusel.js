let currentIndex = 0;
const itemsToShow = 4; // Número de elementos visibles
const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
const itemWidth = items[0].getBoundingClientRect().width;
let autoPlayInterval;

// Clonar los primeros y últimos elementos para crear el efecto infinito
for (let i = 0; i < itemsToShow; i++) {
    const cloneFirst = items[i].cloneNode(true);
    const cloneLast = items[totalItems - 1 - i].cloneNode(true);
    carousel.appendChild(cloneFirst);
    carousel.insertBefore(cloneLast, carousel.firstChild);
}

// Función para mover el carrusel
function moveCarousel(direction) {
    currentIndex += direction;
    carousel.style.transition = 'transform 0.5s ease-in-out';
    carousel.style.transform = `translateX(${-itemWidth * currentIndex}px)`;

    // Reiniciar la posición para el efecto infinito
    carousel.addEventListener('transitionend', handleTransitionEnd);
}

// Manejar el fin de la transición para el efecto infinito
function handleTransitionEnd() {
    if (currentIndex >= totalItems) {
        carousel.style.transition = 'none';
        currentIndex = 0;
        carousel.style.transform = `translateX(${-itemWidth * currentIndex}px)`;
    } else if (currentIndex < 0) {
        carousel.style.transition = 'none';
        currentIndex = totalItems - 1;
        carousel.style.transform = `translateX(${-itemWidth * currentIndex}px)`;
    }
    // Eliminar el event listener para evitar múltiples adjunciones
    carousel.removeEventListener('transitionend', handleTransitionEnd);
}

// Función para iniciar la reproducción automática
function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
        moveCarousel(1);
    }, 3000); // Cambia cada 3 segundos
}

// Función para detener la reproducción automática
function stopAutoPlay() {
    clearInterval(autoPlayInterval);
}

// Inicializar la posición del carrusel
document.addEventListener('DOMContentLoaded', () => {
    carousel.style.transform = `translateX(${-itemWidth * itemsToShow}px)`;
    currentIndex = itemsToShow;

    // Iniciar la reproducción automática
    startAutoPlay();

    // Detener la reproducción automática al interactuar manualmente
    const controls = document.querySelectorAll('.carousel-control');
    controls.forEach(control => {
        control.addEventListener('click', () => {
            stopAutoPlay();
            moveCarousel(control.classList.contains('next') ? 1 : -1);
            startAutoPlay(); // Reiniciar la reproducción automática después de la interacción
        });
    });
});
