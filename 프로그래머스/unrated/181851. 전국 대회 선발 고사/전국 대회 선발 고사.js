function solution(rank, attendance) {
    const available = attendance.map((v, idx) => {
        if (v) return rank[idx];
    });
    
    available.sort((x,y) => x- y);
    
    const [a, b, c] = available.slice(0, 3);
    
    return 10000 * rank.indexOf(a) + 100 * rank.indexOf(b) + rank.indexOf(c);
}