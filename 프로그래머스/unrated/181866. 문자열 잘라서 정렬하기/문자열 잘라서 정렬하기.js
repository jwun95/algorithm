function solution(myString) {
  var answer = myString.split("x").filter((x) => x !== "");
  answer.sort();
  return answer;
}