function solution(book_time) {
    var answer = 0;
    const table = [];
    const parseBookTime = [];
    
    function timeParse([h, m]) {
        const sum = parseInt(h) * 60 + parseInt(m);
        return sum;
    }
    
    book_time.forEach((v) => {
        const start = timeParse(v[0].split(':'));
        const end = timeParse(v[1].split(':'));
        parseBookTime.push([start, end]);
    })
    
    parseBookTime.sort((x, y) => x[0] - y[0]);
    console.log(parseBookTime);
    parseBookTime.forEach((v) => {
        if (!table.length) table.push(v[1] + 10);
        else {
            table.sort((x, y) => x - y);
            if (table[0] <= v[0]) {
                table[0] = v[1] + 10;
            } else {
                table.push(v[1] + 10);
            }
        }
    });
    
    return table.length;
}