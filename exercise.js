// 1. Create a variable to store your name. (10 pts)
// var name = "Symonn Jaemur B. Ang"
// console.log(`My name is ${name}`);

// 2. Create a variable using let to store your age, but store it as a string, not a number. (10 pts)
// let age = "10";
// console.log(`My age is ${age}`);

// 3. Create a constant PI with the value 3.1416 and try reassigning it — observe the error. (10 pts)
// const PI = 3.1416;
// //PI = 4.1111;
// console.log(PI);

// // 4. Create variable boolean isStudent, but set it dynamically to true if your age is less than 25, otherwise false. (10 pts)
// let age = "10";
// let isStudent = (age < 25) ? true : false;
// console.log(isStudent);

// // 5. Create An object person with nested properties. (10 pts)
// const person = {
//     name: "John",
//     age: 30,
//     gender: "Male"

// }

// person.country = "US";
// person.city = "NYC";

// console.log(person.country);

// // 6. An array colors containing at least 5 color names (include at least one repeated value). (10 pts)
// const colors = ["Blue", "Red", "Yellow", "Orange", "Blue"];
// console.log(`${colors[0]}, ${colors[1]}`);

// 1. Reverse and Transform (20 pts)
// let fruits = ["apple", "orange", "grapes"];
// let reversedArray = [];
// let upperCased = [];

// for (let i = 0; i < fruits.length; i++) {
//     let reversedWord = "";
//     let uppercaseWord = fruits[i].toUpperCase();
//     upperCased[i] = uppercaseWord;

//     for (let l = fruits[i].length - 1; l >= 0; l--) {
//         reversedWord += fruits[i][l];

//     }
//     reversedArray[i] = reversedWord;
//     console.log(`${fruits[i]} to: ${reversedArray[i]} and ${upperCased[i]}`)
// }

// 2. Filtering and Counting (20 pts)
let numbers = [12, 45, 67, 23, 90, 32, 11, 9, 28];
let newNum = [];
let n = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0 && numbers[i] > 20) {
        newNum[n] = numbers[i];
        n++;
    }
}
console.log(`Found ${newNum.length} numbers: `);
for (num of newNum) {
    console.log(num);
}