function solution(word) {
    const alphabets = ['A', 'E', 'I', 'O', 'U'];
    const index = {};
    let count = 0;
    
    function dfs(str, num) {
        if (str.length > 5) return;
        count += 1;
        index[str] = count;
        for (let i = 0; i < 5; i++) {
            dfs(str + alphabets[i], num--);
        }
    };
    
    for (let i = 0; i < 5; i ++) {
        let str = '';
        dfs(str + alphabets[i]);
    };
    
    return index[word];
}