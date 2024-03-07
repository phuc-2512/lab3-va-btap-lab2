var fruit = [
    ['oi', 20],
    ["xoai", 15],
    ["buoi", 10],
    ["hoa", 5]
]

// var i = 0;
// // while (i<=3) {
// //     console.log("I have "+ fruit[i][i+1]+" "+ fruit[i][i]);
// //     i++
// // }

// var i = 0;
// do{
//     console.log("I have "+ fruit[i][i+1]+" "+ fruit[i][i]);
// i++
// } while (i<=3)

var i = 0;
while (i<=fruit.length) {
    console.log("I have "+ fruit[i][i+1]+" "+ fruit[i][i]);
    i++;
}

// console.log(fruit);

// console.log("độ dài của mảng fruit là: "+fruit.length);

// console.log(fruit.pop());

// console.log(fruit.shift());

var myDog = {
    "name": "Ngáo",
    "legs": 4,
    "friends": ["everything!"]
}

delete myDog.name
console.log(myDog);

myDog.newName = "husky"

myDog.coler = "brown"

delete myDog.friends