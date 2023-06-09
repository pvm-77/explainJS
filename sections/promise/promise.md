# Fundamental of promise

JavaScript, Promises are used to handle asynchronous operations, and they have three states: Pending, Fulfilled, and Rejected. Here's a detailed explanation of each state:

1. `Pending`: This is the initial state of a Promise. It means that the asynchronous operation hasn't completed yet, and the Promise is waiting for a result. When a Promise is in the Pending state, it can transition to either the Fulfilled or Rejected state, depending on the outcome of the asynchronous operation.

2. `Fulfilled`: This state means that the asynchronous operation was successful, and the Promise has resolved with a value. When a Promise is in the Fulfilled state, it means that the value that was promised is now available, and any `then()` callbacks attached to the Promise will be called with the resolved value.

3. `Rejected`: This state means that an error occurred during the asynchronous operation, and the Promise has been rejected with a reason (i.e., an error message or object). When a Promise is in the Rejected state, it means that the value that was promised cannot be delivered, and any `catch()` or `then()` callbacks that are attached to the Promise will be skipped until the error is handled.

## Example code
```js
const promise = new Promise((resolve, reject) => {
  // Simulate an asynchronous operation that takes 3 seconds
  setTimeout(() => {
    const result = Math.random();

    if (result >= 0.5) {
      // Resolve the Promise with the result if it's greater than or equal to 0.5
      resolve(result);
    } else {
      // Reject the Promise with an error message if the result is less than 0.5
      reject(new Error('The result is less than 0.5'));
    }
  }, 3000);
});

promise.then((result) => {
  console.log('The Promise was fulfilled with the result:', result);
}).catch((error) => {
  console.error('The Promise was rejected with the error:', error);
});
```

## code explaination

In this example, we're creating a new Promise that simulates an asynchronous operation using `setTimeout()`. The Promise will resolve with a random number after 3 seconds, and it will be rejected with an error message if the random number is less than 0.5.

We're then attaching a `then()` method to the Promise, which will be called if the Promise is fulfilled with a result. In this method, we're logging the result to the console.

If the Promise is rejected (e.g., due to an error in the asynchronous operation), we're handling the error by logging it to the console in the `catch()` method.

Note that when the Promise is first created, it's in the Pending state. After 3 seconds, it will transition to either the Fulfilled or Rejected state, depending on the random number generated by the simulation. If the Promise is fulfilled, it will pass the result to the `then()` callback. If it's rejected, it will pass the error message to the `catch()` callback.

# How to create a promise 

in javascript we have a `construction function` called `Promise` ,with its help we can create promises in our code to handle asynchornous operations.

Promise consturctor function takes a single argument which is a function,that defines the asynchronous operations to be performed.this function takes two arguments `resolve` and `reject`.The `resolve` function is used to indicate that the asynchronous operation was successful, while the `reject` function is used to indicate that an error occurred.


Here's an example of how to create a simple Promise that resolves with a string:

```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hello, world!');
  }, 1000);
});

```
In this example, we're creating a new Promise using the Promise constructor function. We're passing a function as an argument to the constructor, which takes two parameters: resolve and reject. Inside the function, we're simulating an asynchronous operation using setTimeout(). After 1 second, the resolve() function is called with the string 'Hello, world!'.

Here's a breakdown of the key concepts involved in creating a Promise:

1. `The Promise constructor function`: This is a built-in constructor function in JavaScript that creates a new Promise object. It takes a function as its argument.

2. `The resolve function`: This is a function that's passed as an argument to the function inside the Promise constructor. It's used to indicate that the asynchronous operation was successful, and it can be called with a single argument that represents the result of the operation.

3. `The reject function`: This is a function that's also passed as an argument to the function inside the Promise constructor. It's used to indicate that an error occurred during the asynchronous operation, and it can be called with a single argument that represents the error message.

4. `The then() method`: This is a method that's called on a Promise object to handle a successful result. It takes a callback function as an argument, which is called with the resolved value of the Promise.

5. `The catch() method`: This is a method that's called on a Promise object to handle an error. It takes a callback function as an argument, which is called with the reason for the rejection (i.e., the error message).

In the example above, we're not handling the resolved value of the Promise or any errors that might occur. To do that, we could use the `then()` and `catch()` methods, like this:
```js
promise.then((result) => {
  console.log(result); // Output: 'Hello, world!'
}).catch((error) => {
  console.error(error);
});

```


Here, we're calling the `then()` method on the `promise` object, which takes a callback function as its argument. If the Promise is resolved successfully, the callback function will be called with the resolved value. We're then logging the resolved value to the console.

If an error occurs during the asynchronous operation, the `catch()` method will be called instead of the `then()` method. It takes a callback function as its argument, which will be called with the reason for the rejection (i.e., the error message). In this case, we're simply logging the error message to the console.