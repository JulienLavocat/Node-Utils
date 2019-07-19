const WeightedList = require("./index").lists.WeightedList;

const wl = new WeightedList();

wl.addItem({}, 10);

console.log(wl.get());

console.log(wl.getEntries());

