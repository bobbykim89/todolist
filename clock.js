
const clock = document.querySelector('.js-clock .clock_text');

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const time = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${miutes}` : minutes}`;
    clock.innerHTML = time;
    return;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
    return;
}

init();