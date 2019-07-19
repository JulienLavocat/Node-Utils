class WeightedList {

    constructor() {
        this.accumulatedWeights = 0;
        this.entries = [];
    }

    addItem(item, weight) {
        this.accumulatedWeights += weight;
        this.entries.push({
            item: item,
            accumulatedWeight: this.accumulatedWeights
        });
    }

    get() {
        const r = Math.random() * this.accumulatedWeights;
        return this.entries.find(entry => entry.accumulatedWeight >= r).item;
    }

    getAccumulatedWeights() {
        return this.accumulatedWeights;
    }

    getEntries() {
        return this.entries;
    }

}

module.exports = WeightedList;