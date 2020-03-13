/*
实现一个lazyman
*/
function _LazyMan(aaa) {
    this.tasks = [];
    const fn = ()=>{
        console.log(aaa);
        this.next()
    }
    this.tasks.push(fn)
    setTimeout(()=>{
        this.next()
    },)
}
_LazyMan.prototype.next = function(aaa){
    const fn = this.tasks.shift();
    fn && fn();
}
_LazyMan.prototype.eat = function(aaa){
    const fn = ()=>{
        console.log(aaa);
        this.next();
    }
    this.tasks.push(fn)
    return this
}
_LazyMan.prototype.sleep = function(aaa){
    const fn = ()=>{
        setTimeout(()=>{
            console.log(aaa);
            this.next();
        },aaa)
    }
    this.tasks.push(fn)
    return this
}

function LazyMan(name){
    return new _LazyMan(name);
}

LazyMan('Hank').eat('dinner').eat('supper')
LazyMan('Hank').eat('supper').sleep(3000)
LazyMan('Hank').sleep(3000).eat('supper')
