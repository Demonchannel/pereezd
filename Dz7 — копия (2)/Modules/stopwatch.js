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

export class StopWatchStart {
    constructor({ template }) {
        this.template = template;
        this.hours = hours
        this.minutes = minutes
        this.seconds = seconds
        this.timerId = timerId
    }
    render() {
        clearInterval(timerId);
        const time = this.template = `00:00:00`;
        this.template = template
        htmlElements.watch.innerHTML = template;
        hours = 0;
        minutes = 0;
        seconds = 0;
        this.showButton();
        this.updateStopWatch();
    }

    showButton() {
        htmlElements.stopBtn.removeAttribute("hidden");
        htmlElements.startBtn.removeAttribute("hidden");
        htmlElements.resetBtn.removeAttribute("hidden");
        htmlElements.startBtn.addEventListener("click", this.runStopWatch);
        htmlElements.stopBtn.addEventListener("click", this.stopStopWatch);
        htmlElements.resetBtn.addEventListener("click", this.resetStopWatch);
    }

    runStopWatch() {
        timerId = setInterval(this.updateStopWatch, 1000);
    }

    stopStopWatch() {
        clearInterval(timerId);
    }

    resetStopWatch() {
        clearInterval(timerId);
        this.render();
    }

    updateStopWatch() {
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
}