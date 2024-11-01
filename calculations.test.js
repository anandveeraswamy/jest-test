const {sum, sub} = require('./calculations');

describe('testing add and sub', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
  
  test('sub 2 - 1 to equal 1', () => {
    expect(sub(2, 1)).toBe(1);
  });  
});

