function commonCharacterCount(s1, s2) {
    const s1Arr = s1.split(""), s2Arr = s2.split("");
    return s1Arr.reduce((acc, curr) => {
       if(s2Arr.includes(curr)){
           s2Arr.splice(s2Arr.indexOf(curr), 1);
           acc+=1;
       } 
       return acc;
    },0)   
}

