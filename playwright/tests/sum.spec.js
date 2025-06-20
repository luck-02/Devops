const { test, expect } = require('@playwright/test');
const { sum } = require('../../src/sum');

test('sum function', async () => {
  expect(sum(5, 7)).toBe(12);
});
