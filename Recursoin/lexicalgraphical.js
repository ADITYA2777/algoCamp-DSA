

let arr;
function f(i,n) {
    if (i > n) return
    if (i !=0) {
        arr.push(i)
    }
    for (let j =( (i == 0) ? 1 : 0); j <= 9; j++){
          f(10*i + j,n)
      }  
    
}
let lexical = function (n) {
    arr = [];
    f(0, n);
    return arr
};


let result = lexical(13)
console.log(result);