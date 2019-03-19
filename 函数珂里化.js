// 实现一个function sum 达到以下目的
// sum(1,2,3,4,5).valueOf()  // 15
// sum(1,2,3,4)(5).valueOf() // 15
// sum(1,2,3)(4)(5).valueOf() //15
// sum(1,2)(3)(4)(5).valueOf()//15
// sum(1,2)(3,4)(5).valueOf() //15
function sum() {
    let argu = [...arguments];
    function fn(...arr) {
        argu = argu.concat(arr);
        return fn
    }
    fn.valueOf = function () {
        return argu.reduce((total, item) => {
            return total + item
        }, 0)
    }
    return fn
}
function sum1() {
    let argu = [...arguments];
    return function fn(...arr) {
        if(arr.length === 0){
            return argu.reduce((total, item) => {
                return total + item
            }, 0);
        }else{
            argu = argu.concat(arr);
            return fn;
        }
    }
}
console.log(sum1(1,2,3,4,5)())  // 15
console.log(sum1(1,2,3,4)(5)()) // 15
console.log(sum1(1,2,3)(4)(5)()) //15
console.log(sum1(1,2)(3)(4)(5)())//15
console.log(sum1(1,2)(3,4)(5)()) //15