let hours, minutes, seconds, timerId;

const htmlElements = {
    startBtn: document.querySelector(
        ".container-stopWatch .buttons button.start"
    ),
    stopBtn: document.querySelector(".container-stopWatch .buttons button.stop"),
    resetBtn: document.querySelector(
        ".container-stopWatch .buttons button.reset"
    ),
    watch: document.querySelector(".container-stopWatch .watch"),
    stopWatch: document.querySelector(".contener .links .stopwatch"),
};

export function stopWatchStart() {
    clearInterval(timerId);
    const time = `00:00:00`;
    htmlElements.watch.innerHTML = time;
    hours = 0;
    minutes = 0;
    seconds = 0;
    showButton();
    updateStopWatch();
}

function showButton() {
    htmlElements.stopBtn.removeAttribute("hidden");
    htmlElements.startBtn.removeAttribute("hidden");
    htmlElements.resetBtn.removeAttribute("hidden");
    htmlElements.startBtn.addEventListener("click", runStopWatch);
    htmlElements.stopBtn.addEventListener("click", stopStopWatch);
    htmlElements.resetBtn.addEventListener("click", resetStopWatch);
}

function runStopWatch() {
    timerId = setInterval(updateStopWatch, 1000);
}

function stopStopWatch() {
    clearInterval(timerId);
}

function resetStopWatch() {
    clearInterval(timerId);
    stopWatchStart();
}

function updateStopWatch() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
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