function solution(topping) {
    let size1 = new Set(topping).size;
    let size2 = 0;
    const topping1 = {};
    const topping2 = {};
    let answer = 0;
    
    topping.forEach((v) => {
        topping1[v] ? topping1[v]++ : topping1[v] = 1; 
    });
    
    for (let i = 0; i < topping.length; i++) {
        topping1[topping[i]]--;
        topping1[topping[i]] === 0 ? size1-- : undefined;
        if (!topping2[topping[i]]) {
            topping2[topping[i]] = 1;
            size2++;
        };
        size1 === size2 ? answer++: undefined;
    };
    
    return answer;
}