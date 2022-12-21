//1. Anonyoumus function

// A function without name is called anonyoums function
// Function stored in a variable do not need function name
// They are always invoked (called) using the variable name

const x = function (a, b){
    return a * b;
}
console.log("Anonyoumous function");
console.log(x(3, 4));


// 2. Function Constructor
// Functions can also be defined with a built-in javascript function constructor Function();

const sum = new Function ("x", "y", "return x + y");
console.log("constructor function sum");
console.log(sum(10, 24));


// 3. Function Hoisting
// JS functions can called before it's declared
// Hoisting is JS default behaviour of moving declaration to the top of current scope

printNum(4);

function printNum(num){
    console.log("hoisting", num);
};


// 4. Self Invoking Function
// A self invoking expression invoked, without being called
// if the expression is followed by ().
(function (){
    console.log("Iam a anonymous self invoked function");
})();


// 5. Functions are Object
// print the number of argumenst
function retArguments (a, b, c){
    return arguments.length;
}

console.log(`The arguments.length return the number of arguments received when the function is invoked`);
console.log(retArguments(1,3,4)," toatl arguments");


// 5.2 return function as a string
funtionString = () =>{
    return "print whole function";
}

console.timeLog(funtionString.toString());



//6. Arrow Function 
// Arrow Functions are introduced in ES6;
// Arrow functions allowd as write shorted syntax
// Arow functions are not hoisted

arowFunction1 = () => {
    console.log("I am also an arrow function");
}

arowFunction1();


// 6.1 if function has only one statement remove bracket and return value
arowFunction = () => "I am a another arow function";

console.log(arowFunction());


// 6.2 arrow function with parametes

checkEven = (num) => {
    return num % 2 === 0;
} 
console.log(" 5 is a even number "+checkEven(5));


// 6.3 if arrow function has only one parameter then parenthisis is optional

sayName = val => "my name is "+val;

var name = sayName("Anand");
console.log(name);