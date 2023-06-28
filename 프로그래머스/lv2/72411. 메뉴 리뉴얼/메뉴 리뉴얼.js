function getCombination(arr, selectNumber) {
    const result = [];
    if (selectNumber === 1) return arr.map((v) => [v]);
    
    arr.forEach((fixed, idx, origin) => {
        const rest = origin.slice(idx + 1);
        const combination = getCombination(rest, selectNumber - 1);
        const attached = combination.map((v) => [fixed, ...v]);
        result.push(...attached);
    });
    return result;
}

function solution(orders, course) {
    var answer = [];
    
    course.forEach((c) => {
        const menus = {};
        orders.forEach((o) => {
            const result = getCombination([...o], c);
            result.forEach((r) => {
                r.sort();
                const order = r.join("");
                menus[order] ? menus[order]++ : menus[order] = 1;
            });
        });
        const li = Object.values(menus).sort((x,y) => y - x);
        const menu = Object.keys(menus);
        for (let i = 0; i < menu.length; i++) {
            if (li[0] >1 && li[0] === menus[menu[i]]) answer.push(menu[i]);
        }
    });
    
    return answer.sort();
}