function solution(arrayA, arrayB) {
    function calculater(arrA, arrB) {
        for (let i = arrA[0]; i > 0; i--) {
            if (arrA.every((v) => v % i === 0) && !arrB.some((v) => v % i === 0)) return i;
        }
        return 0;
    }
    
    return Math.max(calculater(arrayA, arrayB), calculater(arrayB, arrayA));
}