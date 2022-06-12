const client = require('../api');

test('test currencies total count', () => {
    return client.currencies_total_count().then(data => {
      expect(data).toEqual(expect.any(Number));
    });
  });