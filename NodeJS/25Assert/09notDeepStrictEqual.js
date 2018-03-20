const assert = require('assert');

assert.notDeepEqual({ a: 1 }, { a: '1' });
// 抛出 AssertionError: { a: 1 } notDeepEqual { a: '1' }

assert.notDeepStrictEqual({ a: 1 }, { a: '1' });
// 测试通过。