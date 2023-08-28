
const arr =[1,2,3,4,5]

function square(el) {
    return el * el;
}
function cube(x){
    return x * x * x;
}

function EvenOdd(x) {
    if (x % 2 == 0) {
        return "even";
    } else {
       return "odd"
    }
}

const result = arr.map(square);
console.log(result);
const result1 = arr.map(cube);
console.log(result1);
const result2 = arr.map(EvenOdd);
console.log(result2);


const newArr = [9, 8, 7, 6, 5]

function prints(element,idx) {
    return `element at index${idx}is ${element}`
}

const total = newArr.map(prints)
console.log(total);

function customerMapper(arr,fun) {
    let result = [];
    for (let i = 0; i <= arr.length; i++){
        result.push(fun(arr[i],i))
    }
    return result;
}

const value = customerMapper(newArr, prints)
console.log(value);
