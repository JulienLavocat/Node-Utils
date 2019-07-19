require("chai").should();
const WeightedList = require("../index").lists.WeightedList;

describe("Weighted list", () => {

	const wl = new WeightedList();

	for(let i = 0; i < 10; i++)
		wl.addItem(i, i * 2);

	it("Should return an accumulated weight of 90", () => wl.getAccumulatedWeights().should.equals(90));
	it("Should have 10 entries", () => wl.getEntries().length.should.equals(10));
	it("Should get 10 random integer numbers", () => {

		const results = [];
		for(let i = 0; i < 10; i++)
			results.push(wl.get());

		let areNumbers = true;
		results.forEach((value) => {
			if(typeof(value) !== "number")
				areNumbers = false;
		});

		areNumbers.should.be.true;

	});
	it("Should clear the list", () => {
		wl.clear();
		wl.getAccumulatedWeights().should.equals(0);
		wl.getEntries().length.should.equals(0);
	});

	//TODO Check that probabilities are good

});