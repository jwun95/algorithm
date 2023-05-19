function solution(a, b) {
    let divider = 2;
    const minValue = Math.min(a, b);
    
    while (divider <= minValue) {
        if (a % divider === 0 && b % divider === 0) {
            a = a / divider;
            b = b / divider;
        } else {
            divider = divider + 1;
        };
    };
    
    if (b === 1) {
        return 1;
    };
    
    let i = 2;
    
    while (i <= b) {
        if (b % i === 0) {
            if (!(i === 2 || i === 5)) {
                return 2;
            }
            b = b / i;
        } else {
            i = i + 1;
        };
    }
    return 1;
}