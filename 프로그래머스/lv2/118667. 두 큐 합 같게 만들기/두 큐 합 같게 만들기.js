function solution(queue1, queue2) {
    let answer = 0;
    let count1 = 0;
    let count2 = 0;
    let location1 = 0;
    let location2 = 0;
    const len = queue1.length;
    
    for (let i = 0; i < queue1.length; i ++) {
        count1 += queue1[i];
        count2 += queue2[i];
    };
    
    const sum = count1 + count2;
    while (answer < len * 3) {
        if (count1 === sum / 2) return answer;
        if (queue1[location1] > sum / 2 || queue2[location2] > sum / 2) return -1;
        if (count1 > count2) {
            count1 -= queue1[location1];
            count2 += queue1[location1];
            queue2.push(queue1[location1]);
            location1 += 1;
        } else {
            count2 -= queue2[location2];
            count1 += queue2[location2];
            queue1.push(queue2[location2]);
            location2 += 1;
        }
        answer += 1;
    }
    
    return answer === len * 3 ? -1 : answer;
}