

function f(n) {
    // base case
    if (n<1) {
        // do not do anything
        return
    }
    // recursion asumption
    f(n - 1); //function f work correctly for print 
console.log(n);
  
}
f(8);