console.log('\n--------------------log--------------------------')
console.log('Hello world'); 
console.log('byvoid%diovyb'); 
console.log('byvoid%diovyb', 1991); 
console.log('\n--------------------info--------------------------')
console.info('Hello world'); 
console.info('byvoid%diovyb'); 
console.info('byvoid%diovyb', 1991); 
console.log('\n--------------------error--------------------------')
console.error('Hello world'); 
console.error('byvoid%diovyb'); 
console.error('byvoid%diovyb', 1991); 
console.log('\n--------------------warn--------------------------')
console.warn('Hello world'); 
console.warn('byvoid%diovyb'); 
console.warn('byvoid%diovyb', 1991); 
console.log('\n--------------------dir--------------------------')
console.dir();
console.log('\n--------------------tiem|timeEnd--------------------------')
console.time('用时')
for (var index = 0; index < 1000; index++) {
    var element =index;
    
}
console.timeEnd('用时')

console.log('\n--------------------trace--------------------------')
console.trace('My');
function sayHi()
{
    console.trace('My');
}
sayHi();
console.log('\n--------------------assert--------------------------')
let num=3;
console.assert(num==2,'Elena');

