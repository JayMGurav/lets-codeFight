
// Method one iteratively check for balence
function phoneCall(min1, min2_10, min11, s) {
  let cost = min1, minutes = 0;
  while (s > 0) {
    minutes += 1;
    if (minutes == 2) {
      cost = min2_10;
    } else if (minutes > 10) {
      cost = min11;
    }
    s -= cost;
    // last loop if balance goes negative reduce the incremented minute
    if (s < 0) minutes -= 1;
  }
  console.log({ minutes });
  return minutes;
}

// but this adds the complexity of loop

function phoneCall(min1, min2_10, min11, s) {
  if (s < min1) return 0;
  if (s < (min1 + min2_10 * 9)) return 1 + ((s - min1) / min2_10) | 0;
  return 10 + ((s - min1 - (9 * min2_10)) / min11) | 0;
}