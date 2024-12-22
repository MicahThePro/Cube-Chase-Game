class Timer {
    constructor(timeLimit) {
        this.timeLimit = timeLimit;
        this.currentTime = timeLimit;
        this.interval = null;
    }

    start(callback) {
        this.currentTime = this.timeLimit;
        this.interval = setInterval(() => {
            this.currentTime--;
            if (this.currentTime <= 0) {
                this.stop();
                callback();
            }
        }, 1000);
    }

    stop() {
        clearInterval(this.interval);
        this.interval = null;
    }

    reset() {
        this.currentTime = this.timeLimit;
    }

    getCurrentTime() {
        return this.currentTime;
    }
}

export default Timer;