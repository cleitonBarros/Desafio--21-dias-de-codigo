
const horas = document.querySelector(".horas")
const minutos = document.querySelector(".minutos")
const segundos = document.querySelector(".segundos")

const relogio = setInterval(() => {
    let dateToday = new Date();

    let hr = dateToday.getHours();
    let min= dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    if(hr < 10) hr = '0'+ hr;
    if(min < 10) min = '0'+ min;
    if(sec < 10) sec = '0'+ sec;

    horas.innerText = hr;
    minutos.innerText = min;
    segundos.innerText = sec;
});