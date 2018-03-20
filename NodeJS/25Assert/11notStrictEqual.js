const assert = require('assert');

assert.notStrictEqual(1, 2);
// 测试通过。

assert.notStrictEqual(1, 1);
// 抛出 AssertionError: 1 !== 1

assert.notStrictEqual(1, '1');
// 测试通过。