//space on star let use logical n-i


function pattern(n) {
    for (let row = 1; row <= n; row++){
        
        //empty string 
        let str = " ";
        // space star
        let space = n - row;
        
        for (let j = 1; j <= space;j++){  // when this after end this loop we need one more loop for star
            str += " ";
        }
        let star = row
        for(let col = 1;col<= star;col++){
            str += "*";
        }
        console.log(str);
    }
}
pattern(5)