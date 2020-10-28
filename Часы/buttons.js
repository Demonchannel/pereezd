import {
    Clock
} from "./Modules/clock.js";
import {
    StopWatchStart
} from "./Modules/stopwatch.js";
import {
    Timer
} from "./Modules/timer.js";
const htmlElements = {};
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
    let clock = new Clock({ template: 'h:m:s' });
    clock.start();
    // htmlElements.stopBtn.setAttribute("hidden", true);
    // htmlElements.startBtn.setAttribute("hidden", true);
    // htmlElements.resetBtn.setAttribute("hidden", true);
};

document.getElementById("button2").onclick = function() {
    this.style.color = "blue";
    document.getElementById("button1").style.color = "gray";
    document.getElementById("button3").style.color = "gray";
    let stopWatchStart = new StopWatchStart({ template: 'h:m:s' });
    stopWatchStart.render();
    htmlElements.stopBtn.removeAttribute("hidden");
    htmlElements.startBtn.removeAttribute("hidden");
    htmlElements.resetBtn.removeAttribute("hidden");
    // htmlElements.stopBtn.removeEventListener("click", runStopWatch2)
    // htmlElements.startBtn.removeEventListener("click", stopStopWatch2)
    // htmlElements.resetBtn.removeEventListener("click", resetStopWatch2)
    htmlElements.startBtn.addEventListener("click", stopWatchStart.runStopWatch);
    htmlElements.stopBtn.addEventListener("click", this.stopStopWatch);
    htmlElements.resetBtn.addEventListener("click", this.resetStopWatch);
};

document.getElementById("button3").onclick = function() {
    this.style.color = "blue";
    document.getElementById("button1").style.color = "gray";
    document.getElementById("button2").style.color = "gray";
    let timer = new Timer();
    timer.render();
    htmlElements.stopBtn.removeEventListener("click", runStopWatch)
    htmlElements.startBtn.removeEventListener("click", stopStopWatch)
    htmlElements.resetBtn.removeEventListener("click", resetStopWatch)
    htmlElements.startBtn.addEventListener("click", this.runStopWatch2);
    htmlElements.stopBtn.addEventListener("click", this.stopStopWatch2);
    htmlElements.resetBtn.addEventListener("click", this.resetStopWatch2);
};