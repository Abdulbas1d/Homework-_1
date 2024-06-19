// 1-Misol

// function someWords(words) {
//     return words
//         .filter(word => word.length >= 5)
//         .map(word => word.toUpperCase());
// }

// const wordsArray = ['apple', 'pear', 'banana', 'kiwi', 'grape', 'melon'];
// const result = someWords(wordsArray);
// console.log(result);





// 2-Misol

// function findStudent20(students) {
//     const student = students.find(student => student.age > 20);
//     return student ? student.name.toUpperCase() : null;
// }

// const studentsArray = [
//     { name: 'Shokir', age: 40 },
//     { name: 'Bobo', age: 22 },
//     { name: 'Xurshid', age: 28 },
//     { name: 'Davron', age: 23 }
// ];

// const result = findStudentOver20(studentsArray);
// console.log(result);





// 3-Misol

// function highProducts(prices) {
//     return prices
//         .filter(price => price > 100)
//         .reduce((total, price) => total + price, 0);
// }

// const productPrices = [50, 150, 200, 90, 100, 80, 180];
// const total = highProducts(productPrices);
// console.log(total);





// 4-Misol

// function checkNumbers(array) {
//     const allPositive = array.every(num => num > 0);
//     const hasLargeNumber = array.some(num => num > 100);
    
//     if (allPositive && hasLargeNumber) {
//         return "All numbers are positive. There is a large number.";
//     } else if (allPositive) {
//         return "All numbers are positive.";
//     } else {
//         return "There are non-positive numbers.";
//     }
// }

// const number1 = [10, 50, 120, 30, 5];
// const number2 = [10, -50, 60, 30, 5];
// const number3 = [10, 50, 60, 30, 5];

// console.log(checkNumbers(number1));
// console.log(checkNumbers(number2));
// console.log(checkNumbers(number3));





// 5-Misol

// function calculate(arr) {
//     return arr.map(num => num * num);
// }
// function logElements(arr) {
//     arr.forEach(num => console.log(num));
// }
// const number = [1, 2, 3, 4, 5];

// const numbers = calculate(number);

// logElements(numbers);





// 6-Misol

// function newTotalSalary(salaries) {
//     let filteredSalaries = salaries.filter(salary => salary > 2000);

//     let increasedSalaries = filteredSalaries.map(salary => salary * 0.10);

//     let totalNewSalary = increasedSalaries.reduce((accumulator, current) => accumulator + current, 0);

//     return totalNewSalary;
// }

// let employeeSalaries = [1500, 2500, 3000, 1800, 2200];
// console.log(newTotalSalary(employeeSalaries));





// 7-Misol

// const students = [
//     { name: 'Alisher', age: 20, grade: 85 },
//     { name: 'Bobo', age: 22, grade: 75 },
//     { name: 'Charos', age: 23, grade: 95 },
//     { name: 'Davronbek', age: 21, grade: 60 },
//     { name: 'Ilhom', age: 24, grade: 82 }
// ];

// function getFirstStudentWithAtLeast80(students) {
//     const student = students.find(student => student.grade >= 80);
//     if (student) {
//         return { name: student.name, age: student.age };
//     } else {
//         return null;
//     }
// }

// function getNamesOfStudents80(students) {
//     return students
//         .filter(student => student.grade > 80)
//         .map(student => student.name.toUpperCase());
// }

// const firstStudent = getFirstStudentWithAtLeast80(students);
// console.log(firstStudent);

// const namesAbove80 = getNamesOfStudents80(students);
// console.log(namesAbove80);





// 8-Misol

// function convertToUpperCase(str) {
//     return str.toUpperCase();
// }

// const inputString = "hello world";
// const upperCaseString = convertToUpperCase(inputString);
// console.log(upperCaseString);





// 9-Misol

// function containsSubstring(mainString, substring) {
//     return mainString.includes(substring);
// }

// const mainString = "Hello, welcome to the world of JavaScript!";
// const substring = "welcome";
// const result = containsSubstring(mainString, substring);
// console.log(result);





// 10-Misol

// function replaceJavaScriptWithJS(str) {
//     return str.replace(/JavaScript/g, 'JS');
// }

// const inputString = "I love JavaScript! JavaScript is versatile.";
// const result = replaceJavaScriptWithJS(inputString);
// console.log(result);





// 11-Misol

// function reverseWords(str) {
//     const words = str.split(' ');

//     const reversedWords = words.reverse();

//     const reversedString = reversedWords.join(' ');

//     return reversedString;
// }

// const inputString = "Hello world how are you";
// const reversedString = reverseWords(inputString);
// console.log(reversedString);





// 12-Misol

// function removeWhitespace(str) {
//     return str.trim();
// }

// const inputString = "   Hello,   world!   ";
// const trimmedString = removeWhitespace(inputString);
// console.log(trimmedString);