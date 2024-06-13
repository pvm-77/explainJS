# Closure Exercises 

[leetcode](https://leetcode.com/studyplan/30-days-of-javascript/)




### 1. Write a function createHelloWorld. It should return a new function that always returns "Hello World".
<details>
    <summary>Examples</summary>
    
```bash
Input: args = []
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f(); // "Hello World"

Input: args = [{},null,42]
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f({}, null, 42); // "Hello World"
```
</details>


Any arguments could be passed to the function but it should still always return "Hello World".


<details>
    <summary>Starter Code</summary>

```js
/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return function(...args) {
        
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */

```
</details>

***************************************************************************************************

### 2.Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

<details>
    <summary>Examples</summary>

    ```bash
Example 1:
Input: n = 10 
["call","call","call"]

Output: [10,11,12]

Explanation: 
counter() = 10 // The first time counter() is called, it returns n.
counter() = 11 // Returns 1 more than the previous time.
counter() = 12 // Returns 1 more than the previous time.

Example 2:
Input: n = -2
["call","call","call","call","call"]

Output: [-2,-1,0,1,2]

Explanation: counter() initially returns -2. Then increases after each sebsequent call.
```
    
</details>
 


<details>
    <summary>Starter Code</summary>

```js
/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let increment=0
    return function() {
        return n+
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

```


</details>

******************************************************************************************************

### 3.Write a function `expect` that helps developers test their code. It should take in any value `val` and return an object with the following two functions.
- `toBe(val)` accepts another value and returns `true` if the two values `===` each other. If they are not equal, it should throw an error `"Not Equal"`.
  
- `notToBe(val)` accepts another value and returns `true` if the two values `!==` each other. If they are equal, it should throw an error `"Equal"`.

<details>
    <summary>Examples</summary>
    
```bash
Example 1:

Input: func = () => expect(5).toBe(5)

Output: {"value": true}

Explanation: 5 === 5 so this expression returns true.

Example 2:

Input: func = () => expect(5).toBe(null)

Output: {"error": "Not Equal"}

Explanation: 5 !== null so this expression throw the error "Not Equal".

Example 3:

Input: func = () => expect(5).notToBe(null)

Output: {"value": true}

Explanation: 5 !== null so this expression returns true.

```
</details>



<details>
    <summary> Starter Code</summary>

```js
        /**
         * @param {string} val
         * @return {Object}
        */
        var expect = function(val) {
    
        };

        /**
     * expect(5).toBe(5); // true
     * expect(5).notToBe(5); // throws "Equal"
        */
```

</details>
 
****************************************************************************************************

### 4.Write a function `createCounter`. It should accept an initial integer `init`. It should return an object with three functions.
The three functions are:

- `increment()` increases the current value by 1 and then returns it.
- `decrement()` reduces the current value by 1 and then returns it.
- `reset()` sets the current value to `init` and then returns it.

<details>
    <summary>Examples</summary>

```bash
Example 1:

Input: init = 5, calls = ["increment","reset","decrement"]

Output: [6,5,4]

Explanation:
const counter = createCounter(5);
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4


Example 2:

Input: init = 0, calls = ["increment","increment","decrement","reset","reset"]

Output: [1,2,1,0,0]

Explanation:
const counter = createCounter(0);
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
counter.reset(); // 0
counter.reset(); // 0
```
</details>
 


<details>
    <summary>Starter code</summary>

```js

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {

    return {

    }
    
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
```
</details>

********************************************************************************

### 5. Given a function fn, return a memoized version of that function.

A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

You can assume there are 3 possible input functions: sum, fib, and factorial.

sum accepts two integers a and b and returns a + b. Assume that if a value has already been cached for the arguments (b, a) where a != b, it cannot be used for the arguments (a, b). For example, if the arguments are (3, 2) and (2, 3), two separate calls should be made.
fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.

<details>
    <summary>Examples</summary>

```bash
Example 1:

Input:
fnName = "sum"
actions = ["call","call","getCallCount","call","getCallCount"]
values = [[2,2],[2,2],[],[1,2],[]]
Output: [4,4,1,3,2]
Explanation:
const sum = (a, b) => a + b;
const memoizedSum = memoize(sum);
memoizedSum(2, 2); // "call" - returns 4. sum() was called as (2, 2) was not seen before.
memoizedSum(2, 2); // "call" - returns 4. However sum() was not called because the same inputs were seen before.
// "getCallCount" - total call count: 1
memoizedSum(1, 2); // "call" - returns 3. sum() was called as (1, 2) was not seen before.
// "getCallCount" - total call count: 2
Example 2:

Input:
fnName = "factorial"
actions = ["call","call","call","getCallCount","call","getCallCount"]
values = [[2],[3],[2],[],[3],[]]
Output: [2,6,2,2,6,2]
Explanation:
const factorial = (n) => (n <= 1) ? 1 : (n * factorial(n - 1));
const memoFactorial = memoize(factorial);
memoFactorial(2); // "call" - returns 2.
memoFactorial(3); // "call" - returns 6.
memoFactorial(2); // "call" - returns 2. However factorial was not called because 2 was seen before.
// "getCallCount" - total call count: 2
memoFactorial(3); // "call" - returns 6. However factorial was not called because 3 was seen before.
// "getCallCount" - total call count: 2
Example 3:

Input:
fnName = "fib"
actions = ["call","getCallCount"]
values = [[5],[]]
Output: [8,1]
Explanation:
fib(5) = 8 // "call"
// "getCallCount" - total call count: 1
```
    
</details>


<details>
    <summary>Starter Code</summary>

```js
/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    
    return function(...args) {
        
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */
```
</details>

### 6.Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

The function composition of an empty list of functions is the identity function f(x) = x.

You may assume each function in the array accepts one integer as input and returns one integer as output.

<details>
    <summary>Examples</summary>

```bash
Example 1:

Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
Output: 65
Explanation:
Evaluating from right to left ...
Starting with x = 4.
2 * (4) = 8
(8) * (8) = 64
(64) + 1 = 65
Example 2:

Input: functions = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1
Output: 1000
Explanation:
Evaluating from right to left ...
10 * (1) = 10
10 * (10) = 100
10 * (100) = 1000
Example 3:

Input: functions = [], x = 42
Output: 42
Explanation:
The composition of zero functions is the identity function

```  
</details>


<details>
    <summary>Starter Code</summary>

```js
/**
* @param {Function[]} functions
* @return {Function}
*/
var compose = function(functions) {
    
    return function(x) {
        
    }
};

/**
* const fn = compose([x => x + 1, x => 2 * x])
* fn(4) // 9
*/

```

</details>

*************************************************************************************************
*************************************************************************************************

# MCQs

### 1. What will be the output of the following code?
<details>
    <summary>code</summary>

```js

(function() {
    var a = b = 5;
})();
console.log(b);

```
</details>

<details>
    <summary>options</summary>

    A. 5
B. undefined
C. ReferenceError: b is not defined
D. TypeError: b is not a function

</details>
<details>
    <summary>Reason</summary>

    **Reason**: The expression var a = b = 5; assigns 5 to b without using var, making b a global variable. Hence, console.log(b); outputs 5.

</details>

*********************************************************************************************
### 2. What will be the output of the following code?

<details>
    <summary>code</summary>

       
```js

for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
}
```

</details>

<details>
    <summary>options</summary>


A. 0 1 2
B. 3 3 3
C. 0 0 0
D. undefined undefined undefined


</details>
<details>
    <summary>Reason</summary>

    The correct answer is B. 3 3 3.

This is because the `setTimeout` function is asynchronous, so when it is called, it does not execute immediately. Instead, it schedules the function to be executed after a specified delay. In this case, the function is scheduled to be executed three times, but the value of `i` is not captured at the time the function is scheduled. Instead, the value of `i` is captured at the time the function is executed, which is after the loop has finished and `i` has been incremented to 3. Therefore, the output is `3 3 3`.

</details>

*********************************************************************************************
### 3. How can you fix the loop issue in question 2 to print 0 1 2?
<details>
    <summary>code</summary>

</details>

<details>
    <summary>options</summary>
    A. Use let instead of var.
    B. Use an IIFE to capture the value of i.
    C. Use setInterval instead of setTimeout.
    D. Both A and B.

</details>
<details>
    <summary>Reason</summary>

    To fix the loop issue and print 0 1 2, you can either use let instead of var or use an Immediately Invoked Function Expression (IIFE) to capture the value of i.
Using let
```js
for (let i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}
```
Using let creates a new block-scoped variable for each iteration of the loop, ensuring that the correct value of i is captured for each setTimeout function.
Using an IIFE:
```js
for (var i = 0; i < 3; i++) {
  (function(i) {
    setTimeout(function() {
      console.log(i);
    }, 1000);
  })(i);
}
```
The IIFE captures the value of i for each iteration of the loop and passes it to the inner function, ensuring that the correct value is used when the setTimeout function is executed.
Both solutions will output 0 1 2 to the console.

</details>

*********************************************************************************************
### 4. What will be the output of the following code?
<details>

    ```js

var x = 10;
(function() {
    console.log(x);
    var x = 20;
    console.log(x);
})();
```

</details>

<details>
    <summary>options</summary>
    A. 10 20
B. undefined 20
C. undefined undefined
D. ReferenceError: x is not defined

</details>
<details>
    <summary>Reason</summary>

    because the variable x is declared with var in the outer scope, and the IIFE does not capture the value of x from the outer scope. Instead, the IIFE creates a new scope, and the var x = 20 declaration inside the IIFE shadows the outer scope's x variable. Therefore, the first console.log(x) statement logs undefined, and the second console.log(x) statement logs 20

    The key concepts used to solve this problem are:
    Variable Scope: Understanding the difference between global, function, and block scope is crucial in determining the behavior of variables declared with var and let.
    Variable Hoisting: var declarations are hoisted to the top of their scope and initialized with undefined, while let declarations are not fully hoisted and cannot be accessed before their declaration.
    Immediately Invoked Function Expression (IIFE): An IIFE creates a new scope, which can affect the behavior of variables declared inside it.
    Shadowing: When a variable with the same name is declared in a nested scope, it shadows the variable in the outer scope.
    The tags for these concepts are:
    #VariableScope
    #VariableHoisting
    #IIFE
    #Shadowing

</details>

*********************************************************************************************
### 5. Consider the following module pattern. Which of the following statements is true?
<details>
    <summary>code</summary>

```js

var Module = (function() {
    var privateVar = "I am private";
    function privateMethod() {
        return privateVar;
    }
    return {
        publicMethod: function() {
            return privateMethod();
        }
    };
})();

console.log(Module.publicMethod());
console.log(Module.privateVar);
```

</details>

<details>
    <summary>options</summary>


A. I am private and I am private
B. I am private and undefined
C. undefined and undefined
D. ReferenceError: privateMethod is not defined

</details>
<details>
    <summary>Reason</summary>

    The code defines a module with a private variable privateVar and a private method privateMethod. The public method publicMethod returns the result of calling privateMethod. When publicMethod is called, it correctly returns the value of privateVar.
However, when trying to access privateVar directly, it is undefined because it is not accessible from outside the module. The privateVar is only accessible within the module, and the publicMethod is the only way to access its value.
The key concepts used to solve this problem are:
Encapsulation: The module encapsulates its private variables and methods, making them inaccessible from outside the module.
Access Control: The module controls access to its private variables and methods through the public method publicMethod.
Module Pattern: The code uses the module pattern to create a self-contained module with private and public parts.
The tags for these concepts are:
#Encapsulation
#AccessControl
#ModulePattern

</details>

*********************************************************************************************
###  6. What will be the output of the following code?
<details>
    <summary>code</summary>

    ```js

function createCounter() {
    let count = 0;
    return {
        increment: function() {
            count += 1;
            return count;
        },
        decrement: function() {
            count -= 1;
            return count;
        }
    };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1.increment());
console.log(counter1.increment());
console.log(counter2.increment());
```

</details>

<details>
    <summary>options</summary>

    A. 1 2 3
B. 1 2 1
C. 2 3 1
D. 1 1 1

</details>
<details>
    <summary>Reason</summary>



The createCounter function returns an object with increment and decrement methods. Each time increment is called, it increments the count variable and returns the new value. Each time decrement is called, it decrements the count variable and returns the new value.
The counter1 and counter2 variables are separate instances of the createCounter function, each with its own count variable. Therefore, when counter1 is incremented twice, it increments its own count variable, and when counter2 is incremented once, it increments its own count variable.
The output is:
counter1.increment() increments counter1's count to 1.
counter1.increment() increments counter1's count to 2.
counter2.increment() increments counter2's count to 1.
The key concepts used to solve this problem are:
Closure: The createCounter function returns an object with methods that capture the count variable from the outer scope, creating a closure.
Separate Instances: Each call to createCounter creates a new instance of the counter, with its own count variable.
The tags for these concepts are:
#Closure
#SeparateInstances

</details>

*********************************************************************************************

###   7. What will be the output of the following code?
<details>
    <summary>code</summary>

    ```js

let f;
{
    let o = { note: "Safe" };
    f = function() { return o; };
}
let o = { note: "Not safe" };
console.log(f().note);
```

</details>

<details>
    <summary>options</summary>

    A. Safe
B. Not safe
C. undefined
D. ReferenceError: o is not defined

</details>
<details>
    <summary>Reason</summary>


The correct answer is "Safe".
The code defines a function f that returns the object o created in the block scope. The object o is defined before the function f is assigned, so f captures the reference to o at the time it is defined.
Later, when o is reassigned to a new object, it does not affect the object returned by f, because f still holds a reference to the original object.
Therefore, when f is called and its return value is logged, it still returns the original object with the note "Safe".
The reason for this behavior is that the function f captures the reference to the object o at the time it is defined, creating a closure. This means that f retains a reference to the original object o, even after o is reassigned.
Thesure.
Scope: The object o is defined in a block scope, which is separate from the scope where f is defined.
The tags for these concepts are:
#Closure
#Scope key concepts used to solve this problem are:
Closure: The function f captures the reference to the object o at the time it is defined, creating a closure.
Scope: The object o is defined in a block scope, which is separate from the scope where f is defined.
The tags for these concepts are:
#Closure
#Scope

</details>

*********************************************************************************************

###  8. Which statement about closures is true?

<details>
    <summary>code</summary>

</details>

<details>
    <summary>options</summary>

    A. Closures only have access to their own local variables.
B. Closures have access to variables from their own scope and the global scope only.
C. Closures have access to their own scope, the scope of the outer function(s), and the global scope.
D. Closures cannot access variables from their outer function's scope.


</details>
<details>
    <summary>Reason</summary>


The correct answer is C. Closures have access to their own scope, the scope of the outer function(s), and the global scope.
A closure is a function that has access to its own scope and the scope of the outer functions in which it was defined. This means that a closure can access variables from its own scope, as well as from the scope of the outer functions, and even from the global scope.

function outer() {
    let x = 10;

    function inner() {
        console.log(x);
    }

    return inner;
}

const innerFunc = outer();
innerFunc(); // Output: 10

In this example, the inner function has access to the variable x from the outer function's scope, even after the outer function has returned. This is because inner is a closure that captures the scope of outer at the time it was defined.
The key concepts used to solve this problem are:
Closure: A closure is a function that has access to its own scope and the scope of the outer functions in which it was defined.
Scope: A scope is the region of the code where a variable is defined and accessible.
Lexical Environment: A lexical environment is the environment in which a function is defined, which includes the variables and functions that are accessible to that function.
The tags for these concepts are:
#Closure
#Scope
#LexicalEnvironment

</details>

*********************************************************************************************

### 9. What will be the output of the following code?

<details>
    <summary>code</summary>

    ```js

var foo = 1;
(function() {
    console.log(foo);
    var foo = 2;
    console.log(foo);
})();
```

</details>

<details>
    <summary>options</summary>


A. 1 2
B. undefined 2
C. undefined undefined
D. ReferenceError: foo is not defined

</details>
<details>
    <summary>Reason</summary>


The correct answer is B. undefined 2.
The reason for this output is due to variable hoisting and scope in JavaScript.
When the code is executed, the JavaScript engine first hoists the var declarations to the top of their respective scopes. In this case, the var foo declaration inside the IIFE (Immediately Invoked Function Expression) is hoisted to the top of the function scope. However, the assignment foo = 2 is not hoisted.
So, the code is interpreted as:
var foo = 1;
(function() {
    var foo;
    console.log(foo); // Output: undefined
    foo = 2;
    console.log(foo); // Output: 2
})();

ined.
The tags for these concepts are:
#VariableHoisting
#Scope

The first console.log(foo) statement inside the IIFE accesses the foo variable in its own scope, which is undefined due to hoisting. The second console.log(foo) statement correctly outputs 2 because the assignment foo = 2 has been executed by that point.
The key concepts used to solve this problem are:
Variable Hoisting: var declarations are hoisted to the top of their respective scopes, but initializations are not.
Scope: The IIFE creates a new scope, which is separate from the global scope where var foo = 1 is defined.
The tags for these concepts are:
#VariableHoisting
#Scope

</details>

*********************************************************************************************

###  10. What is the value of x after the following code executes?

<details>
    <summary>code</summary>

    ```js

var x = 5;
(function() {
    var x = 10;
})();
```

</details>

<details>
    <summary>options</summary>


A. 5
B. 10
C. undefined
D. ReferenceError: x is not defined

</details>
<details>
    <summary>Reason</summary>

        The correct answer is A. 5.
The code defines a variable x with the value 5 in the global scope. Then, it defines an IIFE (Immediately Invoked Function Expression) that declares a new variable x with the value 10 within its scope.
The key concept here is variable hoisting. The var x = 10 declaration inside the IIFE is hoisted to the top of the function scope, but the assignment x = 10 is not. Therefore, the x variable inside the IIFE is initially undefined.
When the IIFE is executed, it does not affect the global x variable, which remains 5.
The tags for this concept are:
#VariableHoisting
</details>

*********************************************************************************************

### 11. What will be the output of the following code?

<details>
    <summary>code</summary>

    ```js

(function(x) {
    return (function(y) {
        console.log(x);
    })(2);
})(1);
```

</details>

<details>
    <summary>options</summary>

    A. 1
B. 2
C. undefined
D. ReferenceError: x is not defined

</details>
<details>
    <summary>Reason</summary>

</details>

*********************************************************************************************

### 12. What will be the output of the following code?

<details>
    <summary>code</summary>

    ```js

var globalVar = "global";
(function() {
    console.log(globalVar);
    var globalVar = "local";
    console.log(globalVar);
})();
```

</details>

<details>
    <summary>options</summary>

    A. global local
B. undefined local
C. local local
D. ReferenceError: globalVar is not defined

</details>
<details>
    <summary>Reason</summary>

</details>

*********************************************************************************************
### 13. What will be the output of the following code?

<details>
    <summary>code</summary>

    ```js

** imp question
let a = 10;
(function() {
    console.log(a);
    a = 20;
    console.log(a);
})();
console.log(a);

```

</details>

<details>
    <summary>options</summary>

    A. 10 20 10
B. 10 20 20
C. undefined 20 10
D. ReferenceError: a is not defined

</details>
<details>
    <summary>Reason</summary>

</details>

*********************************************************************************************

### 14. What will be the output of the following code?

<details>
    <summary>code</summary>

    ```js

for (let i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
}
```

</details>

<details>
    <summary>options</summary>

    A. 0 1 2
B. 3 3 3
C. 0 0 0
D. undefined undefined undefined

</details>
<details>
    <summary>Reason</summary>

</details>

*********************************************************************************************
### 15. What is the primary advantage of using an IIFE?

<details>
    <summary>code</summary>

    

</details>

<details>
    <summary>options</summary>

    A. It enhances code readability.
B. It provides better performance.
C. It creates a new scope to avoid polluting the global namespace.
D. It automatically creates closures.

</details>
<details>
    <summary>Reason</summary>

</details>

*********************************************************************************************
### 16. What will be the output of the following code?

<details>
    <summary>code</summary>

    ```js

(function() {
    var a = b = 3;
})();

console.log(typeof a);
console.log(typeof b);
```

</details>

<details>
    <summary>options</summary>

    A. undefined number
B. undefined undefined
C. number number
D. number undefined

</details>
<details>
    <summary>Reason</summary>

</details>

*********************************************************************************************
### 17. What will be the output of the following code?

<details>
    <summary>code</summary>

    ```js

(function() {
    console.log(typeof foo);
    var foo = "Hello";
    console.log(typeof foo);
})();
```

</details>

<details>
    <summary>options</summary>

    A. undefined string
B. undefined undefined
C. string string
D. ReferenceError: foo is not defined

</details>
<details>
    <summary>Reason</summary>

</details>

*********************************************************************************************
###  18. What will be the output of the following code?

<details>
    <summary>code</summary>

    ```js
var x = 10;
(function() {
    console.log(x);
    x = 20;
})();
console.log(x);
```

</details>

<details>
    <summary>options</summary>

    A. 10 10
B. 10 20
C. undefined 20
D. ReferenceError: x is not defined

</details>
<details>
    <summary>Reason</summary>

</details>

*********************************************************************************************
### 19. Which of the following statements about let and var is true?

<details>
    <summary>code</summary>

</details>

<details>
    <summary>options</summary>

    A. Both let and var have function scope.
B. let has block scope, while var has function scope.
C. Both let and var have block scope.
D. let has function scope, while var has block scope.

</details>
<details>
    <summary>Reason</summary>

</details>

*********************************************************************************************
###  20. What will be the output of the following code?

<details>
    <summary>code</summary>

    ```js

var foo = "bar";
(function() {
    console.log(foo);
    var foo = "baz";
    console.log(foo);
})();
```

</details>

<details>
    <summary>options</summary>


A. bar baz
B. undefined baz
C. baz baz
D. ReferenceError: foo is not defined

</details>
<details>
    <summary>Reason</summary>

</details>

*********************************************************************************************
### 21. What will be the output of the following code?

<details>
    <summary>code</summary>

    ```js

let x = 5;
{
    let x = 10;
}
console.log(x);
```

</details>

<details>
    <summary>options</summary>

    A. 5
B. 10
C. undefined
D. ReferenceError: x is not defined

</details>
<details>
    <summary>Reason</summary>

</details>

*********************************************************************************************
### 22. What will be the output of the following code?

<details>
    <summary>code</summary>

    ```js

let x = 5;
(function() {
    let x = 10;
    console.log(x);
})();
console.log(x);
```

</details>

<details>
    <summary>options</summary>

    A. 5 5
B. 10 5
C. 5 10
D. undefined undefined

</details>
<details>
    <summary>Reason</summary>

</details>

*********************************************************************************************
### 23. What will be the output of the following code?

<details>
    <summary>code</summary>

```js

var x = 5;
function foo() {
    x = 10;
    return;
    function x() {}
}
foo();
console.log(x);
```
</details>


<details>
    <summary>options</summary>
    A. 5
    B. 10
    C. undefined
    D. ReferenceError: x is not defined

</details>

<details>
    <summary>Reason</summary>

</details>


### 24. What will be the output of the following code?

<details>
    <summary>code</summary>

```js

let x = 5;
function foo() {
    x = 10;
    return;
    function x() {}
}
foo();
console.log(x);
```

</details>



<details>
    <summary>options</summary>
    A. 5
    B. 10
    C. undefined
    D. ReferenceError: x is not defined

</details>

<details>
    <summary>Reason</summary>
    Reason: Inside the function foo, x is re-declared as a local variable due to the function x() {} declaration. This local x shadows the global x. The assignment x = 10 affects the local x, not the global x. Therefore, console.log(x); logs the original global value, 5.

</details>


**********************************************************************************************
**********************************************************************************************

[Question from stack overflow](https://stackoverflow.com/questions/65149031/javascript-variable-is-not-updating-inside-function)



### explain the reason for output 

```js
let number = 100
 
function change(number) {
    number = number * 10;
}
 
change(number);
 
console.log(number);


```
```js

let number = 100
 
function change(blah) {
    number = number * 10;
}
 
change(number);
 
console.log(number);

```

*************************************************************************************************

[from linkedin interview blogpost](https://www.linkedin.com/pulse/top-10-tricky-javascript-questions-i-used-ask-interviews-amit-pal/)

### find the output
```js
console.log('bar:',bar);
bar=15;
var foo=1;
console.log("foo",foo,"bar",bar);
var bar;
```

### find the output
```js
greetings();
var greetings=function (){
    console.log('first greetings');
}
greetings();
function greetings(){
    console.log('second greetings');
}



greetings();
```


### find the output
```js
var variable=10;
(()=>{
    console.log(variable);
    variable=20;
    console.log(variable);
})()

console.log(variable);
var variable=30;
```

### find the output

```js
var variable=10;
(()=>{
    variable_3=35;
    console.log(variable_3);
    var variable_3=45;
    variable_2=15;
    console.log(variable);
})()
console.log(variable_2)
console.log(variable_3);
var variable=30;

```


# My Friend Interview ask questions 

//TODO


# my Code Examples

//TODO


# Here are few Javascript topics which are frequently asked
🔍 Execution Context

📚 Callstack

🔢 Data types (Especially Arrays, Objects, Strings)

🔄 Array and Object methods

🔗 let/var/const

🕳️ Hoisting, Temporal Dead Zone

🚫 Illegal shadowing

🔍 Scope, Scope chaining

🔄 Mutable/Immutable data types

🔍 Shallow and Deep copy

🌐 DOM (DOM methods) and BOM

📝 Critical Rendering Path

🔧 Functions

📄 Function Declaration

🗣️ Function Expression

🔄 Functional Programming

➡️ Arrow Functions

📦 IIFE


🔑 this keyword


➡️ Arrow function and this keyword


📞 Call, Apply, Bind


🔒 Closure and its uses


🔄 Callbacks, Callback Hell


🔮 Promises, promise chaining
⏳ Async/Await
🔄 Callbacks vs promises vs async/await

🍛 Currying

🛠️ Debouncing and Throttling

🔍 Event Propagation

🔵 Bubbling

🎣 Capturing

📦 Event Delegation

📘 Prototype and Prototypal Inheritance

🧠 Memoization

🌀 Generator Functions

🔄 Event Loop, Microtasks, Macrotasks

🎉 Events: DOMContentLoaded, load, beforeunload, unload

⏩ async/defer

🩹 Polyfills (Mostly asked polyfills: Promise, Promise.all, Promise.any, Promise.race, Promise.
allSettled, call, apply, bind, map, reduce, filter, forEach, flat, fetch API)

🌐 Web APIs

⏲️ setTimeout, setInterval

🔄 High Order Functions

🔧 Working of JS Engine

https://www.linkedin.com/posts/mohd-aman_this-js-interview-question-explores-variable-activity-7193829491213807616-gcuE/
var foo=1

(function (){
    console.log(foo)
    foo=2;
    console.log(foo)
    var foo=3
    console.log(window.foo)
})()









https://www.testgorilla.com/blog/advanced-javascript-interview-questions/?utm_term=&utm_campaign=PerformanceMax%20IN&utm_source=google&utm_medium=cpc&hsa_acc=4932434860&hsa_cam=14325551646&hsa_grp=&hsa_ad=&hsa_src=x&hsa_tgt=&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gclid=CjwKCAjwjqWzBhAqEiwAQmtgT_RvGoVNBFbofs0Ds0juUbOSpqrZ4dfpah_8UsokmnbtlN_cNwcsWxoCcmIQAvD_BwE&gad_source=1
1. Please tell me what equality means in JavaScript.

2. Can you explain what IIFEs refer to in JavaScript?

3. Please explain what the bind() function does in JavaScript.

4. Could you tell us the difference between const and Object.freeze() in JavaScript?

5. Please explain what generators are in JavaScript.

6. Can you explain what hoisting is in JavaScript?

7. Please explain what the prototype design pattern does in JavaScript.

8. Could you tell me what the temporal dead zone is in ES6?

9. What is the primary difference between map() and forEach()?

10. Please explain the difference between null and undefined variables.

11. Can you tell me the difference between WeakMap and ES6 maps?

12. Please explain whether JavaScript is a pass-by-value or pass-by-reference language.

13. Please tell me your best advanced JavaScript soft skill.

14. Please tell us your best advanced technical JavaScript skill.

15. Could you tell us what closures do in JavaScript?

16. Can you tell us what the close() function does in JavaScript?

17. Please tell us what imports are in JavaScript.

18. Please tell us what exports are in JavaScript.

19. Can you explain the use of strict JavaScript directives?

20. Please explain what typecasting means in JavaScript.

21. Please tell us the main primitive data types in JavaScript.

22. Could you tell us what you know about the different pop-up boxes in JavaScript?

23. Can you explain what event bubbling means in JavaScript?

24. Please explain the key differences between the ES5 function and ES6 class constructors.

https://www.geeksforgeeks.org/javascript-interview-questions-and-answers/#javascript-interview-questions-for-experienced


https://www.linkedin.com/pulse/top-5-javascript-interview-questions-sde-deshaw-sharpener-tech/?trackingId=b47A4WCNQ0WhUIf%2BJa1%2FvA%3D%3D



https://www.linkedin.com/pulse/tricky-javascript-interview-questions-part-ii-amit-pal/



https://www.greatfrontend.com/questions/quiz/explain-event-delegation?fpr=yangshun



https://interviewing.io/linkedin-interview-questions


Here are top 40 Javascript questions that are frequently asked in Frontend interviews -

𝟭-𝟭𝟬: 𝗕𝗮𝘀𝗶𝗰𝘀 𝗼𝗳 𝗝𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁

1. What is JavaScript?
2. Explain the difference between let, const, and var.
3. How does hoisting work in JavaScript?
4. Describe the concept of closures.
5. Explain the event loop in JavaScript.
6. What is the difference between == and ===?
7. How do you check the type of a variable in JavaScript?
8. What is the use of the this keyword in JavaScript?
9. Explain the difference between function declaration and function expression.
10. How does the setTimeout function work?

𝟭𝟭-𝟮𝟬: 𝗙𝘂𝗻𝗰𝘁𝗶𝗼𝗻𝘀 𝗮𝗻𝗱 𝗦𝗰𝗼𝗽𝗲

11. What is a callback function?
12. Explain the concept of a pure function.
13. Describe the differences between function.call, function.apply, and function.bind.
14. What is the purpose of the arguments object in a function?
15. How do you create a closure in JavaScript?
16. What is the use of the bind method?
17. What is the difference between a shallow copy and a deep copy?
18. How does the call stack work in JavaScript?
19. Explain the concept of function currying.
20. How can you avoid callback hell in JavaScript?

𝟮𝟭-𝟯𝟬: 𝗢𝗯𝗷𝗲𝗰𝘁𝘀 𝗮𝗻𝗱 𝗣𝗿𝗼𝘁𝗼𝘁𝘆𝗽𝗲𝘀

21. What is prototypal inheritance?
22. How do you create an object in JavaScript?
23. What is the purpose of the prototype property in JavaScript?
24. Explain the difference between Object.create and the constructor pattern.
25. How do you add a property to an object in JavaScript?
26. What is the hasOwnProperty method used for?
27. How can you prevent modification of object properties in JavaScript?
28. Describe the use of the new keyword.
29. Explain the concept of Object Destructuring in JavaScript.
30. What is the difference between null and undefined?

𝟯𝟭-𝟰𝟬: 𝗗𝗢𝗠 𝗠𝗮𝗻𝗶𝗽𝘂𝗹𝗮𝘁𝗶𝗼𝗻 𝗮𝗻𝗱 𝗘𝘃𝗲𝗻𝘁𝘀

31. What is the DOM?
32. How do you select elements with Vanilla JavaScript?
33. Explain event delegation in JavaScript.
34. What is the purpose of the addEventListener method?
35. How do you create and remove elements in the DOM?
36. Explain the concept of event propagation.
37. How can you prevent the default behaviour of an event?
38. What is the purpose of the data- attribute in HTML?
39. Describe the difference between innerHTML and textContent.
40. How do you handle asynchronous code in JavaScript?
https://www.linkedin.com/pulse/javascript-output-based-interview-questions-sanjay-kumar/

https://testerops.com/javascript-interview-questions-part-2-2/


https://www.linkedin.com/posts/arunm-engineer_most-asked-js-interview-questions-activity-7174620754347524096-Psz2/

https://soniapahuja75.medium.com/interview-questions-related-to-objects-in-js-f4ca31a0f941