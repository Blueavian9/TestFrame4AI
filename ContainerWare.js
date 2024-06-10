/**
 * The `containerWare` array stores a series of key-value pairs.
 * @type {Array.<{key: string, value: string}>}
 */
let containerWare = [];

/**
 * Adds an item to the `containerWare` array.
 * If an item with the same key already exists, its value is updated.
 * If no item with the given key exists, a new item is added.
 * @param {string} key - The key of the item to add or update.
 * @param {string} value - The value of the item to add or update.
 */
function addItem(key, value) {
  const existingItem = containerWare.find((item) => item.key === key);
  if (existingItem) {
    existingItem.value = value;
  } else {
    containerWare.push({ key, value });
  }
}

/**
 * Deletes an item from the `containerWare` array based on its key.
 * @param {string} key - The key of the item to delete.
 */
function deleteItem(key) {
  containerWare = containerWare.filter((item) => item.key !== key);
}

/**
 * Retrieves the value of an item from the `containerWare` array based on its key.
 * @param {string} key - The key of the item to retrieve.
 * @returns {string|undefined} The value of the item if found, or `undefined` if not found.
 */
function getItem(key) {
  const item = containerWare.find((item) => item.key === key);
  return item ? item.value : undefined;
}

/**
 * Checks if an item with the given key exists in the `containerWare` array.
 * @param {string} key - The key to check for existence.
 * @returns {boolean} `true` if an item with the given key exists, `false` otherwise.
 */
function exists(key) {
  return containerWare.some((item) => item.key === key);
}

// Export the functions and containerWare array
module.exports = {
  addItem,
  deleteItem,
  getItem,
  exists,
  containerWare,
};
