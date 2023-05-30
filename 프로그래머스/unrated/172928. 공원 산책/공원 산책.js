function solution(park, routes) {
    var answer = [];
    const direction = [[0, 1],[0, -1],[1, 0],[-1, 0]]; // 동서남북
    const column = park[0].length;
    const row = park.length;
    
    function moving(dir, num) {
        let move = 0;
        let tempRow = answer[0];
        let tempColumn = answer[1];
        while (move < num) {
            tempRow += dir[0];
            tempColumn += dir[1];
            if (tempRow >= 0 && tempRow < row && tempColumn >= 0 && tempColumn < column)   {
                if (park[tempRow][tempColumn] === 'X') {
                    break;
                } else {
                    move++;  
                };
            } else {
                break;  
            };
        };
        return move === num ? true : false;
    };
    
    // 출발 지점 확인
    for (let r = 0; r < row; r++) {
        for (let c = 0; c < column; c++) {
            if (park[r][c] === 'S') {
                answer.push(r, c);
                break;
            };
        };
    };
    
    // routes대로 움직임
    routes.forEach((v) => {
        const [cardinal, distance] = v.split(" ");
        if (cardinal === 'E') {
            if (moving(direction[0], parseInt(distance))) {
                answer[1] += parseInt(distance);
            }
        } else if (cardinal === 'W') {
            if (moving(direction[1], parseInt(distance))) {
                answer[1] -= parseInt(distance);
            }
        } else if (cardinal === 'S') {
            if (moving(direction[2], parseInt(distance))) {
                answer[0] += parseInt(distance);
            }
        } else {
            if (moving(direction[3], parseInt(distance))) {
                answer[0] -= parseInt(distance);
            }
        }
    });
    
    return answer;
}