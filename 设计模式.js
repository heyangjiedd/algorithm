// 简单工厂模式
let factory = function (name) {
    function user(name) {
        this.name = name
    }

    return new user(name)
}
let a = factory('你好')
// console.log(a)
//工厂方法模式

//发布订阅者模式
function f() {
    this.list = [];
    this.listen = (fn) => {
        this.list.push(fn)
    }
    this.publish = () => {
        while (this.list.length){
            this.list.shift()();
        }
    }
}
const p = new f();
p.listen(() => {
    console.log(1)
})
p.listen(() => {
    console.log(2)
})
p.listen(() => {
    console.log(3)
})
p.publish();