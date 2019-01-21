//传统方法生成
function f(start = 0, len = 10, arr = []) {
    while (start < len) {
        if (start <= 1) {
            arr.push(start + 1)
        } else {
            arr.push(arr[start - 1] + arr[start - 2])
        }
        start++;
    }
    return arr
}
console.log(new Date())
console.log(f())
console.log(new Date())

//迭代器生成
let obj = {
    [Symbol.iterator]() {
        let prepre = 0, pre = 1, len = 1000;
        return {
            [Symbol.iterator]() {
                return this;
            },
            next() {
                let cur = prepre;
                prepre = pre;
                pre = cur + prepre;
                if (pre < len) {
                    return {value: pre, done: false};
                } else {
                    return this.return(pre);
                }
            },
            return(v) {
                return {value: v, done: true}
            }
        }
    }
}
// console.log([...obj])
// 生成器生成
function* f1(index = 1,preindex = 0, len = 100) {
    if (index < len) {
        let curr = index;
        index = index+preindex
        yield index;
        preindex = curr;
        yield* f1(index,preindex)
    }
}
console.log(new Date())
console.log([...f1(1,0)])
console.log(new Date())
