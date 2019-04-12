//707829217
//选择出所有质数
function allPrimeNumber(num) {
    let result = [];
    var i = 2;
    for(;i<=num;i++){
        if(isPrimeNumber(i)){
            result.push(i)
        }
    }
    return result;
}
// 判断数字是否质数
function isPrimeNumber(num) {
    var i = 2
    for(;i<=Math.sqrt(num);i++){
        if(num % i === 0){
            return false
        }
    }
    return true
}
//求积
function primeNumberSum(num){
    let allNumber = allPrimeNumber(num);
    var i = 0,j = 0;
    for(;i<=allNumber.length;i++){
        for(;j<=allNumber.length;j++){
            if(allNumber[i]*allNumber[j]===num){
                return i<j?[allNumber[i],allNumber[j]]:[allNumber[j],allNumber[i]]
            }
        }
    }
}
function test(num){
    return new Array(num).fill(undefined).map(function (item) {
        return num--
    });
}
console.log(test(707829217))
// 循环太多，搞不成，改天想个办法
// console.log(primeNumberSum(707829217))