document.addEventListener('DOMContentLoaded', () => {
    const botonPaciencia = document.querySelector(".boton_paciencia");
    const videoCarousel = document.querySelector("#videos_carrusel");
  
    // Inicialmente ocultamos el carrusel
    videoCarousel.style.display = "none";
  
    botonPaciencia.addEventListener("click", () => {
        if (videoCarousel.style.display === "none" || !videoCarousel.style.display) {
            // Mostrar el carrusel de videos y ocultar el botón
            videoCarousel.style.display = "block";
            botonPaciencia.style.display = "none";
        } else {
            // Ocultar el carrusel de videos y mostrar el botón
            videoCarousel.style.display = "none";
            botonPaciencia.style.display = "block";
        }
    });
  });
  



