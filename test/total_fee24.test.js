const client = require('../api');

test('test of getting all currencies', () => {
    return client.total_fee24().then(data => {
        expect(data).toEqual(expect.any(Number));
    });
  });