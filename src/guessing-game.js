class GuessingGame {
    constructor() {
        this.low = 0;
        this.high = 0;
        this.mid = 0;
    }

    setRange(min, max) {
        this.low = min;
        this.high = max;
    }

    guess() {
        return (
            this.mid = Math.ceil((this.low + this.high) / 2)
        );
    }

    lower() {
        this.setRange(this.low, this.mid);
    }

    greater() {
        this.setRange(this.mid, this.high);
    }
}

module.exports = GuessingGame;
