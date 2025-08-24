// 1. Write a function updatePerson(id, person) that replaces the matching person’s properties with the new data.

let persons = [
  { id:1, name: "Alice", age: 28},
  { id:2, name: "Bob", age: 22},
  { id:3, name: "Charlie", age: 30}
];


function updatePerson(id, person) {
  for (i = 0; i < persons.length; i++) {
    if (persons[i].id === id) {
      persons[i] = { ...persons[i], ...person };
    }
  }
}

updatePerson(2, { name: "Robert", age: 26 });
console.log(persons);


// 2. Write a function named isValidPassword that receives a string as parameter and returns a boolean verifying that the string:
// has at least 3 uppercase letters 
// has at least a digit
// has at least a symbol from the following _, !, ?, *

// function isValidPassword(password) {
//         let upperCaseCount = 0;
//         let hasDigit = false;
//         let hasSymbol = false;
//         const symbols = ["_", "!", "?", "*"];

       
//         for (i = 0; i < password.length; i++) {
//          if (password[i] >= 'A' && password[i] <= 'Z') {
//             upperCaseCount++;
//          }

//          if (password[i] >='0' && password[i] <= '9') {
//             hasDigit = true;
//          }

//          if (symbols.includes(password[i])) {
//             hasSymbol = true;
//          }
         
//         }
       
//     const hasThreeUpperCase = upperCaseCount >= 3;
//     return hasThreeUpperCase && hasDigit && hasSymbol;
       
// }

// console.log(isValidPassword("PASsword123!")); //true
// console.log(isValidPassword("pass")); //false


// 3. Write a function named areValuesUnique that receives an Array of numbers as parameter.
// The function should return a boolean verifying if the array contains only unique numbers.

// function areValuesUnique(numbers) {
    
//     for (let i = 0; i < numbers.length; i++) {
//         for (let j = i + 1; j < numbers.length; j++) {
//             if (numbers[i] === numbers[j]) {
//                 return false;
//             }
//         }
//   }
//   return true;

// }

// console.log(areValuesUnique([1, 2, 3, 4])); // true
// console.log(areValuesUnique([1, 2, 2, 4])); // false