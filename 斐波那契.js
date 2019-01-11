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

// console.log(f())
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
function* f1(index = 1, len = 10) {
    if (index < len) {
        let result =  yield index
        yield* f1(index+result)
    }
}

console.log([...f1(1)])
