let str = 'fsafgdagsdfjsfjskfjfakl';
function f(str) {
    let arr = str.split('');
    let obj = {}
    // 形成key value对象
    arr.forEach(item=>{
        if(obj[item]){
            obj[item]['value']++;
        }else{
            obj[item] = {key:item,value:1}
        }
    });
    let result = {};
    // 找出最大值对象
    Object.values(obj).forEach(item=>{
      if(item.value > (result.value||0)){
          result = item
      }
    })
    return result;
}
console.log(f(str));
