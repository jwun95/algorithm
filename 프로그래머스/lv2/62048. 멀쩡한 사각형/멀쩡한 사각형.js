const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);

function solution(w, h) {
    const divide = gcd(w, h);
    return w * h - (w + h - divide);
}