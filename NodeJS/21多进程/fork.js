const fs = require('fs'),
    child_process = require('child_process');

for (let index = 0; index < 3; index++) {
    let workerProcess = child_process.fork('support.js', [index]);

    workerProcess.on('close', function (code, signal) {
        console.log('子进程已退出，退出码 ' + code);
    })

}