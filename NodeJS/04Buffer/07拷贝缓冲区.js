let buffer1 = new Buffer('ABCD');
let buffer2 = new Buffer(4);
let result  = buffer1.copy(buffer2);
console.log(buffer2.toString()); 