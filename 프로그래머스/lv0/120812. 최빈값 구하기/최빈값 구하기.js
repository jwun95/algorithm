function solution(array) {
    const duplications = {};
    array.forEach((v) => {
        duplications[v] ? duplications[v] = duplications[v] + 1 : duplications[v] = 1;
    });
    const maxValue = Math.max(...Object.values(duplications));
    const firstIndex = Object.values(duplications).indexOf(maxValue);
    const lastIndex = Object.values(duplications).lastIndexOf(maxValue);
    
    return firstIndex === lastIndex ? Number(Object.keys(duplications)[firstIndex]) : - 1;
}