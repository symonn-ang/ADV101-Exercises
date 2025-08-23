// warm up exercises

// 1. Use map to get only the names from an array of objects.
let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

const getName = users.map((users) => {
    return users.name;
})

console.log(getName);
//  Result: ["Alice", "Bob"]
console.log()
// 2. Using .filter(), filter people with age 18 and above.
  let people = [
  { name: "Tom", age: 16 },
  { name: "Jerry", age: 18 },
  { name: "Spike", age: 22 }
];

const profile = people.filter(product => product.age >= 18) 
console.log(profile);
console.log()
//  Result: [{name:"Jerry", age:18}, {name:"Spike", age:22}]

// 3. Use reduce: Find the oldest person in the list.
let people1 = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 32 },
  { name: "Charlie", age: 29 }
];

const oldest = people1.reduce((oldestPerson, currentPerson) => {
    if (currentPerson.age > oldestPerson.age) {
        return currentPerson
    } else {
        return oldestPerson
    }
})

console.log(oldest);

//  Result: { name: "Bob", age: 32 }