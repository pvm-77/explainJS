# how js engine processes our program before it runs?


# how scope works in javascript?
js program first parsed/compiled in one phase then in another phase it got executed
the code author' decision on where to place variables,functions and the blocks with respect to each other are analyzed according to the rules of scope ,during parsing/compilation phase 
the resulting scope structure is generally unaffected by the runtime conditions

the processing of js programs ocuurs in 2 phase
it is observable fact 
3 program charactersit to prove this
syntax errors early errors and hoisting

# how js engine identifies variable and determine the scope of a program as it is compiled?
other than declarations all oocurences of variables/identifier in a program serve one of 2 role target of an assignment or source of a value


what is scope chain
The connections between scopes that are nested within other scopes is called the scope chain, which determines the path along which variables can be accessed. The chain is directed, meaning the lookup moves upward/outward only















# scope closure iife and related 


Multiple-Choice Questions
### 1. What will be the output of the following code?

```js

(function() {
    var a = b = 5;
})();
console.log(b);

```

A. 5
B. undefined
C. ReferenceError: b is not defined
D. TypeError: b is not a function

**Reason**: The expression var a = b = 5; assigns 5 to b without using var, making b a global variable. Hence, console.log(b); outputs 5.

******************************************************************

2. What will be the output of the following code?
```js

for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
}
```
A. 0 1 2
B. 3 3 3
C. 0 0 0
D. undefined undefined undefined

The correct answer is B. 3 3 3.

This is because the `setTimeout` function is asynchronous, so when it is called, it does not execute immediately. Instead, it schedules the function to be executed after a specified delay. In this case, the function is scheduled to be executed three times, but the value of `i` is not captured at the time the function is scheduled. Instead, the value of `i` is captured at the time the function is executed, which is after the loop has finished and `i` has been incremented to 3. Therefore, the output is `3 3 3`.

*****************************************************************************

### 3. How can you fix the loop issue in question 2 to print 0 1 2?
A. Use let instead of var.
B. Use an IIFE to capture the value of i.
C. Use setInterval instead of setTimeout.
D. Both A and B.

To fix the loop issue and print 0 1 2, you can either use let instead of var or use an Immediately Invoked Function Expression (IIFE) to capture the value of i.
Using let
for (let i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}
Using let creates a new block-scoped variable for each iteration of the loop, ensuring that the correct value of i is captured for each setTimeout function.
Using an IIFE:
for (var i = 0; i < 3; i++) {
  (function(i) {
    setTimeout(function() {
      console.log(i);
    }, 1000);
  })(i);
}
The IIFE captures the value of i for each iteration of the loop and passes it to the inner function, ensuring that the correct value is used when the setTimeout function is executed.
Both solutions will output 0 1 2 to the console.

**************************************************************************

### 4. What will be the output of the following code?
```js

var x = 10;
(function() {
    console.log(x);
    var x = 20;
    console.log(x);
})();
```
A. 10 20
B. undefined 20
C. undefined undefined
D. ReferenceError: x is not defined

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

********************************************************************

### 5. Consider the following module pattern. Which of the following statements is true?
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
A. I am private and I am private
B. I am private and undefined
C. undefined and undefined
D. ReferenceError: privateMethod is not defined



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

*********************************************************************************************************

### 6. What will be the output of the following code?
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
A. 1 2 3
B. 1 2 1
C. 2 3 1
D. 1 1 1

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

***********************************************************************************************************

### 7. What will be the output of the following code?
```js

let f;
{
    let o = { note: "Safe" };
    f = function() { return o; };
}
let o = { note: "Not safe" };
console.log(f().note);
```
A. Safe
B. Not safe
C. undefined
D. ReferenceError: o is not defined

The correct answer is "Safe".
The code defines a function f that returns the object o created in the block scope. The object o is defined before the function f is assigned, so f captures the reference to o at the time it is defined.
Later, when o is reassigned to a new object, it does not affect the object returned by f, because f still holds a reference to the original object.
Therefore, when f is called and its return value is logged, it still returns the original object with the note "Safe".
The reason for this behavior is that the function f captures the reference to the object o at the time it is defined, creating a closure. This means that f retains a reference to the original object o, even after o is reassigned.
The key concepts used to solve this problem are:
Closure: The function f captures the reference to the object o at the time it is defined, creating a closure.
Scope: The object o is defined in a block scope, which is separate from the scope where f is defined.
The tags for these concepts are:
#Closure
#Scope


********************************************************************************************************

### 8. Which statement about closures is true?
A. Closures only have access to their own local variables.
B. Closures have access to variables from their own scope and the global scope only.
C. Closures have access to their own scope, the scope of the outer function(s), and the global scope.
D. Closures cannot access variables from their outer function's scope.

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

*****************************************************************************************************

### 9. What will be the output of the following code?
```js

var foo = 1;
(function() {
    console.log(foo);
    var foo = 2;
    console.log(foo);
})();
```
A. 1 2
B. undefined 2
C. undefined undefined
D. ReferenceError: foo is not defined

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


