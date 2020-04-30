function f(a,b) {
    console.log(a,b);
    arguments[0] = 1;
    console.log(a,b);
    console.log(arguments);
    fn(arguments)
    console.log(arguments);
    console.log(a,b);
}
function fn(arr){
    arr[1] = 1;
}
f(0,0)