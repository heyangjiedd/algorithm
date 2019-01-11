let a = 13, b = 23;
a = a - b;//存下A-B值,此时b未改变，b=B，a = A-B
b = b + a//转变b的值给a，b = A-B+B
a = b - a //A-(A-B)
console.log(a, b)
