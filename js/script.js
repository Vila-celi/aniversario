const botonviaje = document.querySelector(".botonviaje")
const san_rafael = document.querySelector("#san_rafael")
const imagenes_primeras = document.querySelector(".fotos_primer")
const boton_volver = document.querySelector(".volver_primer")

   
botonviaje.addEventListener("click", () => {
    if (san_rafael.style.display === "none"){
        san_rafael.style.display = "block"; 
       (botonviaje.style.display = "block")
        botonviaje.style.display = "none"; 
      (imagenes_primeras.style.display = "block")
        imagenes_primeras.style.display = "none"; 
      (boton_volver.style.display = "none")
        boton_volver.style.display = "block"; 
        
    
    }     else {
        san_rafael.style.display = "none";
        imagenes_primeras.style.display ="block";
        boton_volver.style.display === "none";
       
    };
    
});

boton_volver.addEventListener("click", () => {
    if (san_rafael.style.display === "block"){
        san_rafael.style.display = "none"; 
        (botonviaje.style.display = "none")
        botonviaje.style.display = "block"; 
      (imagenes_primeras.style.display = "none")
        imagenes_primeras.style.display = "block"; 
      (boton_volver.style.display = "block")
        boton_volver.style.display = "none"; 
      
    
    }     else {
        san_rafael.style.display = "block";
        imagenes_primeras.style.display ="none";
        boton_volver.style.display = "block";
        botonviaje.style.display ="none";
    };
    
});


document.addEventListener('DOMContentLoaded', () => {
    // Primer Video
    const boton_play = document.querySelector(".boton_play");
    const youtubeVideo = document.getElementById("youtubeVideo").contentWindow;
  
    let isPlaying1 = false;
  
    boton_play.addEventListener('click', () => {
      if (isPlaying1) {
        youtubeVideo.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        boton_play.textContent = '▶️'; // Cambia el ícono del botón a play
      } else {
        youtubeVideo.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        boton_play.textContent = '⏸️'; // Cambia el ícono del botón a pause
      }
      isPlaying1 = !isPlaying1; // Alterna el estado de reproducción
    });
  
    // Segundo Video
    
  });

