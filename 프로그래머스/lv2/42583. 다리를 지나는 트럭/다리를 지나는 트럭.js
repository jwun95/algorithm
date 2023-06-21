function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    const tWeight = [...truck_weights];
    const onBridge = [];
    const idx = [];
    let curr = 0;
    
    while (tWeight.length) {
        if (onBridge.length) {
            for (let i = 0; i < onBridge.length; i++) {
                onBridge[i]++;
            };
            if (onBridge[0] > bridge_length) {
                curr -= idx.shift()
                onBridge.shift();
            };
        };
        
        if (weight - curr >= tWeight[0]) {
            const truck = tWeight.shift();
            curr += truck;
            onBridge.push(1);
            idx.push(truck);
        };
        answer++;
    }
    const lastValue = bridge_length - onBridge[onBridge.length - 1] + 1;
    
    return answer + lastValue;
}