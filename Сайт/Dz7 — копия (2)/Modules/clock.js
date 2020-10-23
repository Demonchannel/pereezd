import { htmlElements } from "../main.js";
let hours, minutes, seconds, timerId;
export class clocks {
    constructor({ template }) {
        this.hours = hours
        this.minutes = minutes
        this.timerId = timerId
        this.template = template
    }
    str() {
        document.getElementById("button2").style.color = "blue";
        document.getElementById("button1").style.color = "gray";
        document.getElementById("button3").style.color = "gray";
    }
    clockStart() {
        clearInterval(timerId);
        timerId = setInterval(() => updateClock(), 1000);
        updateClock();
        removeButton();
    }
    updateClock() {
        let data = new Date();
        hours = new Date(Date.now()).getHours();
        if (hours < 10) hours = "0" + hours;
        minutes = new Date(Date.now()).getMinutes();
        if (minutes < 10) minutes = "0" + minutes;
        seconds = new Date(Date.now()).getSeconds();
        if (seconds < 10) seconds = "0" + seconds;
        const time = `${hours}:${minutes}:${seconds}`;
        htmlElements.watch.innerHTML = time;
    }

    removeButton() {
        htmlElements.stopBtn.setAttribute("hidden", "");
        htmlElements.startBtn.setAttribute("hidden", "");
        htmlElements.resetBtn.setAttribute("hidden", "");
    }
}