function factorial(num) {
  let n = 1;
  for (let i = 1; i <= num; i++) {
    n = n * i;
  }
  return n;
}

function solution(balls, share) {
  return Math.round(factorial(balls) / (factorial(balls - share) * factorial(share)));
}