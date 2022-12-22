// Array initialization
var arr = [1, 2, 3, 4];

//1. at() Function retrieve an element from array
console.log(arr.at(2)); // 3

//2. push() Function add new values 
arr.push(5); 
console.log(arr);

//3. pop() Function remove final index value
arr.pop(); // removed 5
console.log(arr);

// fill all values as 10
// arr.fill(10);
// console.log(arr);


//4. join() Function return string representation of an array
console.log(arr.join(' ')+5);


//5. shift() Function removes the first element from the array
arr.shift();
console.log(arr);


//6. unshift () Function adding values in begginnig and returning the length
console.log(arr.unshift(10, 20),"is the length");
console.log(arr);


// 7. reverse() function reverse the valules of the array
arr.reverse();
console.log(arr);


// 8. incluedes() function check a particular element is availble or not
var avail = arr.includes(10);
console.log(avail);






