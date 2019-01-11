let arr = [1,2,556,3,1,4,3,63,2,1,5];
function f(arr) {
    let result = [];
    arr.forEach(item=>{
        if(!result.some(r=>{return item == r})){
            result.push(item)
        }
    });
    return result
}
console.log(f(arr))
