const body = document.querySelector("body");
const darkBtn = document.getElementById("dark-btn");
const lightBtn = document.getElementById("light-btn");

let mode = localStorage.getItem("mode");
if (Boolean(mode)) {
  if (mode.length) {
    body.classList.add("dark-mode");
    lightBtn.classList.toggle("hidden");
    darkBtn.classList.toggle("hidden");
  }
}

function darkLight() {
  body.classList.toggle("dark-mode");
}

darkBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  lightBtn.classList.toggle("hidden");
  darkBtn.classList.toggle("hidden");
  localStorage.setItem("mode", "dark-mode");
});
lightBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  lightBtn.classList.add("hidden");
  darkBtn.classList.remove("hidden");
  localStorage.setItem("mode", "");
});
