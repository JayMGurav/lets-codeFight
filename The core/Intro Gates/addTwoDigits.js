function addTwoDigits(n) {
    // add any number of digits pass 90073047
    // console.log(addTwoDigits(90073047)); //30
    // for just two digits
    //return n%10 + Math.floor(n/10);
    return String(n).split("").reduce((acc,curr) => acc+=Number(curr), 0);
}

