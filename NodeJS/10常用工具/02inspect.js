/*
 * @Author: dyh 
 * @Date: 2017-12-21 15:17:25 
 * @Last Modified by:   dyh 
 * @Last Modified time: 2017-12-21 15:17:25 
 */
let util=require('util');
function person()
{
    this.name='Elena';
    this.toString=function(){
        return this.name;
    }
}
let obj=new person();
console.log( util.inspect(obj));
console.log(util.inspect(obj,true));