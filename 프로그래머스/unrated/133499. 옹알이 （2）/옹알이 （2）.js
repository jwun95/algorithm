function solution(babbling) {
    var answer = 0;
    const words = ["aya", "ye", "woo", "ma"];
    
    for (let i = 0; i < babbling.length; i++) {
        let bab = babbling[i];
        
        for (let word = 0; word < words.length; word++) {
            if (bab.includes(words[word].repeat(2))) {
                break;
            } else {
                bab = bab.split(words[word]).join(" ");
            }
        }
        if (bab.split(" ").join("").length === 0) {
            answer += 1;
        }
    }
    
    
    return answer;
}