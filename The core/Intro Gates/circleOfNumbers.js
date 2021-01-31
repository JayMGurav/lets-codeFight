function circleOfNumbers(n, firstNumber) {
    // if(firstNumber == n/2) return 0;
    // return  firstNumber > n/2 ? firstNumber - (n/2) : n - ((n/2) - firstNumber);
    return (firstNumber + n/2) % n;
}

