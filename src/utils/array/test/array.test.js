import * as array from '../array';

test('removeLast', () => {
  const testArray = [1, 2, 3, 4];
  const condition1 = (arr) => arr.length >= 3;
  const condition2 = (arr) => arr.length <= 3;
  const expectArray1 = array.removeLast(testArray, condition1);
  const expectArray2 = array.removeLast(testArray, condition2);

  expect(expectArray1).toEqual([1, 2, 3]);
  expect(expectArray2).toEqual(testArray);
});
