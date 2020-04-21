var updateMatrix = function (matrix) {
    let lengthN = matrix.length;
    let lengthM = matrix[0].length;
    let max = lengthN + lengthM - 2;

    function func(n, m) {
        var result = 0;
        for (let i = 0; i <= max; i++) {
            for (let j = 0; j <= i; j++) {
                let jj = i - j;
                if (((n - jj >= 0) && (m - j >= 0) && (0 === matrix[n - jj][m - j]))
                    || ((n - jj >= 0) && (m + j < lengthM) && (0 === matrix[n - jj][m + j]))
                    || ((n + jj < lengthN) && (m - j >= 0) && (0 === matrix[n + jj][m - j]))
                    || ((n + jj < lengthN) && (m + j < lengthM) && (0 === matrix[n + jj][m + j]))) {
                    return result  = i
                }
            }
        }
        return result
    }
    return matrix.map((item, n) => {
        return item.map((r, m) => {
            return func(n, m)
        })
    })
};
var matrix = [[0,1,0],[0,1,0],[0,1,0],[0,1,0],[0,1,0]]
console.log(updateMatrix(matrix))