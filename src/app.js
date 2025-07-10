/*
  Write your code in the corresponding method
  Please note: You must also add the correct arguments to the methods
*/

//Exercise 1
const findFactorial = function (num) {
  //Your code here
  if (num === 1) return 1;
  else {
    return num * findFactorial(num - 1);
  }
};

//Exercise 2
const reverseString = function (str) {
  //Your code here
  if (str.length === 0) return "";
  else if (str.length === 1) {
    return str;
  } else {
    return reverseString(str.slice(1)) + str.charAt(0);
  }
};

//Exercise 3
const arr1 = [1, 2];
const arr2 = [];

const swap = function (array1, array2) {
  //Your code here
  if (array1.length === 0) {
    return array2;
  } else {
    array2.push(array1.shift());
    return swap(array1, array2);
  }
};

console.log(findFactorial(12));
console.log(reverseString("Hello World"));
swap(arr1, arr2);
console.log("arr1: [" + arr1 + "]\n" + "arr2: [" + arr2 + "]");
/* DO NOT REMOVE THE EXPORTS BELOW */
module.exports = { findFactorial, reverseString, swap };
