/*
 * @Author: dyh 
 * @Date: 2017-12-21 15:18:59 
 * @Last Modified by: dyh
 * @Last Modified time: 2017-12-21 21:54:38
 */
let util = require('util');


console.log(util.isArray([]));

console.log(util.isArray(new Array()));

console.log(util.isArray({}));