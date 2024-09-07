document.addEventListener('DOMContentLoaded', () => {
    const boton_play3 = document.querySelector(".boton_play3");
    const youtubeVideo3 = document.getElementById("youtubeVideo3").contentWindow;
  
    let isPlaying3 = false;
  
    boton_play3.addEventListener('click', () => {
      if (isPlaying3) {
        youtubeVideo3.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        boton_play3.textContent = '▶️'; // Cambia el ícono del botón a play
      } else {
        youtubeVideo3.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        boton_play3.textContent = '⏸️'; // Cambia el ícono del botón a pause
      }
      isPlaying3 = !isPlaying3; // Alterna el estado de reproducción
    });
  });


  const boton_carta = document.querySelector(".boton_carta")
  const carta_tres = document.querySelector("#carta_tres")

  boton_carta.addEventListener("click", () => {
    if (carta_tres.style.display === "none"){
        carta_tres.style.display = "block"; 
       (boton_carta.style.display = "block")
        boton_carta.style.display = "none"; 
    
        
    
    }     else {
        carta_tres.style.display = "none";
        imagenes_primeras.style.display ="block";
        
       
    };
    
});



