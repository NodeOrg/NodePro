/*
 * @Author: dyh 
 * @Date: 2017-12-21 15:19:27 
 * @Last Modified by:   dyh 
 * @Last Modified time: 2017-12-21 15:19:27 
 */
let util=require('util');

console.log(util.isRegExp(/some regexp/));
  // true
  console.log(util.isRegExp(new RegExp('another regexp')));
  // true
  console.log(util.isRegExp({}));
  // false


