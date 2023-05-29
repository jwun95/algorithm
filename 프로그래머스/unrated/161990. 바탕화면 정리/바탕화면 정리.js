function solution(wallpaper) {
    const column = wallpaper[0].length;
    const row = wallpaper.length;
    const ran = [row, column, 0, 0];
    
    for (let r = 0; r < row; r++) {
        for (let c = 0; c < column; c++) {
            if (wallpaper[r][c] === '#') {
                ran[0] = Math.min(ran[0], r);
                ran[1] = Math.min(ran[1], c);
                ran[2] = Math.max(ran[2], r + 1);
                ran[3] = Math.max(ran[3], c + 1);
            };
        };
    };
    
    return ran;
}