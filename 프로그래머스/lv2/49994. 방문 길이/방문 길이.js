function solution(dirs) {
    const route = new Set();
    const direction = {'R':[1,0], 'L':[-1,0], 'U':[0,1], 'D':[0,-1]};
    let location = [0,0];
    
    [...dirs].forEach((v) => {
        const nx = location[0] + direction[v][0];
        const ny = location[1] + direction[v][1];
        
        if (nx > -6 && ny > -6 && nx < 6 && ny < 6) {
            route.add('' + nx + ny + location[0] + location[1]);
            route.add('' + location[0] + location[1] + nx + ny);
            location = [nx, ny];
        };
    });
    
    return route.size / 2;
}