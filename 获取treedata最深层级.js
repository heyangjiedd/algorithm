function getDeep(data) {
    let result = 0;
    let num = 0;
    const fn = (pid)=>{
        num++;
        let parent = data.find(item=>{return item.id == pid});
        if(parent&&parent.pid){
            fn(parent.pid)
        }
    };
    data.forEach(item=>{
        fn(item.pid);
        result = Math.max(num,result);
        num = 0;
    })
    return result;
}
console.log(getDeep([{id:1,pid:11},{id:11,pid:111},{id:11,pid:123},{id:111,pid:1111},{id:111,pid:1234},]))
