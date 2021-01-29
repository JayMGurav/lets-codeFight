function matrixElementsSum(matrix) {
    let sum = 0;
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            const curr = matrix[i][j];
            if(curr == 0 && i+1 < matrix.length){
                matrix[i+1][j] = 0;
            }
            sum+=curr;
        }
    }
    return sum;
}
