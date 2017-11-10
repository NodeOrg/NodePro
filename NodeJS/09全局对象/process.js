
console.log('\n--------------------exit--------------------------')
process.on('exit',function(code){
  // 以下代码永远不会执行
  setTimeout(function() {
    console.log("该代码不会执行");
  }, 0);
  
  console.log('退出码为:', code);
});
console.log("程序执行结束");


console.log('\n--------------------stdout--------------------------')
process.stdout.write('Hello World\n');

console.log('\n--------------------argv--------------------------')
// 通过参数读取
process.argv.forEach(function(val, index, array) {
    console.log(index + ': ' + val);
 });
 
console.log('\n--------------------execPath--------------------------')
 // 获取执行路径
console.log(process.execPath);

console.log('\n--------------------platform--------------------------')
// 平台信息
console.log(process.platform);


console.log('\n--------------------pid--------------------------')
// 平台信息
console.log(process.pid);


console.log('\n--------------------title--------------------------')
// 平台信息
console.log(process.title);

console.log('\n--------------------cwd()--------------------------')
// 输出当前目录
console.log('当前目录: ' + process.cwd());

console.log('\n--------------------memoryUsage()--------------------------')
// 输出内存使用情况
console.log(process.memoryUsage());


