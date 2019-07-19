declare namespace utils {
  var lists: Lists;
}

interface Lists {
  /**
   * A list that get a random-weighted item
   */
  WeightedList: WeightedList;

  /**
   * A list that add elements in batches of size n
   */
  BatchedList: BatchedList;
}

interface WeightedList {
  /**
   * Construct a new WeightedList instance
   */
  new (): WeightedList;

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
   * Clear the list of its content
   */
  clear(): void;

  /**
   * Return the accumulated wieghts of the items in the list
   */
  getAccumulatedWeights(): Number;

  /**
   * Return the internal entries
   */
  getEntries(): any[];
}

interface BatchedList {
  /**
   * Construct a new BatchedList instance with batchSize elements per batch
   * @param {Number} batchSize
   */
  new (batchSize: Number): BatchedList;

  /**
   * Add a single element to the list
   * @param {any} item Item to add
   */
  add(item: any): void;
  /**
   * Add an array to the list
   * @param {any[]} items Array to add
   */
  addAll(items: any[]): void;

  /**
   * Get the first batch from the list
   */
  get(): any[];
  /**
   * Get all batches in list
   */
  getAll(): any[any[]];

  /**
   * Clear the batch of its content
   */
  clear(): void;

  /**
   * Return the current batch
   */
  currentBatch(): any[];
  /**
   * Return the total number of items in the list
   */
  getItemsCount(): Number;
  /**
   * Return the total number of batches
   */
  getBatchesCount(): Number;
}

export = utils;
