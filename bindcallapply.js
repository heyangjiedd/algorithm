/*
实现bind,
call,
apply*/
const s = Symbol('hhh')
Function.prototype.myBind = function(obj){
    obj[s] = this
    return function F() {
        if (this instanceof F) {
            return new obj[s](...arguments)
        }
        obj[s](...arguments)
    }
}
function fn1() {
    console.log(this)
}
let myfn = fn1.myBind({a:'this'})
// myfn(1,1,2,54);
// new myfn(1,1,2,54)

Function.prototype.myCall = function(){
    let args = [...arguments]
    let obj = args.shift();
    obj[s] = this;
    return obj[s](...args)
}
// fn1.myCall({b:'this'},2,4,5,6)
Function.prototype.myApply = function(){
    let args = [...arguments]
    let obj = args.shift();
    obj[s] = this;
    return obj[s](...args[0])
}
// fn1.myApply({b:'this'},[2,4,5,6])