const client = require('../api');

test('test of getting all currencies', () => {
    return client.all_currencies().then(data => {
      expect(Array.isArray(data)).toBe(true)
    });
  });