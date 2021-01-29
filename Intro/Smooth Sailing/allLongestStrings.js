function allLongestStrings(inputArray) {
    let maxLength = Math.max(...inputArray.map(str => str.length));
    return inputArray.filter(str => str.length == maxLength);
}

