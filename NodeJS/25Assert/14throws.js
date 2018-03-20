const assert = require('assert');
/*
assert.throws(
    () => {
        throw new Error('错误信息');
    },
    Error
);
*/

/*
assert.throws(
    () => {
      throw new Error('错误信息');
    },
    /错误/
  );
  */

assert.throws(
    () => {
        throw new Error('错误信息');
    },
    function (err) {
        if ((err instanceof Error) && /错误/.test(err)) {
            return true;
        }
    },
    '不是期望的错误'
);
