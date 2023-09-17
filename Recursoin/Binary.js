

function f(n) {
    if (n==0) {
        return 2
    }
    if (n==1) {
        return 3
    }
      return f(n - 1) + f(n - 2);
}
console.log(f(5));