function solution(clothes) {
    let answer = 1;
    const types = {};
    
    clothes.forEach((v) => {
        types[v[1]] ? types[v[1]]++ : types[v[1]] = 1;
    });
    
    Object.values(types).forEach((val) => {
        answer = answer * (val + 1);
    });
    
    return answer - 1;
}