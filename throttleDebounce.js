/*
* 函数节流 当持续触发事件时，保证一定时间段内只调用一次事件处理函数。
*  throttle(fn)()
*/
function throttle() {
    let time;
    return function () {
        if (!time) {
            time = setTimeout(() => {
                fn();
                clearTimeout(time);
                time = null;
            }, 2000);
        }
    }
}
// let th = throttle(fn);
// th();setTimeout(th,1000)


/*
* 函数防抖 当持续触发事件时，一定时间段内没有再触发事件，事件处理函数才会执行一次，
*  debounce(fn)()
*/
function debounce(fn) {
    let time;
    return function () {
        if (time) clearTimeout(time);
        time = setTimeout(() => {
            fn();
        }, 2000);
    }
}
function fn() {
    console.log(1)
}
// let de = debounce(fn);
// de();setTimeout(de,1000)