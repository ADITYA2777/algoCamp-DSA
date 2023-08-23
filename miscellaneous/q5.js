
// pattern
function pattern (n) {
    for (row = 1; row <= n; row ++){
        // space or empty str also write 
        str = "";
        space = n - row;
        for (let i = 1; i <= space;i++ ){
            str += " ";
        }
        let counter = 1;
        for (let k = 1; k <= row;k++){
            str += counter;
            counter++;
        }
        let counter2 = row-1
        for (let s = 1; s <= row - 1; s++){
            str += counter2;
            counter2--
        }
    console.log(str);
    }
}
pattern(5)