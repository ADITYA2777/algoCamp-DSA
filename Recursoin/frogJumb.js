
function f(i,n,height) {
    if (i == n) return 0
    if (i==n-1) {
        // we are the second last index,w can onlygo to the last index
        return Math.abs(height[i] - height[i + 1]) + f(i + 1, n, height);
    }
    if (i > n) return Infinity
    
    return Math.min(
    Math.abs(height[i] - height[i + 1]) + f(i + 1, n, height),
    Math.abs(height[i] - height[i + 2]) + f(i + 2, n, height),
    )
        
}
console.log(f(1,4,[undefined,10,20,30,40]));  //undefind is dummy  for make array 