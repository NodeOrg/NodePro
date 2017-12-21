/*
 * @Author: dyh 
 * @Date: 2017-12-21 11:54:38 
 * @Last Modified by: dyh
 * @Last Modified time: 2017-12-21 14:02:46
 */

/**
 * Person类
 */
function person() {
    let name;
    let age;
    /**
     * 设置姓名
     * @param {String} name 姓名
     */
    this.setName = function (name) {
        this.name = name
    };
    /**
     * 打招呼
     */
    this.sayHi = function () {
        console.log('Hi,' + this.name);
    };
    /**
     * 显示信息
     * @param {Number} id 编号
     * @param {String} message 信息
     */
    this.showMsg = function (id, message) {
        console.log(id + ":" + message);
    }
}
module.exports = person;