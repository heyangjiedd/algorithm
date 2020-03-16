// 冒泡排序 3,2,1,4 每一个都比较
let arr = [3, 2, 1, 4, 7, 20];
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                let tem = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = tem;
            }
        }
    }
    return arr;
}

// console.log(bubbleSort(arr)); 选择最大、小值
// 选择排序 3,2,1,4
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let maxIndex = i, tem;
        for (let j = i; j < arr.length; j++) {
            if (arr[j] > arr[maxIndex]) {
                maxIndex = j;
            }
        }
        tem = arr[i];
        arr[i] = arr[maxIndex]
        arr[maxIndex] = tem;
    }
    return arr
}

// console.log(selectionSort(arr));
// 插入排序  3,2,1,4
function insertSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let curr = arr[i];
        let preIndex = i - 1;
        while (preIndex >= 0 && curr < arr[preIndex]) {
            arr[preIndex + 1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex + 1] = curr;
    }
    return arr
}

// console.log(insertSort(arr))
// 快速排序 3,2,1,4,7,20  分区比较
function quickSort(arr) {
    if (arr.length <= 1) return arr;
    const point = Math.floor(arr.length / 2);
    const pointv = arr.splice(point,1);
    let left = [];
    let right = [];
    arr.forEach(item=>{
        if(item>pointv[0]){
            right.push(item)
        }else{
            left.push(item)
        }
    })
    return quickSort(left).concat(pointv,quickSort(right))
}
console.log(quickSort(arr))
//分区
function partition(arr, left, right) {
    let pivot = left,
        index = pivot + 1;

}

//替换顺序
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}



// 希尔排序
function shellSort(arr) {

}

// console.log(shellSort(arr))

