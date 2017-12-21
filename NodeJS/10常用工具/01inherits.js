/*
 * @Author: dyh 
 * @Date: 2017-12-21 15:14:26 
 * @Last Modified by:   dyh 
 * @Last Modified time: 2017-12-21 15:14:26 
 */
let util = require('util');

function Base() {
    this.name = 'base';
    this.base = 2017;
    this.sayHi = function () {
        console.log('Hello ' + this.name);
    }
};
Base.prototype.showName = function () {
    console.log(this.name);
}

function Sub() {
    this.name = 'Elena';
}

util.inherits(Sub, Base);
let objBase = new Base();
objBase.sayHi();
objBase.showName();
console.log(objBase);

// 注意：Sub 仅仅继承了Base 在原型中定义的函数，而构造函数内部创造的 base 属 性和 sayHello 函数都没有被 Sub 继承。
// 同时，在原型中定义的属性不会被console.log 作 为对象的属性输出。
let objSub = new Sub();
objSub.showName();
console.log(objSub);