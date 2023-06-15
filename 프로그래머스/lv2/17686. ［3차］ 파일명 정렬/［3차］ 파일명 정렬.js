function solution(files) {
    var answer = [];
    const reg = /[0-9]/;
    const reg2 = /[0-9]/;

    files.forEach((v, idx) => {
        const fileName = v.slice(0, v.match(reg).index);
        let str = v.slice(v.match(reg).index);
        const num = str.slice(0, str.match(reg2).index).slice(0,5) || str.slice(0,5);
        
        console.log(fileName, str, num)

        answer.push([fileName, num, idx]);
    });
    answer.sort((x, y) => x[0].toLowerCase() > y[0].toLowerCase() ? 1 : x[0].toLowerCase() < y[0].toLowerCase() ? -1 : 0 || parseInt(x[1]) - parseInt(y[1]));
    return answer.map((v) => files[v[2]]);
}