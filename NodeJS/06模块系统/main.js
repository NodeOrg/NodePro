/*
 * @Author: dyh 
 * @Date: 2017-12-21 11:54:34 
 * @Last Modified by: dyh
 * @Last Modified time: 2017-12-21 14:01:21
 */
let hello = require('./helloworld');
hello.hello();
hello.world('Elena');
// ===========================================================================
let person = require('./person');
var p = new person();
p.setName('Catherine');
p.sayHi();
p.showMsg(1, "我来了");