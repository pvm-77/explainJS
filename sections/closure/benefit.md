
<!-- something to back to main readme file -->

## benefit of closure


1. **data encapsulation**
   
 Closures allow you to create private 
 variables and functions. By defining variables 
 within a function's scope, they cannot be accessed or 
 modified from outside the function. This helps in data
  encapsulation, preventing accidental interference with critical data.


```js
// without closure
let count = 0; // Not encapsulated; accessible from outside
function incrementCounter() {
  count++;
  return count;
}

console.log(incrementCounter()); // Output: 1
console.log(incrementCounter()); // Output: 2
console.log(count); // Output: 2 (count is accessible from outside the function)

// with closure
function createCounter() {
  let count = 0; // Private variable encapsulated within the closure
  return function() {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(count); // Error: count is not defined (private variable)


```

2. **stateful functions**
 Closures enable functions to maintain and access 
their own unique state. You can create functions that remember 
previous invocations and use the stored data for future calls. 
This is particularly useful when dealing with event handlers 
or asynchronous operations.

```js
function createCounter(){
    let count=0; //private variable encap within closure
    return function(){
        count++;
        return count;
    }
}

const counter1=createCounter()
const counter2=createCounter();
console.log(counter1())
console.log(counter1())
console.log(counter2()) // counter2 has its own indepenedent state
```

3. **callback and async operations**
 Closures are commonly used in asynchronous programming and event handling. They allow you to capture the current state and context of a function so that it can be executed correctly when an event or callback occurs.

 ```js
 function delayMessage(message, delay) {
  setTimeout(function() {
    console.log(message);
  }, delay);
}

delayMessage("Hello!", 1000); // Output: "Hello!" after 1 second

 ```

4. **function factories**
Closures can be used to create function factories, meaning you can create and return specialized functions with predefined behavior based on the environment in which they were created. This promotes code reusability and modularity.
```js

function createMultiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15

```

5. **currying**
 Closure-based currying allows you to create new functions by partially applying arguments to an existing function. This technique can be useful for creating reusable functions with varying behavior based on the provided arguments.
```js

function add(x) {
  return function(y) {
    return x + y;
  };
}

const addFive = add(5);
console.log(addFive(3)); // Output: 8

```
6. **memory efficiency**
Closures can optimize memory usage by allowing functions to retain access to shared variables instead of creating new copies of those variables each time the function is called.
```js

function createCounter() {
  let count = 0; // Private variable encapsulated within the closure
  return function() {
    count++;
    return count;
  };
}

// Without closures (individual counters with separate state)
function incrementCounter1() {
  let count = 0; // Separate variable for each function call
  count++;
  return count;
}

function incrementCounter2() {
  let count = 0; // Separate variable for each function call
  count++;
  return count;
}

console.log(incrementCounter1()); // Output: 1
console.log(incrementCounter1()); // Output: 1 (starts from 1 again)
console.log(incrementCounter2()); // Output: 1 (starts from 1 again)

// With closures (multiple counters share the same state)
const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1()); // Output: 1
console.log(counter1()); // Output: 2 (incremented from previous state)
console.log(counter2()); // Output: 1 (counter2 has its own independent state)

```
7. **modular programming**
Closures facilitate modular programming by allowing you to define self-contained units of behavior that can be used independently or combined with other parts of your application.
```js

// Without closures (non-modular)
let total = 0;

function add(num) {
  total += num;
}

function subtract(num) {
  total -= num;
}

function getTotal() {
  return total;
}

add(5);
subtract(2);
console.log(getTotal()); // Output: 3

// With closures (modular)
function createCalculator() {
  let total = 0; // Private variable encapsulated within the closure

  return {
    add: function(num) {
      total += num;
    },
    subtract: function(num) {
      total -= num;
    },
    getTotal: function() {
      return total;
    }
  };
}

const calculator = createCalculator();
calculator.add(5);
calculator.subtract(2);
console.log(calculator.getTotal()); // Output: 3


```

While closures can offer these benefits, it's essential to use them judiciously and be mindful of potential memory leaks, as retaining references to variables can lead to increased memory consumption if not managed properly.


