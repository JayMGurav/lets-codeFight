function almostIncreasingSequence(sequence = []) {
  let invalidNumbersCount = 0;

  for (let i = 1; i < sequence.length; i++) {
    if (sequence[i] <= sequence[i - 1]) {
      invalidNumbersCount++;
      if (invalidNumbersCount > 1) return false;
      if (sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1]) return false;
    }
  }

  return true;
}