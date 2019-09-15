class BatchedList {

    constructor(batchSize) {
		this.batches = [[]];
		this.batchsCount = 1;
		this.itemsCount = 0;
		this.batchSize = batchSize;
	}

	add(item) {
		if(this.currentBatch().length === this.batchSize) {
			this.batchsCount++;
			this.batches.push([item]);
		} else {
			this.currentBatch().push(item);
		}
		this.itemsCount++;
	}
	addAll(items) {
		for(let i = 0; i < items.length; i++)
			this.add(items[i]);
	}

	get() {
		const batch = this.batches.pop();
		this.itemsCount -= batch.length;
		this.batchsCount--;
		return batch;
	}
	getAll() {
		const batched = [];
		while(this.batchsCount > 0) {
			batched.push(this.get());
		}
		return batched;
	}

	clear() {
		this.batches = [[]];
		this.batchsCount = 1;
		this.itemsCount = 0;
	}

	currentBatch() {
		return this.batches[this.batchsCount - 1];
	}
	getItemsCount() {
		return this.itemsCount;
	}
	getBatchesCount() {
		return this.batchsCount;
	}

}

module.exports = BatchedList;