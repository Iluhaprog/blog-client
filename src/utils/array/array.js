/**
 * Remove last element if condition return true
 * @param {Array} array
 * @param {function} condition
 * @return {array}
 */
export function removeLast(array, condition = () => true) {
  if (condition(array)) {
    return array.slice(0, array.length - 1);
  }
  return [...array];
}
