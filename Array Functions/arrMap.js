
//1  map iterate all values and finding sqrt of arr elements

arr = [1, 2, 3, 4];
let newArr = arr.map(Math.sqrt);
console.log(newArr);


// 2 add 10 to all elements 
add10 = (num) => {
    return num+10;
}
newArr = arr.map(add10);
console.log(newArr);



// 3
var a = arr.map(printStuff);
function printStuff  (ele, idx, arr) {

    console.log(ele," element ",idx, "idx");
    return ele;
}


// 4

const even = [2, 4, 6, 8, 10];
console.log(even.map(ele));

