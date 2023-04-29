let links = document.querySelectorAll("nav a");

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    let audio = new Audio(`audio/shoot.mp3`);
    audio.play();
    console.log(`Reproduciendo: ${audio.src}`);
    setTimeout(() => {
      window.location.href = link.href;
    }, 1000); //espera 1 segundo para redirigir al usuario
  });
});
