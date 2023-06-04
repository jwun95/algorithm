function solution(s) {
    const result = new Set();
    const arr = s.slice(2, s.length - 2).split("\},\{");
    const arrSplit = arr.map((v) => {
        return v.split(','); 
    });
    arrSplit.sort((x,y) => x.length - y.length);
    arrSplit.forEach((x) => {
        x.forEach((y) => result.add(parseInt(y))); 
    });
    
    return Array.from(result);
}