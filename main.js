const box = document.querySelector(".box");
const button = document.querySelector(".run");
const changeButton = document.querySelector(".change");

button.addEventListener("click", () => {
  box.classList.add("error");
});

changeButton.addEventListener("click", () => {
  box.classList.remove("error");
});