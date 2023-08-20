
function pattern(n) {
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
    console.log(star);
  }
}
pattern(4);