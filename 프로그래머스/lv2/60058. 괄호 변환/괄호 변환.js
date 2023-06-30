function checkCorrect(str) {
    let left = 0;
    let right = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '\(') {
            left += 1;
        } else {
            right += 1;
        }
        if (left < right) {
            return false;
            break;
        };
    }
    return true;
}

function checkBalance(str) {
    let left = 0;
    let right = 0;
    let idx = -1;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '\(') {
            left += 1;
        } else {
            right += 1;
        }
        if (left === right) {
            idx = i;
            break;
        };
    }
    return [str.slice(0, idx + 1), str.slice(idx + 1)];
};

function recur(str) {
    if (!str.length) return str;
    let [u, v] = checkBalance(str);
    const result = checkCorrect(u);
    if (result) {
        return u += recur(v);
    } else {
        let rest = '\(';
        rest += recur(v) + '\)';
        const newU = u.slice(1, u.length - 1);
        for (let i = 0; i < newU.length; i++) {
            if (newU[i] === '\(') {
                rest += '\)';
            } else {
                rest += '\(';
            }
        }
        return rest;
    }
}

function solution(p) {
    return recur(p);
}