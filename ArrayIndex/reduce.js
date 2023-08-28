
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function sum(prev, acc) {
    // console.log(prev,acc);
    return prev + acc
}

const result = arr.reduce(sum)
// console.log(result);

let cart = [{ price: 100000, name: "Iphone" }, { price: 800, name: "backcover" }, { price: 201, name: "temp" }]
function addPrices(prev, cur) {
    let newPrice = prev.price + cur.price;
    return { price: newPrice }
    
}
const value = cart.reduce(addPrices)
console.log(value,value.price);