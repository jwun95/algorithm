function solution(numbers) {
    const newNum = numbers.map((v) => String(v));
    const answer = newNum.sort((x, y) => {
      return (y + x) - (x + y);
    }).join("");
    return answer[0] === '0' ? '0' : answer;
}