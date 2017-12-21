let hello=require('./helloworld');
hello.hello();
hello.world('Elena');
// ===========================================================================
let person=require('./person');
var p=new person();
p.setName('Catherine');
p.sayHi();
