
function f(n) {
    if (n==1) {
        return 1;
    }
    return n * f(n - 1);
}
// console.log(f(5));

// loops

function factorialWithLoops(n) {
    let ans = 1;
    for (let i = 1; i <= n;i++){
        ans = ans * 1;
    }
    return ans;
}

function f(n) {
    if (n == 0 || n == 1) return n; 
    return f(n - 1) + f(n - 2);
    
}
console.log(f(4));