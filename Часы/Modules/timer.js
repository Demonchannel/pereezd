let hours, minutes, seconds, timerId;

const htmlElements = {
    startBtn: document.querySelector(".container-timer .buttons button.start"),
    stopBtn: document.querySelector(".container-timer .buttons button.stop"),
    resetBtn: document.querySelector(".container-timer .buttons button.reset"),
    watch: document.querySelector(".container-timer .watch"),
    timer: document.querySelector("container .links .timer"),
};

export class Timer {
    constructor({ template }) {
        this.template = template;
        this.hours = hours
        this.minutes = minutes
        this.seconds = seconds
        this.timerId = timerId
    }
    render() {
        clearInterval(timerId);
        const time = `00:05:00`;
        htmlElements.watch.innerHTML = time;
        hours = 0;
        minutes = 5;
        seconds = 0;
        this.showButton2();
    }

    runStopWatch2() {
        timerId = setInterval(this.updateStopWatch2, 1000);
    }

    stopStopWatch2() {
        clearInterval(this.timerId);
    }

    resetStopWatch2() {
        clearInterval(this.timerId);
        this.render();
    }

    updateStopWatch2() {
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
}