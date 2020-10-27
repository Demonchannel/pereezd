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
export class Clock {
    constructor({ template }) {
        this.template = template;
    }

    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        const output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        this.output = output
        htmlElements.watch.innerHTML = output

    }

    stop() {
        clearInterval(this.timer);
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}