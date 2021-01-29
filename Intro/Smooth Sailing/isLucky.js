function isLucky(n) {
    const numStr = String(n),
        strHalf = numStr.length/2,
        lhalf = numStr.slice(0,strHalf),
        rhalf = numStr.slice(strHalf);
        let lsum = 0, rsum = 0;
    
    for(let i = 0; i < strHalf; i++){
        lsum += Number(lhalf[i]);
        rsum += Number(rhalf[i]);
    }
    
    return lsum == rsum ? true : false;
}

