// const user = {
//   name: 'John Doe',
//   age: 30
// };


// console.log(Object.values(user));

// const entryResult = Object.entries(users);
// entryResult.forEach((keyvalue) => {
//     const [key, value] = keyvalue;
//   console.log(key, value);
// });



// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject('This is my resolved data.');
//   }, 1000);
// });


// promise.then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// }).finally(() => {
//     console.log('This will run always');
// });


// const entryResult = Object.entries(user);
// entryResult.forEach(([keyvalue]) => {
//   console.log(keyvalue[0], keyvalue[1]);
// });


// const promise = new Promise(function (resolve, reject) {
//     const random = Math.random();
//     if (random < 0.5) {
//         resolve('This is my resolved data.');
//     } else {
//         reject('This is my rejected data.');
//     }
// });


// promise.then((data) => {
//     console.log(data);
// }).catch(function (err) {
//     console.log(err);
// }).finally(() => {
//     // console.log('This will run always');
// });


// or


// async function myAsyncFunction() {
//     const result = await promise;
//     console.log(result);
// }


// async function myAsyncFunction() {
//     try {
//         const data = await promise;
//         console.log(data); //success
//     } catch (err) {
//         console.log(err);
//     } finally {
//         // console.log('This will run always');
//     }
// }


// myAsyncFunction();
   
// import sum from './add.js'; // file
// console.log(sum(1, 2), string, multiply(2, 3));

// notes ^


const userAccount = {
  name: 'John Doe',
  balance: 1000, 
};

const amountToTransfer = 500;
const amountToTransfer2 = 1200;

function checkBalance(amount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userAccount.balance >= amount) {
        console.log('Balance check confirmed.');
        resolve();
      } else {
        reject('Insufficient funds.');
      }
    }, 500);
  });
}

function deductAmount(amount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      userAccount.balance -= amount;
      console.log(`Deducted $${amount}. New balance: $${userAccount.balance}`);
      resolve();
    }, 500);
  });
}

function confirmTransaction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.2;
      if (success) {
        resolve('Transaction complete.');
      } else {
        reject('Transaction failed.');
      }
    }, 500);
  });
}

async function performTransaction(amount) {
  try {
    await checkBalance(amount);
    await deductAmount(amount);
    const result = await confirmTransaction();
    console.log(result);
  } catch (error) {
    console.log('Error:', error);
  } finally {
    console.log('Transaction process ended.');
  }
}

// performTransaction(amountToTransfer);
performTransaction(amountToTransfer2);

