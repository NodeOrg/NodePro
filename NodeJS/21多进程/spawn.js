const fs = require('fs'),
    child_process = require('child_process');

for (let index = 0; index < 3; index++) {
    let workerProcess = child_process.spawn('node', ['support.js', index]);

    workerProcess.stdout.on('data', function (chunk) {
        console.log('stuout:' + chunk);
    });

    workerProcess.stderr.on('data', function (chunk) {
        console.log('stderr:' + chunk);
    });

    workerProcess.on('close', function (code, signal) {
        console.log('子进程已退出，退出码 ' + code);
    })

}