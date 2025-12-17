// Scroll sencillo al hacer clic en el botón
const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  window.scrollTo(0, document.body.scrollHeight);
});
