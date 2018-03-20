const assert = require('assert');

//assert.fail(1, 2, undefined, '>');
// 抛出 AssertionError [ERR_ASSERTION]: 1 > 2

//assert.fail(1, 2, '错误信息');
// 抛出 AssertionError [ERR_ASSERTION]: 错误信息

//assert.fail(1, 2, '错误信息', '>');
// 抛出 AssertionError [ERR_ASSERTION]: 错误信息
// 上面两个例子的 `actual` 参数、`expected` 参数与 `operator` 参数不影响错误消息。

//assert.fail();
// 抛出 AssertionError [ERR_ASSERTION]: Failed

//assert.fail('错误信息');
// 抛出 AssertionError [ERR_ASSERTION]: 错误信息

//assert.fail('a', 'b');
// 抛出 AssertionError [ERR_ASSERTION]: 'a' != 'b'

function suppressFrame() {
    assert.fail('a', 'b', undefined, '!==', suppressFrame);
}
suppressFrame();