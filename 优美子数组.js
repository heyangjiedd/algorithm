var numberOfSubarrays = function (nums, k) {
    let kk = [];
    nums.forEach((item, index) => {
        if (item % 2 === 1) {
            kk.push(index)
        }
    })
    let kkk = 0
    if (kk.length >= k) {
        for (let i = 0; i <= kk.length - k; i++) {
            kkk = kkk + ((i>0?kk[i]-kk[i-1]:kk[i]+1)) * ( (kk[k + i]||nums.length) - kk[k + i - 1]);
        }
    }
    return kkk
};
console.log(numberOfSubarrays([2,2,2,1,2,2,1,2,2,2], 2))