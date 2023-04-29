var elemento = document.getElementById("miElemento");
var sonido = document.getElementById("sonidoClic");
elemento.addEventListener("click", function () {
  sonido.currentTime = 0; // reinicia el sonido si se ha reproducido anteriormente
  sonido.play();
});
