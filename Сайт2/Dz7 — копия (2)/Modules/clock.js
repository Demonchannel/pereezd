import { htmlElements } from "../main.js";
let hours, minutes, seconds, timerId;
export class clocks {
    constructor({ template }) {
        this.hours = hours
        this.minutes = minutes
        this.timerId = timerId
        this.template = template
    }
    clockStart() {
        clearInterval(timerId);
        this.timerId = setInterval(() => updateClock(), 1000);
        updateClock();
        removeButton();
    }
    updateClock() {
        let data = new Date();
        this.hours = new Date(Date.now()).getHours();
        if (this.hours < 10) this.hours = "0" + this.hours;
        this.minutes = new Date(Date.now()).getMinutes();
        if (this.minutes < 10) this.minutes = "0" + this.minutes;
        this.seconds = new Date(Date.now()).getSeconds();
        if (this.seconds < 10) this.seconds = "0" + this.seconds;
        const time = `${this.hours}:${this.minutes}:${this.seconds}`;
        htmlElements.watch.innerHTML = time;
    }

    removeButton() {
        htmlElements.stopBtn.setAttribute("hidden", "");
        htmlElements.startBtn.setAttribute("hidden", "");
        htmlElements.resetBtn.setAttribute("hidden", "");
    }

}