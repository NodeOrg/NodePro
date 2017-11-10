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