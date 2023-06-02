function solution(n)
{
    var ans = 0;
    let location = n;
    
    while (0 < location) {
        if (location % 2 === 0) {
            location = location / 2;
        } else {
            location--;
            ans++;
        }
    };
    return ans;
}