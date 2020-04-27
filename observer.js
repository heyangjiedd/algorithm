//使用 Set Proxy Reflect
let observerList = new Set();
let observer = obj => new Proxy(obj, {
    set: (target, p, value, receiver) => {
        let result = Reflect.set(target, p, value, receiver);
        observerList.forEach(item => item(target));
        return result;
    }
});
observerList.add(function (target) {
    console.log(1, target)
})
observerList.add(function (target) {
    console.log(2, target)
})
let objj = observer({a: 1})
objj.a = 3;
console.log(objj)