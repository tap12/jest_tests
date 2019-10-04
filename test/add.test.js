import sum from '../src/add';

// const sum = require('../src/add');



test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});