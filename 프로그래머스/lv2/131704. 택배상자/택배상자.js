function solution(order) {
    var answer = 0;
    
    let location = 0;
    const subBelt = [];
    
    function pushSubBelt (start, end) {
        for (let i = start; i < end; i++) {
            subBelt.push(i);
        }
    };
    
    for (let i = 0; i < order.length; i++) {
        if (order[i] > location) {
            pushSubBelt(location + 1, order[i]);
            location = order[i];
            answer += 1;
        } else if (subBelt.length && subBelt[subBelt.length - 1] === order[i])         {
            subBelt.pop();
            answer += 1;
        } else {
            break;
        }
    }
    
    return answer;
}