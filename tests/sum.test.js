const { sum } = require('../src/sum');

test('sum of two numbers', () => {
  expect(sum(1, 2)).toBe(3);
});
