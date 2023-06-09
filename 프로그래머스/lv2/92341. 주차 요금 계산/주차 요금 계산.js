function solution(fees, records) {
    const area = {};
    const accu = {};
    
    records.forEach((r) => {
        const [time, num, state] = r.split(" ");
        if (state === 'IN') {
            area[num] = time;
        } else {
            const [iH, iM] = area[num].split(':');
            const [oH, oM] = time.split(':');
            const gap = (Number(oH) * 60 + Number(oM)) - (Number(iH) * 60 + Number(iM));
            area[num] = 0;
            accu[num] = accu[num] ? accu[num] + gap : gap;
        };
    });
    
    Object.keys(area).forEach((a) => {
        if (area[a] !== 0) {
            const [iH, iM] = area[a].split(':');
            const gap = (60 * 23 + 59) - (Number(iH) * 60 + Number(iM));
            accu[a] = accu[a] ? accu[a] + gap : gap;
        };
    });
    
    Object.keys(accu).forEach((a) => {
        let cost = fees[1];
        if (accu[a] > fees[0]) {
            cost += Math.ceil((accu[a] - fees[0]) / fees[2]) * fees[3];
        };
            accu[a] = cost;
    });
    
    return Object.keys(accu).sort((x,y) => x - y).map((v) => accu[v]);
}