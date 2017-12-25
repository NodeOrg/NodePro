const fs = require('fs'),
    child_process = require('child_process');

for (let index = 0; index < 3; index++) {
    let workerProcess = child_process.exec('node 21多进程/support.js ' + index, //exec('node 21多进程/support.js ' + index,
        function (error, stdout, stderr) {
            if (error) {
                console.error(error.stack);
                console.error("Error Code：" + error.code);
                console.error('Signal received: ' + error.signal);
            }
            console.log("stdout:" + stdout);
            console.log("stderr:" + stderr);
        })
    workerProcess.on('exit', function (code) {
        console.log('子进程已退出，退出码 ' + code);
    });
}