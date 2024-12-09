document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".carousel img");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    let currentIndex = 0;

    // Muestra la imagen en la posición actual
    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.remove("active"); // Oculta todas las imágenes
            if (i === index) {
                img.classList.add("active"); // Muestra solo la imagen activa
            }
        });
    }

    // Función para ir a la siguiente imagen
    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length; // Ciclo de imágenes
        showImage(currentIndex);
    }

    // Función para ir a la imagen anterior
    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length; // Ciclo de imágenes
        showImage(currentIndex);
    }

    // Event listeners para los botones
    nextButton.addEventListener("click", nextImage);
    prevButton.addEventListener("click", prevImage);

    // Rotación automática cada 5 segundos
    setInterval(nextImage, 5000);

    // Inicializa mostrando la primera imagen
    showImage(currentIndex);
});

document.addEventListener("scroll", function () {
    const parallaxSections = document.querySelectorAll(".parallax");

    parallaxSections.forEach((section) => {
        const speed = 0.5;
        const offset = window.scrollY * speed;
        section.style.backgroundPositionY = `${offset}px`;
    });
});