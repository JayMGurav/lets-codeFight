function lateRide(n) {
//we can use '|' binary OR instead of Math.floor as in 123.3533 | 0
   const hours = Math.floor(n / 60) || 00,
        minutes = Math.floor(n % 60) || 00;
    return (Math.floor(hours / 10) + Math.floor(hours % 10) + Math.floor(minutes / 10) + Math.floor(minutes % 
10));
}

