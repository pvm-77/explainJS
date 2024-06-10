<!-- let us understand this object and classes -->


# `This`    
it is a special identifier keyword its special bcz its automatically defined in every scope of function 

# how to create objects in js

## METHOD 1: using object literal

```js
const user={
    name:'scriptsar',
    url:'somexyz.com',
}
console.log(user);
```
## METHOD 2: using new key word
```js
const person=new Object();
person.name='samplename';
person.age=33;
console.log(person);
```

## METHOD 3: Define an object constructor, and then create objects of the constructed type
```js
 function Person(name,age){
    this.name=name;
    this.age=age;
 }
 const p1=new Person('akjf','skfjhsd');
console.log(p1)
```


# Story of `this` keyword in javascript

## **definition**: it is a runtime binding or a mechanism that resolve when a function is invoked and what it references it determined entirely by the call-site where the function is called.

- this is a binding made for each function call/invocation  based entirely on its call site(how function is called);

**call-site** : it is the location in the code where a function is called.[not where it was declared]


## misconception about `this` keyword

- 1. **`this ` refers to the function itself**
proof that this assumption is wrong

```js
function foo(num){
    console.log('foo':num);
    // keep track how many time foo called and assume here `this` refer to foo
    this.count++; //how it is global why its value Nan
}
foo.count = 0;

var i;

for (i=0; i<10; i++) {
	if (i > 5) {
		foo( i ); //
	}
}
console.log(foo.count) //0   hence it prove this not refer to foo

````
-  2. **the meaning of `this ` somehow referes to the function's lexical scope **
```js
function foo(){
    var a=2;
}

```
# `this` binding

how `this` reference resolve at run time there are 4 rules as follows

## Rule 1. Default Binding
default binding refer to the behaviour where the `this` keyword within a function refers to the global object
when the function is invoked/called as a stand alone function that is not as method of an object or not bound to a specific context through explicit binding mechanism like call apply bind

Definition:

 when a `function is invoked` as a `standalone function`, without any explicit context provided. In such cases, the "this" keyword `within the function` refers to the `global object` (in non-strict mode) or is set to "undefined" (in strict mode).

Explanation:

When a function is called without any context, i.e., just as "functionName()", the default binding rule applies.
In non-strict mode, the "this" keyword inside the function resolves to the global object.
In strict mode, however, the default binding is not applied to the global object; instead, "this" is set to "undefined".
function foo() {
    console.log(this.a);
}

var a = 2;

foo(); // Output: 2
In this example, the function "foo" is invoked without any explicit context, so the default binding rule applies. As a result, "this.a" inside "foo" refers to the global variable "a", printing its value, which is 2.

Definition breakdown:

Default Binding: A behavior where "this" refers to the global object when a function is invoked as a standalone function.
"this": The keyword "this" refers to the context within which a function is invoked.
Binding: The association between a function and its execution context, determining the value of "this".

## 2. implicit binding 

implicit binding refers to the automatic binding of the `this` keyword within a function to the object to the left of the dot when a method is invoked/called

Definition:
Implicit binding occurs when a function is called as a method of an object, where the object to the left of the dot becomes the context for the "this" keyword within the function

Explanation:

When a function is invoked as a method of an object, the object containing the method is implicitly bound to "this" within the function.
The value of "this" is determined dynamically at runtime based on how the function is called.
Implicit binding allows methods to access and manipulate the properties of the object they are called on.
var person = {
    name: "John",
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};

person.greet(); // Output: Hello, my name is John

In this example, the method "greet" is invoked on the "person" object. Within the "greet" function, "this" refers to the "person" object because "greet" is called as a method of "person". Therefore, when "greet" accesses "this.name", it gets the value of the "name" property from the "person" object.

Definition breakdown:

Implicit Binding: A behavior where "this" refers to the object to the left of the dot when a function is called as a method of that object.
"this": The keyword "this" refers to the context within which a function is invoked.
Binding: The association between a function and its execution context, determining the value of "this".

## edge cases
1. only last level of an object property reference chain matters to the call site
```js
function foo() {
	console.log( this.a );
}

var obj2 = {
	a: 42,
	foo: foo
};

var obj1 = {
	a: 2,
	obj2: obj2
};

obj1.obj2.foo(); // 42

```
- 2. implicitly lost
  implicily bound function loses binding fallback to default binding to global or undefined

```js
function foo() {
	console.log( this.a );
}

