

let x = {name:"adityajain",age:23}
let y = {
    name: "akshay",
    age: 23,
    marks: 23
}
// note: from key u can acces value but vice-a-versa
console.log(x["name"]);
console.log(y.marks, y.name);
//in obect we can  update value 
y.name = "aman"
console.log(y.name);


x.marks = 100;//if marks is all ready persent it update other waise its add
x["company"] = "Google";
console.log(x);
console.log(y);

// delete key value pair
// we can use delete operater along with  object.key

delete x.age
console.log(x);

