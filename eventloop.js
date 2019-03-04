new Promise(resolve => {
    console.log('promise  222');
    resolve()
}).then(()=>{
    console.log('promise then  333')
})
// setTimeout() 计划在毫秒的最小阈值经过后运行的脚本。
setTimeout(()=>{
    console.log('settimeout 444');
},0)
// setImmediate() 设计为在当前 轮询 阶段完成后执行脚本。
setImmediate(()=>{
    console.log('setImmediate 555')
})
setTimeout(()=>{
    console.log('settimeout 666')
},0);
process.nextTick(()=>{
    console.log('process 777')
})
