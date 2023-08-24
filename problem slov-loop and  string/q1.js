
function GCD(a,b) {
    ans = 1;
    for (let i = 2; i <= Math.min(a,b);i++){
       if (a%i==0 && b%i==0) {
           ans = i;
        } 
    }
        return ans;

}

function LCM(a,b) {
    let G = GCD(a,b)
    return (a*b)/G
}
console.log(LCM(9,12));