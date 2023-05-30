function solution(s) {
    const numbers = s.split(" ").map((v) => Number(v));
    return `${Math.min(...numbers)} ${Math.max(...numbers)}`;
}