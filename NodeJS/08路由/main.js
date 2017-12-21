/*
 * @Author: dyh 
 * @Date: 2017-12-21 14:19:21 
 * @Last Modified by: dyh
 * @Last Modified time: 2017-12-21 14:21:21
 */
let router = require('./router'),
    server = require('./server');
server.start(router.router);