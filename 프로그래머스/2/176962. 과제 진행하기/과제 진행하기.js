function solution(plans) {
    var answer = [];
    const stack = [];
    for (let i = 0; i < plans.length; i ++) {
        const [hour, minute] = plans[i][1].split(":");
        plans[i][1] = Number(hour) * 60 + Number(minute);
        plans[i][2] = Number(plans[i][2]);
    }
    
    plans.sort((x, y) => x[1] - y[1]);
    let name = plans[0][0];
    let start = plans[0][1];
    let remain = plans[0][2];
    let end = start + remain;
    
    for (let i = 1; i <= plans.length; i ++) {
        if (i === plans.length) {
            answer.push(name);
            break;
        }
        if (plans[i][1] < end && start <= plans[i][1]) {
            stack.push([name, end - plans[i][1]]);
        } else {
            answer.push(name);
            let gap = plans[i][1] - end;
            while (gap > 0 && stack.length) {
                const [t_name, t_remain] = stack.pop();
                if ((gap - t_remain) >= 0) {
                    answer.push(t_name);
                    gap = gap - t_remain;
                } else {
                    stack.push([t_name, t_remain - gap]);
                    break;
                }
            }
        }
        name = plans[i][0];
        start = plans[i][1];
        remain = plans[i][2];
        end = start + remain;
    }
    
    while (stack.length) {
        const rest = stack.pop();
        answer.push(rest[0]);
    }
    
    return answer;
}