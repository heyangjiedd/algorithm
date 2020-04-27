function Cat() {
    showName = function () {
        console.log(1);
    }
    return this
}
Cat.showName = function () {
 console.log(2);
}
Cat.prototype.showName = function () {
    console.log(3);
}
var showName = function () {
    console.log(4);
}
function showName() {
    console.log(5)
}
new Cat.showName()//2
new Cat().showName()//3
new new Cat().showName()//3