function adjacentElementsProduct(inputArray = []) {
    const newInputArr = inputArray.slice(0,-1);
    return newInputArr.reduce((acc, curr, i) => acc = Math.max(acc, curr * 
inputArray[i+1]), Number.NEGATIVE_INFINITY);
}
