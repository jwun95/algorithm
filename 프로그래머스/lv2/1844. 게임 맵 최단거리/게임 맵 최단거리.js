function solution(maps) {
    const row = maps.length;
    const column = maps[0].length;
    const direction = [[1,0],[-1,0],[0,1],[0,-1]];
    const needVisited = [[0,0,1]];
    
    while (needVisited.length !== 0) {
        const [x, y, count] = needVisited.shift();
        
        if (x === row - 1 && y === column - 1) {
            return count;
        }
        
        if (x < 0 || x >= row) continue;
        if (y < 0 || y >= column) continue;
        if (maps[x][y] === 0) continue;
        
        maps[x][y] = 0;
        
        for (let i = 0; i < 4; i++) {
            needVisited.push([x+direction[i][0], y+direction[i][1], count + 1]);  
        };
    };
    return -1;
}