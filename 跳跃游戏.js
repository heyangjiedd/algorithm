var canJump = function (nums) {
    let canjump = [[nums[nums.length - 1], nums.length - 1]];
    let i = 0;
    function fn() {

    }
    while (i < canjump.length) {
        let arr = nums.slice(0, canjump[i][1]);
        arr.forEach((item, index) => {
            if (canjump[i][1] <= item + index) {
                !canjump.find(item=>item[1]===index) && canjump.push([item, index]);
            }
        })
        i++;
    }
    return !!canjump.find(item=>item[1]===0)
};
console.log(canJump([3, 2, 1,1,4]))