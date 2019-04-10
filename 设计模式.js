// 简单工厂模式
let factory = function (name) {
    function user(name) {
        this.name = name
    }
    return new user(name)
}
let a = factory('你好')
console.log(a)
//工厂方法模式

