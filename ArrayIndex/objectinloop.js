

let obj = {
    name: "aditya",
    age: 23,
    company: "Infosys",
    designaton: "UI-Developer",
    Salarey: 400000,
    city:"jabalpur"
}

//loop for of

for (const keys of Object.entries(obj)) {
    console.log(keys);
}


// loop for in

for (const keys in obj) {
    console.log(`${keys}:${obj[keys]}`);
}

let keysofx = Object.keys(obj) //its will return array of keys of obj
console.log(keysofx);

let valueofx = Object.values(obj)//it will return array of values of obj
console.log(valueofx);

let fullEntery = Object.entries(obj)//it will return array of entries of object
console.log(fullEntery);