The first console.log(foo) statement inside the IIFE accesses the foo variable in its own scope, which is undefined due to hoisting. The second console.log(foo) statement correctly outputs 2 because the assignment foo = 2 has been executed by that point.
The key concepts used to solve this problem are:
Variable Hoisting: var declarations are hoisted to the top of their respective scopes, but initializations are not.
Scope: The IIFE creates a new scope, which is separate from the global scope where var foo = 1 is defined.
The tags for these concepts are:
#VariableHoisting
#Scope

******************************************************************************************************


### 10. What is the value of x after the following code executes?
```js

var x = 5;
(function() {
    var x = 10;
})();
```
A. 5
B. 10
C. undefined
D. ReferenceError: x is not defined

The correct answer is A. 5.
The code defines a variable x with the value 5 in the global scope. Then, it defines an IIFE (Immediately Invoked Function Expression) that declares a new variable x with the value 10 within its scope.
The key concept here is variable hoisting. The var x = 10 declaration inside the IIFE is hoisted to the top of the function scope, but the assignment x = 10 is not. Therefore, the x variable inside the IIFE is initially undefined.
When the IIFE is executed, it does not affect the global x variable, which remains 5.
The tags for this concept are:
#VariableHoisting

*******************************************************************************************************

### 11. What will be the output of the following code?
```js

(function(x) {
    return (function(y) {
        console.log(x);
    })(2);
})(1);
```
A. 1
B. 2
C. undefined
D. ReferenceError: x is not defined
**********************************************************************************************************

### 12. What will be the output of the following code?
```js

var globalVar = "global";
(function() {
    console.log(globalVar);
    var globalVar = "local";
    console.log(globalVar);
})();
```
A. global local
B. undefined local
C. local local
D. ReferenceError: globalVar is not defined
***********************************************************************************************************

### 13. What will be the output of the following code?
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
A. 10 20 10
B. 10 20 20
C. undefined 20 10
D. ReferenceError: a is not defined


**************************************************************************************************************

### 14. What will be the output of the following code?
```js

for (let i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
}
```
A. 0 1 2
B. 3 3 3
C. 0 0 0
D. undefined undefined undefined

**************************************************************************************************************

### 15. What is the primary advantage of using an IIFE?
A. It enhances code readability.
B. It provides better performance.
C. It creates a new scope to avoid polluting the global namespace.
D. It automatically creates closures.
**************************************************************************************************************
### 16. What will be the output of the following code?
```js

(function() {
    var a = b = 3;
})();

console.log(typeof a);
console.log(typeof b);
```
A. undefined number
B. undefined undefined
C. number number
D. number undefined

*************************************************************************************************************

## 17. What will be the output of the following code?
```js

(function() {
    console.log(typeof foo);
    var foo = "Hello";
    console.log(typeof foo);
})();
```
A. undefined string
B. undefined undefined
C. string string
D. ReferenceError: foo is not defined

*****************************************************************************************************************

### 18. What will be the output of the following code?
```js
var x = 10;
(function() {
    console.log(x);
    x = 20;
})();
console.log(x);
```
A. 10 10
B. 10 20
C. undefined 20
D. ReferenceError: x is not defined

****************************************************************************************************************

### 19. Which of the following statements about let and var is true?
A. Both let and var have function scope.
B. let has block scope, while var has function scope.
C. Both let and var have block scope.
D. let has function scope, while var has block scope.

****************************************************************************************************************

### 20. What will be the output of the following code?
```js

var foo = "bar";
(function() {
    console.log(foo);
    var foo = "baz";
    console.log(foo);
})();
```
A. bar baz
B. undefined baz
C. baz baz
D. ReferenceError: foo is not defined

*********************************************************************************************************

### 21. What will be the output of the following code?
```js

let x = 5;
{
    let x = 10;
}
console.log(x);
```
A. 5
B. 10
C. undefined
D. ReferenceError: x is not defined

**********************************************************************************************************

### 22. What will be the output of the following code?
```js

let x = 5;
(function() {
    let x = 10;
    console.log(x);
})();
console.log(x);
```
A. 5 5
B. 10 5
C. 5 10
D. undefined undefined


***********************************************************************************************************

### 23. What will be the output of the following code?
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
A. 5
B. 10
C. undefined
D. ReferenceError: x is not defined

****************************************************************************************************************

### 24. What will be the output of the following code?
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
A. 5
B. 10
C. undefined
D. ReferenceError: x is not defined

Reason: Inside the function foo, x is re-declared as a local variable due to the function x() {} declaration. This local x shadows the global x. The assignment x = 10 affects the local x, not the global x. Therefore, console.log(x); logs the original global value, 5.

*******************************************************************************************************


### explain the reason for output 

[stack overflow](https://stackoverflow.com/questions/65149031/javascript-variable-is-not-updating-inside-function)

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
[linkedin interview blogpost](https://www.linkedin.com/pulse/top-10-tricky-javascript-questions-i-used-ask-interviews-amit-pal/)

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
`hoisting`

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
`hoisting`

`hoisting`
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
`hoisting`