//Reverse String
// function reverseString(str){
//     return str.split("").reverse().join("");
// }

// console.log("Reverse String - " , reverseString("hello"));

//Reverse String without using reverse()
// function reverseString(str) {
//   let reverse = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     reverse += str[i];
//   }

//   return reverse;
// }

// console.log("Reverse String - ", reverseString("hello"));

//Remove Duplicates from Array
// function duplicateString(str){
//     return Array.from(new Set(str));
// }

// const num = [1,2,2,3,4,4,5]

// console.log(duplicateString(num));

//Largest Number in Array
// function findLargest(arr) {
//   let largest = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       largest = arr[i];
//     }
//   }

//   return largest;
// }

// console.log(findLargest([10, 5, 8, 20, 3]));


//Palindrome
// function isPalindrome(str){
//     let reverse = "";

//     for(let i = str.length - 1; i>= 0; i--){
//         reverse+= str[i];
//     }
//     return str === reverse;
// }

// console.log(isPalindrome("madam"));
// console.log(isPalindrome("hello"));


//Find the Missing Number in Array
// function findMissingNumber(arr){
//     let n = arr.length+1;

//     let expectedSum = n * (n + 1) / 2;

//     let actualSum = 0;

//     for (let num of arr){
//         actualSum += num;
//     }

//     return expectedSum - actualSum;
// }

// console.log(findMissingNumber([1,2,3,5]));


//Find the Most Frequent Element in Array
// function mostFrequent(arr){

//     let count  = {};
//     let maxcount = 0;
//     let maxnumber = null ;

//     for(let num of arr){
//         count[num] = (count[num] || 0) + 1;

//         if(count[num] > maxcount){
//             maxcount = count[num];
//             maxnumber = num;
//         }
//     }

//     return maxnumber
// }

// console.log(mostFrequent([1,2,2,3,3,3,4]));


//Find Factorial of a Number
// function factorial(n){
//     let result = 1;

//     for(let i=1; i<=n; i++){
//         result = result * i;
//     }

//     return result;
// }

// console.log(factorial(5));


//Check if Two Strings are Anagrams
// function isAnagram(str1, str2){
//     let s1 = str1.split("").sort().join("");
//     let s2 = str2.split("").sort().join("");

//     return s1 === s2;
// }

// console.log(isAnagram("listen","silent"));


//Flatten a Nested Array
// function flattenArray(arr){
//     let result = [];

//     for(let i=0; i<arr.lenght; i++){
//        if(Array.isArray(arr[i])){
//         result = result.concat(flattenArray(arr[i]))
//        } else {
//         result.push(arr[i])
//        }
//     }

//     return result;
// }
// console.log(flattenArray([1,[2,3],[4,[5,6]]]));

