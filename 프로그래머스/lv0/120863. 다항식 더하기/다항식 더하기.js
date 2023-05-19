function solution(polynomial) {
    var answer = '';
    const value = [0,0]
    const reg = /[0-9]/;
    const splitedpoly = polynomial.split(" + ");
    
    splitedpoly.forEach((poly) => {
        if (reg.test(Number(poly))) {
            value[1] += Number(poly);
        } else {
            poly.length === 1 ? value[0]++ : value[0] = value[0] + Number(poly.slice(0, poly.length - 1));
        }
    });
    if (value[0] === 0) {
        return String(value[1]);
    } else if (value[1] === 0 && value[0] === 1) {
        return 'x';
    } else if (value[1] === 0 && value[0] !== 1) {
        return `${value[0]}x`;
    } else if (value[0] === 1 && value[1] !== 0) {
        return `x + ${value[1]}`;
    } else {
        return `${value[0]}x + ${value[1]}`;
    }
}