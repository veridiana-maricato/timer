const timerDiv = document.querySelector(".timer");
const iniciar = document.querySelector("#iniciar");
const pausar = document.querySelector("#pausar");
const zerar = document.querySelector("#zerar");

let timer;
let s = 0;

document.addEventListener("click", function (e) {
  const el = e.target;

  if (el.classList.contains("iniciar")) {
    timer = setInterval(() => {
      s++;
      timerDiv.innerHTML = setTimer(s);
      timerDiv.classList.remove("pausado");
    }, 1000);
  }
  if (el.classList.contains("pausar")) {
    clearInterval(timer);
    timerDiv.classList.add("pausado");
  }
  if (el.classList.contains("zerar")) {
    clearInterval(timer);
    timerDiv.innerHTML = "00:00:00";
    s = 0
    timerDiv.classList.remove("pausado");
  }
});

function setTimer(s) {
  let date = new Date(s * 1000);
  return date.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: "UTC",
  });
}
