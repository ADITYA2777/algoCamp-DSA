
function upperCase(n) {
     for (let row = 1; row <= n; row++) {
    //empty string
    let str = " ";
    // space star
    let space = n - row;

    for (let j = 1; j <= space; j++) {
      // when this after end this loop we need one more loop for star
      str += " ";
    }
    let star = 2*row-1;
    for (let col = 1; col <= star; col++) {   // 2 * x -1 logic  we use 
      str += "*";
         }
         console.log(str);
  }
}

function lowerCase(n) {
    //the lowerCase consist of n-1 rows
    for (let row = 1; row <= n - 1; row++) {
        //for any give no row: we have space =row
        let str = " ";
        // space star
        let space = row;
        for (let j = 1; j <= space; j++) {
            str += " ";
        }
        // by observation :2*(n-row)-1
        let star = 2 * (n - row) - 1;
        for (let k = 1; k <= star;k++){
            str += "*";
        }
        console.log(str);
    }
}

function pattern(n) {
    upperCase(n)
    lowerCase(n)
}
pattern(5)

//output

//      *
//     ***
//    *****
//   *******
//  *********
//   *******
//    *****
//     ***
//      *