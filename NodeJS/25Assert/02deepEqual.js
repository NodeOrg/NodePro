const assert = require('assert');
const obj1 = {
    a: {
        b: 1
    }
};
const obj2 = {
    a: {
        b: 2
    }
};
const obj3 = {
    a: {
        b: 1
    }
};
const obj4 = Object.create(obj1);

// deepEequal ：等于运算符
//assert.deepEqual(obj1, obj1);

//assert.deepEqual(obj1, obj2,'flag');

//assert.deepEqual(obj1, obj3,'flag');

assert.deepEqual(obj1, obj4,'flag');