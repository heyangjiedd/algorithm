var merge = function (intervals) {
    intervals.sort((a, b) => (a[0] - b[0]));
    let i = 0
    while (i<intervals.length-1){
        if(intervals[i][1]>intervals[i+1][0]){
            if(intervals[i][1]>=intervals[i+1][1]){
                intervals.splice(i+1,1);
            }else{
                let n = intervals[i][0],m = intervals[i+1][1];
                intervals.splice(i,2,[n,m]);
            }
        }else if(intervals[i][1]==intervals[i+1][0]){
            let n = intervals[i][0],m = intervals[i+1][1];
            intervals.splice(i,2,[n,m]);
        }else
            i++
    }
    return intervals
};
console.log(merge([[1, 3], [0, 3], [1, 4], [2, 3], [8, 10], [15, 18]]))
