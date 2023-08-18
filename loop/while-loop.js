let i = 1
let ans = 0
while (i <= 10) {
    ans += i
    i +=1
}
// console.log(ans);


for (let i = 1; i <= 25; i++){
    if (i%2 == 0) {
    // console.log(i);
    }
}


// let userInput
// while (! userInput) {
//     userInput = alert("enter your name")
// }
// console.log("hello", +userInput + "!");


let num = 0;
let num1 = 1;
let count = 10;
let fiboniacl = [num,num1]
while (fiboniacl.length <count) {
    let nexNum = num + num1;
    fiboniacl.push(nexNum)
    num = num1
    num1 = nexNum
}
// console.log(fiboniacl);

let str = "aditya"
let reversed = ""
let index = str.length - 1
while (index >= 0) {
    reversed += str[index]; index--;
}
console.log(reversed);


let targetNumber = 6
let roll = 4
while (true) {
    let roll = Math.floor(Math.random()* 6) + 1;
    roll++;
    console.log("roll #"+ roll+":"+roll);
    if (roll ===targetNumber) {
        console.log("target number is rolled");
        break;
    }
}

let nnum = 1
let summ = 0
while (nnum <= 10) {
    summ += nnum;
    nnum++;
}console.log(summ);