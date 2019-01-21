let num1 = '5353535345434534535354145453345353535345434534535354945534945534145453345353535345434534535354945534145453345353535345434534535354145453345353535345434534535354';
let num2 = '453535353454345345353541454533434543453453535494553414545333535414545334535353534543453453535494553414545334535353';

function f(num1 = 0, num2 = 0) {
    let str1 = num1.toString().split('').reverse();
    let str2 = num2.toString().split('').reverse();
    let maxLeng = num1.toString().length + num2.toString().length;
    let resultObjDouble = [];//存放数字和对应的位数，存在重复位数项
    let resultObj = [];//存放数字和对应的位数，无重复位数项
    str1.forEach((itemNum1,index1) => {
        str2.forEach((itemNum2,index2) => {
            let indexNumber = itemNum1*itemNum2;
            if(indexNumber<10){
                resultObjDouble.push({value:indexNumber,number:index1+index2})
            }else{
                resultObjDouble.push({value:parseInt(indexNumber/10),number:index1+index2+1})
                resultObjDouble.push({value:indexNumber%10,number:index1+index2})
            }
        })
    })
    for (let index = 0;index < maxLeng;index++){
        let filter = resultObjDouble.filter(item=>{
            return item.number === index;
        }).reduce((total,item)=>{
           return total + item.value;
        },0);
        let str = filter.toString().split('').reverse();
        str.forEach((r,n)=>{
            if(n===0){
                resultObj.push({value:Number(r),number:index})
            }else{
                resultObjDouble.push({value:Number(r),number:index+n})
            }
        })
    }
    return resultObj.reverse().reduce((total,item,index)=>{
        if(index===0&&item.value===0){
            return ''
        }
        return total+item.value
    },'')
}
console.log(f(num1, num2))
console.log(num1*num2)