var obj = {
	a: 2,
	foo: foo
};

var bar = obj.foo; // function reference/alias!

var a = "oops, global"; // `a` also property on global object

bar(); // "oops, global"


```
Even though bar appears to be a reference to obj.foo, in fact, it's really just another reference to foo itself. Moreover, the call-site is what matters, and the call-site is bar(), which is a plain, un-decorated call and thus the default binding applies.

- 3.  passing a callback function 
```js

function foo() {
	console.log( this.a );
}

function doFoo(fn) {
	// `fn` is just another reference to `foo`

	fn(); // <-- call-site!
}

var obj = {
	a: 2,
	foo: foo
};

var a = "oops, global"; // `a` also property on global object

doFoo( obj.foo ); // "oops, global"
```
Parameter passing is just an implicit assignment, and since we're passing a function, it's an implicit reference assignment, so the end result is the same as the previous snippet.

What if the function you're passing your callback to is not your own, but built-in to the language? No difference, same outcome.
oter scenarios
- Callback Functions in Event Handlers
- Iterating Over Object Properties
- Using Arrow Functions within Object Methods
var obj = {
    a: 2,
    foo: () => {
        console.log(this.a); // `this` in arrow functions refers to the enclosing lexical scope
    }
};

obj.foo();

var a = "oops, global"; // `a` also a property on the global object

In this example, when foo is defined using an arrow function, this inside foo refers to the enclosing lexical scope, which is the global scope. Therefore, this.a does not refer to the a property of obj, but to the global a property.


Passing Object Methods as Event Handlers:

<button id="myButton">Click me!</button>

<script>
var obj = {
    a: 2,
    foo: function() {
        console.log(this.a);
    }
};

// Attaching obj.foo as an event handler to the button
document.getElementById('myButton').addEventListener('click', obj.foo);

var a = "oops, global"; // `a` also a property on the global object
</script>

In this example, when obj.foo is used as an event handler for the button click event, it loses its implicit binding to obj, and this.a inside foo refers to the global object instead of obj.

Using Object Methods as Arguments for Array Methods:
var obj = {
    a: 2,
    foo: function() {
        console.log(this.a);
    }
};

var arr = [obj.foo, obj.foo];

arr[0](); // Lost binding here
arr[1](); // Lost binding here

var a = "oops, global"; // `a` also a property on the global object
In this example, when obj.foo is stored in an array and then called as a function, it loses its implicit binding to obj, and this.a inside foo refers to the global object instead of obj.
















1. explicit binding

Explicit binding refers to the process of manually setting the context for the "this" keyword within a function using methods like call, apply, or bind.

Definition:
Explicit binding occurs when the context for the "this" keyword within a function is explicitly specified using methods such as call, apply, or bind.
Explanation:
With explicit binding, you can explicitly specify the object to which "this" should refer inside a function.
Methods like call, apply, and bind allow you to pass a specific object as the context for "this" when calling a function.
Explicit binding allows for greater control over the value of "this" within a function, regardless of how it's called.
```js
var person1 = {
    name: "John"
};

var person2 = {
    name: "Alice"
};

function greet() {
    console.log("Hello, my name is " + this.name);
}

greet.call(person1); // Output: Hello, my name is John
greet.call(person2); // Output: Hello, my name is Alice
```
In this example, the function "greet" is invoked using the "call" method, which allows us to explicitly specify the context (the object to the left of the dot) for "this". When "greet.call(person1)" is called, "this" inside "greet" refers to "person1", and when "greet.call(person2)" is called, "this" refers to "person2". Therefore, "greet" accesses the "name" property of the respective objects.

Definition breakdown:

Explicit Binding: A process where the context for the "this" keyword within a function is manually specified using methods like call, apply, or bind.
"this": The keyword "this" refers to the context within which a function is invoked.
Binding: The association between a function and its execution context, determining the value of "this".


explicit binding does not offer solution for loosing `this` binding

but explicit biding another pattern called as hard bindin can solve the problem



```js
function foo() {
	console.log( this.a );
}

var obj = {
	a: 2
};

var bar = function() {
	foo.call( obj );
};

bar(); // 2
setTimeout( bar, 100 ); // 2

// `bar` hard binds `foo`'s `this` to `obj`
// so that it cannot be overriden
bar.call( window ); // 2


