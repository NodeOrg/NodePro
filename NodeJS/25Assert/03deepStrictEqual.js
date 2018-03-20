const assert = require('assert');
//assert.deepEqual({ a: 1 }, { a: '1' }); // deepEqual:等于运算符，该示例测试通过，没有错误

//assert.deepStrictEqual({ a: 1 }, { a: '1' }); // 验证是否全等于，会报错，因为1!=='1'

const date = new Date();
const object = {};
const fakeDate = {};

Object.setPrototypeOf(fakeDate,Date.prototype);

//assert.deepEqual(object, fakeDate);
//assert.deepStrictEqual(object, fakeDate);

//assert.deepEqual(date, fakeDate);
// 测试通过，不测试类型标签。
//assert.deepStrictEqual(date, fakeDate);
// 抛出 AssertionError: 2017-03-11T14:25:31.849Z deepStrictEqual Date {}
// 因为类型标签不同。


//assert.deepStrictEqual(new Number(1), new Number(2));
// 测试不通过，因为数值对象包装器里面的数值也会被比较。
//assert.deepStrictEqual(new String('foo'), Object('foo'));
// 测试通过，因为这两个对象和里面的字符串都是相同的

