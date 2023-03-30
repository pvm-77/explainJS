<!-- button to back -->
# topic title here

<br/><br/>

### for Passing callbacks  there are following syntax

1. Named function
   ```js
    function myCallback(data) {
    console.log(data);
    }
    getData(myCallback);
   ```
2. Anonymous function 
   ```js
    getData(function(data) {
    console.log(data);
    });
   ```
3. Arrow function
   ```js
    getData(data => {
    console.log(data);
    });
   ```

In all cases, the function being passed as a callback must accept a parameter that will receive the data passed to it by the asynchronous function.

<br/><br/>

### Code Example 

```javascript
// Asynchronous function that takes a callback
function getData(callback) {
  // Simulate a delay of 2 seconds
  setTimeout(() => {
    // Some data to be returned
    const data = {name: 'John', age: 30};
    // Call the callback function with the data
    callback(data);
  }, 2000);
}

// Call the asynchronous function with a callback
getData(data => {
  // Output the data to the console
  console.log(data); // Output: {name: 'John', age: 30}
});

// Output a message to the console
console.log('Waiting for data...'); // Output: Waiting for data...


```

<br/><br/>

### Code Example – explanation

>
1. `function getData(callback)`: This defines an asynchronous function called `getData` that takes a callback function as its argument. The `callback ` parameter represents the function that will be executed when the asynchronous operation is complete.
   
2. `setTimeout(() => { ... }, 2000)`: This simulates a delay of 2 seconds before executing the code inside the arrow function. In a real-world scenario, this delay could be caused by waiting for data to be fetched from a server or for a file to be read from disk.
   
3. `const data = {name: 'John', age: 30}`: This creates an object with two properties, `name` and `age`, to be passed to the callback function.

4. `callback(data)`: This calls the callback function with the `data` object as its argument.
   
5. `getData(data => { ... })`: This calls the `getData` function with a callback function as its argument. The arrow function receives the `data` object as its argument and logs it to the console.
   
6. `console.log('Waiting for data...')`: This outputs a message to the console before the asynchronous operation is complete.

<br/><br/>


