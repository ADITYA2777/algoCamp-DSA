
// let make traingle

x = 60
y = 60
z= 60

if (y+z>x && x+z>y && x+y>z) {
    console.log("Trangle is obtained");

    if (x == y && y == z && z == x) {
        console.log("its equaltrial");
        
    } else if (x == y || y == z || z == x) {
        console.log("its isoslase");
        
    } else {
      console.log("its sacler");
    }
} else {
    console.log("something thing is wrong");
}