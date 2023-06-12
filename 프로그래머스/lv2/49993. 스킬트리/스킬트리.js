function solution(skill, skill_trees) {
    var answer = 0;
    skill_trees.forEach((skill_tree) => {
        const can = new Set();
        can.add(skill[0]);
        answer += 1;
        for (let s = 0; s < skill_tree.length; s++) {
            if (skill.includes(skill_tree[s])) {
                if (!can.has(skill_tree[s])) {
                    answer -= 1;
                    break;
                } else {
                    if (skill.indexOf(skill_tree[s] < skill.length -1)) {
                        can.add(skill[skill.indexOf(skill_tree[s]) + 1]);
                    }
                };
            };
        };
    });
    
    return answer;
}