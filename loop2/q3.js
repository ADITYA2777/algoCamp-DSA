function printFibonacci(n) {
    if (n==0) {
        console.log(0); 
        return;
    }

    if (n >= 1) {
       console.log(0); 
       console.log(1); 
    }
    let leastNo = 1
    let secondNo = 0
    for (let i = 2; i <= n;i++){
        ans = leastNo + secondNo;
        console.log(ans);
        secondNo = leastNo
        leastNo =ans
    }
}
printFibonacci(13)