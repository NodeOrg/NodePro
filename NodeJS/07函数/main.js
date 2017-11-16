function sayHi(name) {
    console.log('Hi,' + name);
};

function Greeting(fun, value) {
    fun(value);
}

// 命名函数
Greeting(sayHi, 'Elena');

// 匿名函数
Greeting(function(name) {
    console.log('Hi,' + name);
}, 'Catherine');