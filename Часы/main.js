import {
    Clock
} from "./Modules/clock.js";
import {
    StopWatchStart
} from "./Modules/stopwatch.js";
import {
    Timer
} from "./Modules/timer.js";
import {

} from "./buttons.js";

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
        containerClock.classList.add("Clock")
    } else if (element === "stopwatch") {
        containerClock.setAttribute("hidden", "")
        containerStopWatch.removeAttribute("hidden")
        containerTimer.setAttribute("hidden", "")
        containerStopWatch.classList.add("stopWatch")
    } else {
        containerClock.setAttribute("hidden", "")
        containerStopWatch.setAttribute("hidden", "")
        containerTimer.removeAttribute("hidden")
        containerTimer.classList.add("timer")
    }


}

function initfunc() {
    // const clock = new Clock();
    // clock.render();
    htmlElements.clock.addEventListener("click", ($event) => hiddenclass($event.target.text));
    htmlElements.stopwatch.addEventListener("click", ($event) => hiddenclass($event.target.text));
    htmlElements.timer.addEventListener("click", ($event) => hiddenclass($event.target.text));

    // new clock(hours)
}
initfunc();