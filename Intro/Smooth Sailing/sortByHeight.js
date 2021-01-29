function sortByHeight(a) {
    const treeIndices = [];
    a.forEach((a,i) => {
        if(a == -1) treeIndices.push(i);
    })
    const heightsSorted = a.sort((a,b) => a-b).slice(a.lastIndexOf(-1)+1);
    treeIndices.forEach((ele) => {
        heightsSorted.splice(ele, 0, -1);
    })
    return heightsSorted;
}

