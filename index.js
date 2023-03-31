//получаем кнопки старт, стоп
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");

//присваиваем функицонал кнопкам
document.getElementById("start").addEventListener("click", startFn);
document.getElementById("stop").addEventListener("click", stopFn);

//получаем полосу загрузки, ее заполнение, вводим таймер
let progressLine = document.getElementById("progressLine");
let progressCount = document.getElementById("progressCount");

let width = 1;
let timerId;

//фукционал кнопки старт
function startFn() {
  timerId = setInterval(progressFn, 50);
}

//функционал кнопки стоп
function stopFn() {
  clearInterval(timerId);
  startBtn.disabled = false;
}

//функция заполнения шкалы и вывода процента заполнения
function progressFn() {
  if (width === 100) {
    clearInterval(timerId);
  } else {
    width++;
    progressLine.style.width = `${width}%`;
    progressCount.innerHTML = `${width}%`;
    startBtn.disabled = true;
  }
}

startFn();