```


Let's examine how this variation works. We create a function bar() which, internally, manually calls foo.call(obj), thereby forcibly invoking foo with obj binding for this. No matter how you later invoke the function bar, it will always manually invoke foo with obj. This binding is both explicit and strong, so we call it hard binding

### another hard binding pattern
here we wrap afunction with a hard binding creates a pass through
of any arguments and any returnd value recived;

wrap a function to hard binding code


# order of rules applies 

- default binding rule is least precedence
- implicit or explicit which is more precedence
```js

function foo() {
  console.log(this.a);
  
}

var obj1={
  a:2,
  foo:foo,
}
var obj2={
  a:3,
  foo:foo
}

obj1.foo()
obj2.foo()
obj1.foo.call(obj2)
obj2.foo.call(obj1)
```
So, explicit binding takes precedence over implicit binding, which means you should ask first if explicit binding applies before checking for implicit binding.


- what about new binding









# exception to the rules



# lexical this
arrow function does not abide by above 4 rules
arrow function adopt the this binding from the enclosing(function or global ) scope




# MCQ

What does the call-site refer to in JavaScript?

A) The location in code where a function is declared
B) The location in code where a function is executed
C) The location in code where a function is defined
D) The location in code where a function is imported


Which of the following terms is used to describe the stack of functions that have been called to reach the current point in execution?

A) Call-stack
B) Call-site
C) Context-stack
D) Scope-chain


In JavaScript, what is the primary use of the this keyword?

A) To declare variables
B) To define functions
C) To access properties and methods within a function /
D) To handle asynchronous operations


Which rule of this binding applies when a function is called without any explicit context provided?

A) Implicit Binding
B) Explicit Binding
C) Default Binding
D) Hard Binding


What happens to the this binding when a function is invoked with the new operator?

A) It is set to the global object
B) It is set to the object containing the function
C) It is set to the newly constructed object //
D) It is set to undefined


Which method can be used to explicitly specify the context for this when invoking a function in JavaScript?

A) execute()
B) invoke()
C) call()
D) perform()


What does hard binding in JavaScript involve?

A) Creating a new object and setting it as the context for a function call
B) Forcibly invoking a function with a specific context
C) Dynamically determining the context for a function call
D) Automatically assigning the global object as the context for a function call



1. new binding

new binding refers to the behaviour where the `this` keyword within a constructor call of the function refers to the newly created instance of the object


Definition:
New binding occurs when a function is used as a constructor with the "new" keyword, and the "this" keyword within the constructor function refers to the newly created instance of the object.

Explanation:

When a function is invoked as a constructor with the "new" keyword, a new object is created, and "this" within the constructor function refers to that new object.
Constructor functions are typically used to create multiple instances of objects with similar properties and methods.
New binding allows the constructor function to initialize and set properties on the newly created object.

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log("Hello, my name is " + this.name + " and I'm " + this.age + " years old.");
    };
}

var john = new Person("John", 30);
var alice = new Person("Alice", 25);

john.greet(); // Output: Hello, my name is John and I'm 30 years old.
alice.greet(); // Output: Hello, my name is Alice and I'm 25 years old.




ChatGPT
Certainly, let's provide a clear explanation for new binding similar to the ones provided for default, implicit, and explicit binding:

New binding refers to the behavior where the "this" keyword within a constructor function refers to the newly created instance of the object.

Definition:
New binding occurs when a function is used as a constructor with the "new" keyword, and the "this" keyword within the constructor function refers to the newly created instance of the object.

Explanation:

When a function is invoked as a constructor with the "new" keyword, a new object is created, and "this" within the constructor function refers to that new object.
Constructor functions are typically used to create multiple instances of objects with similar properties and methods.
New binding allows the constructor function to initialize and set properties on the newly created object.
Example:

javascript
Copy code
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log("Hello, my name is " + this.name + " and I'm " + this.age + " years old.");
    };
}

var john = new Person("John", 30);
var alice = new Person("Alice", 25);

john.greet(); // Output: Hello, my name is John and I'm 30 years old.
alice.greet(); // Output: Hello, my name is Alice and I'm 25 years old.
In this example, the function "Person" is used as a constructor with the "new" keyword to create two instances of the "Person" object, "john" and "alice". Inside the "Person" constructor function, "this" refers to the newly created instance of the object being constructed. Therefore, when "john" and "alice" are created, their respective "name" and "age" properties are set based on the arguments passed to the constructor.

Definition breakdown:

New Binding: A behavior where the "this" keyword within a constructor function refers to the newly created instance of the object.
"this": The keyword "this" refers to the context within which a function is invoked.
Binding: The association between a function and its execution context, determining the value of "this".





Which utility method is provided by ES5 for hard binding a function to a specific context?

A) bind()
B) attach()
C) connect()
D) link()


When does implicit binding occur in JavaScript?

A) When a function is called using the new operator
B) When a function is invoked as a method of an object
C) When a function is called without any context provided
D) When a function is declared inside another function



How does explicit binding differ from implicit binding in JavaScript?

A) Explicit binding is automatic, while implicit binding requires manual intervention
B) Explicit binding sets the context for this based on the call-site, while implicit binding relies on the surrounding code structure
C) Explicit binding allows you to directly specify the context for a function call, while implicit binding relies on the object context
D) Explicit binding is used for asynchronous operations, while implicit binding is used for synchronous operations


Which rule of this binding is applied when a function is called with a context object?

A) Default Binding
B) Implicit Binding
C) Explicit Binding
D) Hard Binding


What happens to the this binding when a function is called with the new operator?

A) It is set to the global object
B) It is set to the object containing the function
C) It is set to the newly constructed object
D) It is set to undefined


What is hard binding in JavaScript?

A) Dynamically determining the context for a function call
B) Forcibly invoking a function with a specific context
C) Automatically assigning the global object as the context for a function call
D) Creating a new object and setting it as the context for a function call


When does implicit binding occur in JavaScript?

A) When a function is called using the new operator
B) When a function is invoked as a method of an object
C) When a function is called without any context provided
D) When a function is declared inside another function

How does explicit binding differ from implicit binding in JavaScript?

A) Explicit binding is automatic, while implicit binding requires manual intervention
B) Explicit binding sets the context for this based on the call-site, while implicit binding relies on the surrounding code structure
C) Explicit binding allows you to directly specify the context for a function call, while implicit binding relies on the object context
D) Explicit binding is used for asynchronous operations, while implicit binding is used for synchronous operations

What is the call-site in JavaScript?

A) The location in code where a function is declared
B) The location in code where a function is executed
C) The location in code where a function is defined
D) The location in code where a function is imported


How can you determine the call-site of a function in JavaScript?

A) By inspecting the function definition
B) By examining the function's prototype
C) By analyzing the function's closure
D) By locating where the function is called from

Which rule of this binding applies when a function is called without any explicit context provided?

A) Implicit Binding
B) Explicit Binding
C) Default Binding
D) Hard Binding


What does the default binding rule specify in JavaScript?

A) It sets the this binding to the global object if no other binding rules apply
B) It automatically binds this to the object containing the function
C) It explicitly sets the this binding to undefined
D) It allows for explicit specification of the this context using bind()


How does hard binding differ from explicit binding in JavaScript?

A) Hard binding creates a new object context, while explicit binding uses the current context
B) Hard binding allows for dynamic context switching, while explicit binding is static
C) Hard binding forcibly sets the context for a function call, while explicit binding allows for manual specification
D) Hard binding is used for asynchronous operations, while explicit binding is used for synchronous operations
What is the purpose of the new operator in JavaScript?

A) To create a new instance of a class
B) To dynamically import modules
C) To execute asynchronous functions
D) To invoke functions as constructors

How does JavaScript handle this binding when a function is called with the new operator?

A) It sets this to the global object
B) It sets this to the object containing the function
C) It sets this to the newly constructed object
D) It sets this to undefined

What is the primary benefit of using hard binding in JavaScript?

A) It allows for dynamic context switching
B) It prevents the this context from being overridden
C) It automatically sets this to the global object
D) It enables asynchronous function calls

How does implicit binding determine the this context for a function call?

A) By examining the function's prototype chain
B) By analyzing the function's closure scope
C) By inspecting the object containing the function
D) By locating where the function is called from

How does explicit binding differ from implicit binding in JavaScript?

A) Explicit binding is automatic, while implicit binding requires manual intervention
B) Explicit binding sets the context for this based on the call-site, while implicit binding relies on the surrounding code structure
C) Explicit binding allows you to directly specify the context for a function call, while implicit binding relies on the object context
D) Explicit binding is used for asynchronous operations, while implicit binding is used for synchronous operations

What does the default binding rule specify in JavaScript?

A) It sets the this binding to the global object if no other binding rules apply
B) It automatically binds this to the object containing the function
C) It explicitly sets the this binding to undefined
D) It allows for explicit specification of the this context using bind()