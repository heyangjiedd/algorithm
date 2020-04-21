var x = 'window';

function f() {
    x = 'f';

    function f1() {
        x = 'index'
        return new Function('return x')
    }

    return f1();
}

// console.log(f()());

function Foo() {
    getName = function () {
        console.log(1);
    }
    return this
}

Foo.getName = function () {
    console.log(2);
}
Foo.prototype.getName = function () {
    console.log(3);
}
var getName = function () {
    console.log(4);
}

function getName() {
    console.log(5);
}

// Foo.getName();//2
// getName();//4
// Foo().getName();//1
// getName();//1
// new Foo.getName()//2
// new Foo().getName()//3
// new new Foo().getName()//3
//原型实例
class b {
    constructor(props) {

    }

    handler = () => {
        return this
    }
    c = 12
    b = function () {
        console.log(2342)
    }

    a() {
        console.log(this.handler())
    }
}

console.log(b)
console.log(new b())
