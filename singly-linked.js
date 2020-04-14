function ListNode(val) {
    this.val = val;
    this.next = null;
}
var addTwoNumbers = function (l1, l2) {
    let arr1 = [], arr2 = [];
    let n1 = l1, n2 = l2;
    while (n1) {
        arr1.unshift(n1.val);
        n1 = n1.next;
    }
    while (n2) {
        arr2.unshift(n2.val);
        n2 = n2.next;
    }
    let max = arr1.length >= arr2.length ? arr1 : arr2;
    let min = arr1.length < arr2.length ? arr1 : arr2;
    let add = 0;
    let res = max.map((item, index) => {
        let result = item + (min[index]||0) + add;
        add = result >= 10 ? 1 : 0;
        return result % 10;
    })
    if(add) res.push(1);
    res.reverse();
    let node = new ListNode(res[0]);
    let a = node;
    res.forEach((item,index)=>{
        if(index){
            a.next = new ListNode(item);
            a = a.next
        }
    });
    return node
};
let a1 = [7,2,4,3];
let a2 = [6,5,6,4];
let n1 = new ListNode(a1[0]);
let n2 = new ListNode(a2[0]);
let curr = n1;
a1.forEach((item,index)=>{
    if(index){
        curr.next = new ListNode(item);
        curr = curr.next
    }

});
 curr = n2;
a2.forEach((item,index)=>{
    if(index){
        curr.next = new ListNode(item);
        curr = curr.next
    }
});
addTwoNumbers(n1,n2)