let buffer = new Buffer(26);
for (var index = 0; index < buffer.length; index++) {
    buffer[index] = index + 97;
}
console.log('写入缓冲区字节：' + buffer.length);
console.log('数据：' + buffer.toString('ascii'));
console.log('数据：' + buffer.toString('ascii', 0, 6).toUpperCase());
console.log('数据：' + buffer.toString('utf-8', 0, 6).toUpperCase());
console.log('数据：' + buffer.toString(undefined, 0, 6).toUpperCase());