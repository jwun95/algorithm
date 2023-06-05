function solution(str1, str2) {
    const reg = /[a-z]/;
    const str1Lower = str1.toLowerCase();
    const str2Lower = str2.toLowerCase();
    
    const str1Ob = {};
    const str2Ob = {};
    
    for (let i = 1; i < str1Lower.length; i++) {
        if (reg.test(str1Lower[i-1]) && reg.test(str1Lower[i])) {
            str1Ob[str1Lower[i-1] + str1Lower[i]] ? str1Ob[str1Lower[i-1] + str1Lower[i]]++ : str1Ob[str1Lower[i-1] + str1Lower[i]] = 1;
        }
    };
    for (let i = 1; i < str2Lower.length; i++) {
        if (reg.test(str2Lower[i-1]) && reg.test(str2Lower[i])) {
            str2Ob[str2Lower[i-1] + str2Lower[i]] ? str2Ob[str2Lower[i-1] + str2Lower[i]]++ : str2Ob[str2Lower[i-1] + str2Lower[i]] = 1;
        }
    };
    
    let intersection = 0;
    
    Object.keys(str2Ob).forEach((v) => {
        if (str1Ob[v]) {
            intersection += Math.min(str1Ob[v], str2Ob[v]);
            str1Ob[v] = Math.max(str1Ob[v], str2Ob[v]);
        } else {
            str1Ob[v] = str2Ob[v];
        };
    });
    
    let union = 0;
    Object.values(str1Ob).forEach((v) => {
        union += v; 
    });
    
    return union === 0 && intersection === 0 ? 65536 : Math.floor(intersection / union * 65536);
}