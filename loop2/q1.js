// GCD => greater common divisor

function GCD(a,b) {
    let ans = 1;
    for (let i = 2; i <= Math.min(a, b);i++){
        ans = i;
    }
    return ans;
}
console.log(GCD(24,28));