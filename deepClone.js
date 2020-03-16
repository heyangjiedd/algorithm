/*
* deepclone
* */
function deepclone(obj) {
    if (Array.isArray(obj)) {
        return obj.map(deepclone)
    } else if (Object.prototype.toString.call(obj) === '[object Object]') {
        let result = {}
        for (let i in obj) {
            result[i] = deepclone(obj[i])
        }
        return result;
    } else {
        return obj
    }
}

const s = {a: 423, b: {c: 23}, d: [31, 432, {f: 23}]}
const s1 = deepclone(s)
console.log(s);
console.log(s1);
console.log(s1.d === s.d);
console.log(s1.d[2]=== s.d[2]);