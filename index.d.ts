declare namespace utils {
	var lists: Lists;
}

interface Lists {
	/**
	 * A list that get a random-weighted item
	 */
	WeightedList: WeightedList
}

interface WeightedList {

	/**
	 * Construct a new WeightedList instance
	 */
	new ():WeightedList

	/**
	 * Add an item to the list
	 * @param item Item to add in the list
	 * @param weight Weight of the item, could be any real numbers
	 */
	addItem(item: any, weight: Number): void;

	/**
	 * Return a random item from the list
	 */
	get(): any;

	/**
	 * Return the accumulated wieghts of the items in the list
	 */
	getAccumulatedWeights(): Number;

	/**
	 * Return the internal entries
	 */
	getEntries(): any[];

}

/**
 * A list that add elements in batch containing n-elements.
 */
interface BatchedList {

}

export = utils;