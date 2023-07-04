function solution(rows, columns, queries) {
    var answer = [];
    const arr = Array.from(Array(rows), () => Array(columns).fill(0));
    let count = 1;
    
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            arr[r][c] = count;
            count++;
        };
    };
    
    for (const query of queries) {
        const [sr, sc, er, ec] = query.map((v) => v - 1);
        let temp = arr[sr][sc];
        let a = temp;
        for (let i = sc + 1; i <= ec; i++) {
            const t = arr[sr][i];
            a = Math.min(a, t);
            arr[sr][i] = temp;
            temp = t;
        };
        for (let k = sr + 1; k <= er; k++) {
            const t = arr[k][ec];
            a = Math.min(a, t);
            arr[k][ec] = temp;
            temp = t;
        };
        for (let j = ec - 1; j >= sc; j --) {
            const t = arr[er][j];
            a = Math.min(a, t);
            arr[er][j] = temp;
            temp = t;
        };
        for (let h = er - 1; h >= sr; h -- ) {
            const t = arr[h][sc];
            a = Math.min(a, t);
            arr[h][sc] = temp;
            temp = t;
        }
        answer.push(a);
    }
    
    return answer;
}