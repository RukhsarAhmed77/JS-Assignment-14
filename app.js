// JS Assignment 14

// Task 01

// function date() {
//     var now = new Date()
//     alert(now);
// }

// date()

// Task 02

// function greet() {
//     var firstName = prompt("Enter your first name")
//     var secondName = prompt("Enter your second name")

//     var fullName = firstName + " " + secondName
    
//     alert(fullName);
// }

// greet()

// Task 03

// function add(a, b) {
//     var addition = a+b;
//     return addition;
// }

// addition = add(5,0)
// alert(addition);

// Task 04

// function calculate(num1, num2, operator) {
    
//     var result;

//     if (operator === "+") {
//         result = num1 + num2;
//     } else if (operator === "-") {
//         result = num1 - num2;
//     } else if (operator === "*") {
//         result = num1 * num2;
//     } else if (operator === "/") {
//         result = num1 / num2;
//     } else {
//         return "Error";
//     }

//     return result;
// }

// result = calculate(2, 5, '*');

// alert(result);


// Task 05

// function square(x) {
//     return x*x;
// }

// var num = prompt()
// var result = square(num)
// alert(result)

// Task 06

// function factorial(){
//     var input=parseInt(prompt("give a number you want factorial of"))
//     var fact = 1
//   for (var i = 1; i <= input; i++) {
//       fact = fact * i;
//   }
//   alert(fact)
// }

// factorial()

// Task 07

// function counting(start, end) {
//     for (var i = start; i <= end; i++) {
//         console.log(i);
//     }
// }

// counting(1, 100)

// Task 09

// 01) Arguments as value

// function calculateArea(width, height) {
//     return width * height;
// }

// var area = calculateArea(5, 10);
// console.log("Area =", area);

// 02) Arguments as variables

// function calculateArea(width, height) {
//     return width * height;
// }

// var rectWidth = 7;
// var rectHeight = 12;

// var area = calculateArea(rectWidth, rectHeight);

// console.log("Area =", area);

// Task 10

// function palindrome() {
//     var userInput = prompt("Enter a palindrome:");

//     var reversedStr = userInput.split('').reverse().join('');

//     if (userInput === reversedStr) {
//         console.log('It is a palindrome');
//     } else {
//         console.log('It is not a palindrome');
//     }
// }

// palindrome()

// Task 11

// function capitalizeWords(str) {
//     var words = str.split(' ');

//     for (var i = 0; i < words.length; i++) {
//         var firstLetter = words[i].charAt(0).toUpperCase();
        
//         var restOfWord = words[i].slice(1);
        
//         words[i] = firstLetter + restOfWord;
//     }

//     return words.join(' ');
// }

// var string = "the quick brown fox jumps over the lazy dog";
// var result = capitalizeWords(string);

// console.log(result);

// Task 12

// function findLongestWord(str) {
//     var words = str.split(" ");

//     var longestWord = "";

//     for (var i = 0; i < words.length; i++) {
//         if (words[i].length > longestWord.length) {
//             longestWord = words[i];
//         }
//     }

//     return longestWord;
// }

// var string = 'Web Development Tutorial';
// var result = findLongestWord(string);

// console.log(result);

// Task 13

// function countLetter(str, letter) {
//     var count = 0;
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === letter) {
//             count++;
//         }
//     }
//     return count;
// }

// var string = "www.google.com";
// var letterToCount = "w";
// var result = countLetter(string, letterToCount);

// console.log(result);