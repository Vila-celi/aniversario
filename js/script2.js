
document.addEventListener('DOMContentLoaded', () => {
  const boton_play2 = document.querySelector(".boton_play2");
  const youtubeVideo2 = document.getElementById("youtubeVideo2").contentWindow;

  let isPlaying2 = false;

  boton_play2.addEventListener('click', () => {
    if (isPlaying2) {
      youtubeVideo2.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
      boton_play2.textContent = '▶️'; // Cambia el ícono del botón a play
    } else {
      youtubeVideo2.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
      boton_play2.textContent = '⏸️'; // Cambia el ícono del botón a pause
    }
    isPlaying2 = !isPlaying2; // Alterna el estado de reproducción
  });
});

