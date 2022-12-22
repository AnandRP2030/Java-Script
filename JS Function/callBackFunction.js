// Call Back Function
// call back function is a function that is passed as an argument
// to antoher function and is executed after some kind of events.


var findSum = (num1, num2, num3, sum, callback) => {

    if (callback (num1)){
        sum += num1;
    }
    if (callback (num2)){
        sum += num2;
    }
    if (callback (num3)){
        sum += num3;
    }
    return sum;
}

checkEven = (num) => {
    return num % 2 == 0;
}

console.log(findSum(2, 5, 10, 0, checkEven));


// 2nd example => check password, 

isValidPassword = (password, callback) => {

    // check password is valid or not
    var length8 = callback(password);

    if (length8){
        console.log(`Password is valid`);
        return true;
    }
    console.log(`Password is invalid`);
    return false;
}

// pass length >= 8 then its valid
checkPasswordLength = (pass) => {
    return pass.length >= 8;
} 

console.log(`Password is `+isValidPassword("abcdef", checkPasswordLength));

