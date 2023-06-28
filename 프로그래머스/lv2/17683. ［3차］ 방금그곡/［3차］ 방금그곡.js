function timeGap(s, e) {
    const [sh, sm] = s.split(":").map((v) => Number(v));
    const [eh, em] = e.split(":").map((v) => Number(v));
    
    if (sh === eh) return em - sm;
    return (eh - sh - 1) * 60 + (60 + em - sm);
}

function musicSplit(str) {
    const addMusic = {'C#': 'X', 'D#': 'Y', 'F#': 'Z', 'G#': 'K', 'A#': 'Q'};
    const result = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '#') {
            result.pop();
            result.push(addMusic[str[i-1] + str[i]]);
        } else {
            result.push(str[i]);
        }
    }
    return result;
}

function solution(m, musicinfos) {
    const sM = musicSplit(m).join("");
    var result = [];
    for (let i = 0; i < musicinfos.length; i++) {
        const [start, end, title, music] = musicinfos[i].split(",");
        const gap = timeGap(start, end);
        let infos = "";
        const sMusic = musicSplit(music).join("");
        infos += sMusic.repeat(parseInt(gap / sMusic.length)) + sMusic.slice(0, gap % sMusic.length);
        
        if (infos.includes(sM)) result.push([title, gap]);
    }
    
    result.sort((x,y) => y[1] - x[1]);
    return result.length ? result[0][0] : "(None)";
}