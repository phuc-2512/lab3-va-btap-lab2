zvar fruit = [
    ["oi", 15],
    ["xoai", 20],
    ["buoi", 15],
    ["tao", 5],
]
// console.log(fruit);

// // vòng lập for in
// for (i in fruit) {
//     console.log(i); //  in ra các vị trí của các phần tử trong mảng
// }

// // vòng lọc for of
// for (i of fruit) {
//     console.log(i); // in ra các giá của các phần tử 
// }

// thực hành xây dựng thanh search
var nameInp = prompt("Nhập tên trái cây mà bạn muốn tìm kiếm: ")

for (let i=0; i<=fruit.length; i++) {
    if (nameInp == fruit[i][0]) {
        console.log("có "+ fruit[i][i+1]+" "+ fruit[i][i]);
        
    }
    else {
        console.log("không có trái cây ");
    }
}