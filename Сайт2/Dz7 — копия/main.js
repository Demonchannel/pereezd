import {
    clockStart
} from "./Modules/clock.js";
import {
    stopWatchStart
} from "./Modules/stopwatch.js";
import {
    timer
} from "./Modules/timer.js";

export const htmlElements = {};
htmlElements.startBtn = document.querySelector(
    ".container .buttons button.start"
);
htmlElements.stopBtn = document.querySelector(
    ".container .buttons button.stop"
);
htmlElements.resetBtn = document.querySelector(
    ".container .buttons button.reset"
);
htmlElements.clock = document.querySelector(".container .links .clock");
htmlElements.watch = document.querySelector(".watch");
htmlElements.stopwatch = document.querySelector(".container .links .stopwatch");
htmlElements.timer = document.querySelector(".container .links .timer");
htmlElements.output = document.querySelector(".container .output");
htmlElements.containerClock = document.querySelector(".container-clock");
htmlElements.containerTimer = document.querySelector(".container-timer");
htmlElements.containerStopWatch = document.querySelector(".container-stopWatch");

document.getElementById("button1").style.color = "gray";
document.getElementById("button2").style.color = "gray";
document.getElementById("button3").style.color = "gray";

document.getElementById("button1").onclick = function() {
    this.style.color = "blue";
    document.getElementById("button2").style.color = "gray";
    document.getElementById("button3").style.color = "gray";
};

document.getElementById("button2").onclick = function() {
    this.style.color = "blue";
    document.getElementById("button1").style.color = "gray";
    document.getElementById("button3").style.color = "gray";
};

document.getElementById("button3").onclick = function() {
    this.style.color = "blue";
    document.getElementById("button1").style.color = "gray";
    document.getElementById("button2").style.color = "gray";
};


function hiddenclass(element) {
    const {
        containerClock,
        containerStopWatch,
        containerTimer
    } = htmlElements
    if (element === "clock") {
        containerClock.removeAttribute("hidden")
        containerStopWatch.setAttribute("hidden", "")
        containerTimer.setAttribute("hidden", "")
        clockStart()
    } else if (element === "stopwatch") {
        containerClock.setAttribute("hidden", "")
        containerStopWatch.removeAttribute("hidden")
        containerTimer.setAttribute("hidden", "")
        stopWatchStart()
    } else {
        containerClock.setAttribute("hidden", "")
        containerStopWatch.setAttribute("hidden", "")
        containerTimer.removeAttribute("hidden")
        timer()
    }


} // const sartTime = new Date(Date.now()).getTime();
// const output = document.getSelection('.output');
// let timerId;
// let hours, minutes, seconds;

function initfunc() {
    htmlElements.clock.addEventListener("click", ($event) => hiddenclass($event.target.text));
    htmlElements.stopwatch.addEventListener("click", ($event) => hiddenclass($event.target.text));
    htmlElements.timer.addEventListener("click", ($event) => hiddenclass($event.target.text));
}
initfunc();

// function start(st) {
//     window[st]();
//     const elem = document.getElementById("myButton");
// }

// function Timer() {
//     const difference = (new Date().getTime() - sartTime) / 1000;
//     let secods = parseInt(difference % 60);
//     const minutes = parseInt((difference / 60) % 60);
//     if (seconds < 10) {
//         secods = '0' + secods;
//     }
//     const time = `${minutes}:${seconds}`;
// }