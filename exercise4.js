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


const promise = new Promise(function (resolve, reject) {
    const random = Math.random();
    if (random < 0.5) {
        resolve('This is my resolved data.');
    } else {
        reject('This is my rejected data.');
    }
});


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


async function myAsyncFunction() {
    try {
        const data = await promise;
        console.log(data); //success
    } catch (err) {
        console.log(err);
    } finally {
        // console.log('This will run always');
    }
}


myAsyncFunction();
   
// import sum from './add.js'; // file
// console.log(sum(1, 2), string, multiply(2, 3));
