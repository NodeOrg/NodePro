/*
 * @Author: dyh 
 * @Date: 2017-12-22 14:07:38 
 * @Last Modified by:   dyh 
 * @Last Modified time: 2017-12-22 14:07:38 
 */
let path = require('path'),
  util = require('util');

console.log("delimiter:" + path.delimiter);
console.log(process.env.PATH);
console.log("sep:" + path.sep);
console.log("posix:" + util.inspect(path.posix));
console.log("win32:" + util.inspect(path.win32));

console.log("basename:" + path.basename('C:\\temp\\myfile.html'));
console.log("basename:" + path.win32.basename('C:\\temp\\myfile.html'));
console.log("basename:" + path.basename('C:\\temp\\myfile.html', '.html'));
console.log("basename:" + path.posix.basename('C:\\temp\\myfile.html'));
console.log("basename:" + path.posix.basename('C:\\temp\\myfile.html', '.html'));

console.log('normalize:' + path.normalize('C:\\temp\\myfile.html'));

console.log('join:' + path.join('C:\\temp\\myfile', 'shan.html'));
console.log('join: ' + path.join('/test', 'test1', '2slashes/1slash', 'tab', '..'));

console.log('resolve:' + path.resolve('main2.js'));
console.log(path.resolve('/2', '/3', '4'));
console.log(path.resolve());

console.log('isAbsolute:' + path.isAbsolute('./main.js'));
console.log('isAbsolute:' + path.isAbsolute('/main.js'));
console.log('isAbsolute:' + path.isAbsolute('D:/main/..'));

console.log(path.parse('/home/user/dir/file.txt'));

console.log(path.extname('index.htm'));

console.log(path.dirname('/text/2/4/6/8'));


console.log(path.format({
  root: '/text',
  dir: '/test/2/3',
  base: '4.txt',
  ext: '.txt',
  name: '4'
}));
console.log(path.format({
  dir: '/test/2/3',
  base: '4.txt'
}));
console.log(path.format({
  dir: 'C:\\path\\dir',
  base: 'file.txt'
}));

console.log(path.win32.parse('D:/test/2/e/4.txt'));

console.log(path.relative('/test/2/3/4.txt', '/test/2/5/6.html'));

console.log(path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif'));