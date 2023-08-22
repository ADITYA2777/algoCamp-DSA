

function solve(a,b,c) {
    // ax^2 +bx + c
    let squrrRoot = Math.sqrt(b * b - 4 * a * c)
    let root1 =(-b + squrrRoot) / (2*a)
    let root2 = (-b - squrrRoot) / (2*a)
    console.log(root1 ,root2);
}
solve(2,15,3)
