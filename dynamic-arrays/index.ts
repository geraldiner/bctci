/**
 * DynamicArray
 *
 * append(x) - adds x to end
 * get(i) - returns element at i
 * set(i, x) - sets element at i to x
 * size() - returns the size of the array
 * pop_back() - removes and returns the last element
 * pop(i) - removes and returns the element at i, shift th following elements to the left
 * contains(x) - returns boolean if x exists in array
 * insert(i, x) - add x at i, shift following elements to the right
 * remove(x) - removes and returns first instance of x, shift following elements to the left
 */

class DynamicArray {
  capacity: number;
  _size: number;
  fixed_array: Array<any>;

  constructor() {
    this.capacity = 10;
    this._size = 0;
    this.fixed_array = [];
  }

  size() {
    return this._size;
  }
}

const d = new DynamicArray();
console.log(d.size());
