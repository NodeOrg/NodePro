/*
 * @Author: dyh 
 * @Date: 2017-12-21 15:20:25 
 * @Last Modified by: dyh
 * @Last Modified time: 2017-12-21 15:21:13
 */
let fs=require('fs'),util=require('util');
console.time('同步');
// 同步读取数据
let data=fs.readFileSync('11文件系统/input.txt');//d://WorkTest/NodeJS/11文件系统/input.txt
console.log('同步读取的数据：'+data.toString());
console.timeEnd('同步');

console.time('异步');
// 异步读取数据
fs.readFile('11文件系统/input.txt',function(error,data){//d://WorkTest/NodeJS/11文件系统/input.txt
    if(error){
        console.error(error);
    }
    console.log('异步读取的数据：'+data.toString());
});
console.timeEnd('异步');