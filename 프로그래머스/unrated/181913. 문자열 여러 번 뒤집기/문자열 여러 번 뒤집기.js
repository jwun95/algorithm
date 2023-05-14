function solution(my_string, queries) {
    var answer = my_string;
    
    queries.forEach((query) => {
       answer = answer.slice(0, query[0]) + [...answer.slice(query[0], query[1] + 1)].reverse().join("") + answer.slice(query[1] + 1); 
    });
    
    return answer;
}