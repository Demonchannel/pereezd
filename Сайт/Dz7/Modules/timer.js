let hours, minutes, seconds, timerId;

const htmlElements = {
    startBtn: document.querySelector(".container-timer .buttons button.start"),
    stopBtn: document.querySelector(".container-timer .buttons button.stop"),
    resetBtn: document.querySelector(".container-timer .buttons button.reset"),
    watch: document.querySelector(".container-timer .watch"),
    timer: document.querySelector("container .links .timer"),
};

export function timer() {
    clearInterval(timerId);
    const time = `00:05:00`;
    htmlElements.watch.innerHTML = time;
    hours = 0;
    minutes = 5;
    seconds = 0;
    showButton2();
}

function showButton2() {
    htmlElements.startBtn.addEventListener("click", runStopWatch2);
    htmlElements.stopBtn.addEventListener("click", stopStopWatch2);
    htmlElements.resetBtn.addEventListener("click", resetStopWatch2);
}

function runStopWatch2() {
    timerId = setInterval(updateStopWatch2, 1000);
}

function stopStopWatch2() {
    clearInterval(timerId);
}

function resetStopWatch2() {
    clearInterval(timerId);
    timer();
}

function updateStopWatch2() {
    seconds--;
    if (seconds <= 0) {
        seconds = 59;
        minutes--;
        if (minutes <= -1) {
            minutes = 59;
            hours--;
        }
        if (hours === 24) {
            hours = 0;
        }
    }
    if (hours < 10 && hours.length !== 2) hours = "0" + hours;
    if (minutes < 10 && minutes.length !== 2) minutes = "0" + minutes;
    if (seconds < 10 && seconds.length !== 2) seconds = "0" + seconds;
    const time = `${hours}:${minutes}:${seconds}`;
    htmlElements.watch.innerHTML = time;
}