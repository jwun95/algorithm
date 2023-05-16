function solution(numer1, denom1, numer2, denom2) {
  var answer = [denom1 * numer2 + denom2 * numer1, denom1 * denom2];
  let minValue = Math.min(...answer);
  let idx = 2;

  while (idx <= minValue) {
    if (answer[0] % idx === 0 && answer[1] % idx === 0) {
      answer[0] = answer[0] / idx;
      answer[1] = answer[1] / idx;
      minValue = minValue / idx;
    } else {
      idx += 1;
    }
  }

  return answer;
}