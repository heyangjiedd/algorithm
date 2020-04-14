function recursion(n) {
    if (n > 1) {
        if(n === 2){
            return `${n- 1}*${n}`
        }
        return recursion(n - 1)+`+${n- 1}*${n}`
    }
}
// console.log(recursion(9))

