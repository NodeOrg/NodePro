/*
 * @Author: dyh 
 * @Date: 2017-12-22 14:56:38 
 * @Last Modified by: dyh
 * @Last Modified time: 2017-12-22 15:07:20
 */
const dns = require('dns');
dns.lookup('www.github.com', function (err, address, family) {
    console.log('IP地址：' + address);
    dns.reverse(address, function (err, hostnames) {
        if (err) {
            return console.error(err.stack);
        }
        console.log('反向解析 ' + address + ': ' + JSON.stringify(hostnames));
    });

    dns.resolveCname('www.github.com', function (err, addresses) {
        if (err) {
            return console.error(err.stack);
        }
        console.log('resolveCname:' + JSON.stringify(addresses));
    });

    dns.resolveNs('www.github.com', function (err, addresses) {
        if (err) {
            return console.error(err.stack);
        }
        console.log('resolveNs:' + JSON.stringify(addresses));
    });

});