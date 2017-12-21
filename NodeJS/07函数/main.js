/*
 * @Author: dyh 
 * @Date: 2017-12-21 14:09:18 
 * @Last Modified by: dyh
 * @Last Modified time: 2017-12-21 14:13:12
 */
/**
 * 打招呼
 * @param {String} name 
 */
function sayHi(name) {
    console.log('Hi,' + name);
};

/**
 * 问候
 * @param {Function} fun 函数
 * @param {String} name 姓名
 */
function Greeting(fun, name) {
    fun(name);
}

// 命名函数
Greeting(sayHi, 'Elena');

// 匿名函数
Greeting(function (name) {
    console.log('Hi,' + name);
}, 'Catherine');