let hours, minutes, seconds, timerId
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
        self = this;
        this.template = template;
        // this.hours = hours   
        // this.minutes = minutes
        // this.seconds = seconds
        // this.timerId = timerId
    }

    self;
    hours = 0;
    minutes = 0;
    seconds = 0;
    timerId;
    render() {
        clearInterval(timerId);
        let hours = '0';
        let minutes = '0';
        let seconds = '0';
        const output = this.template
            .replace('h', hours)
            .replace('m', minutes)
            .replace('s', seconds);
        this.output = output
        htmlElements.watch.innerHTML = output;
        this.updateStopWatch();
    }



    runStopWatch() {
        clearInterval(self.timerId);
        self.timerId = setInterval(self.updateStopWatch.bind(self), 1000);
    }

    stopStopWatch() {
        clearInterval(this.timerId);
    }

    resetStopWatch() {
        clearInterval(this.timerId);
        this.render();
    }

    updateStopWatch() {
        console.log((this))
        this.seconds++;
        if (this.seconds === 60) {
            this.seconds = 0;
            this.minutes++;
            if (this.minutes === 60) {
                this.minutes = 0;
                this.hours++;
            }
            if (this.hours === 24) {
                this.hours = 0;
            }
        }
        if (this.hours < 10 && this.hours.length !== 2) this.hours = "0" + this.hours;
        if (this.minutes < 10 && this.minutes.length !== 2) this.minutes = "0" + this.minutes;
        if (this.seconds < 10 && this.seconds.length !== 2) this.seconds = "0" + this.seconds;
        const time = `${this.hours}:${this.minutes}:${this.seconds}`;
        htmlElements.watch.innerHTML = time;
    }
}