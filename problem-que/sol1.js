// let n = 10
  //logic for print aa pattern 
  //let use loop for row as well as colum also 
// for (let row = 1; row <= n; row +=1){
    //task
    //task is concatence "*"
    let str =""
    for (let col = 1; col <= n; col +=1){
        str += "*";
    }
    // console.log(str);
// }
//let use of multlipe chance use fumction

// function pattern(n) {
  //logic for print aa pattern
  //let use loop for row as well as colum also
  for (let row = 1; row <= n; row += 1) {
    //task
    //task is concatence "*"
    let str = "";
    for (let col = 1; col <= n; col += 1) {
      str += "*";
    }
    // console.log(str);
  }
// }
// pattern(3)
// pattern(4)
// pattern(5)

function pattern2() {
    for (let row = 1; row <= 1; row += 1) {
      //task
      //task is concatence "*"
      let str = "";
      for (let col = 1; col <= row; col += 1) {
        str += "*";
      }
      console.log(str);
    }
}
pattern2(3)