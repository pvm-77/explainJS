## Explain shadowing in js 

One important concept related to scope in JavaScript is variable shadowing. This occurs when a variable declared inside a local scope has the same name as a variable declared in a higher level scope. In this case, the inner variable will "shadow" the outer variable, meaning that the inner variable will take precedence and be used instead of the outer variable in that particular scope.

Shadowing: Now, when a variable is declared in a certain scope having the same name defined on its outer scope and when we call the variable from the inner scope, the value assigned to the variable in the inner scope is the value that will be stored in the variable in the memory space. 

```js
var x = 10;
function myFunc() {
  var x = 20;
  console.log(x); // Output: 20
}
myFunc();
console.log(x); // Output: 10

const x = 10;

function myFunc() {
  const x = 20;
  console.log(x); // Output: 20
}

myFunc();

console.log(x); // Output: 10

var x = 10;

function myFunc() {
  var x = 20;
  console.log(x); // Output: 20 shadowing concept
}

myFunc();

console.log(x); // Output: 10
```

### Illegal shadowing

while shadowing a variable, it should not cross the boundary of the scope, i.e. we can shadow var variable by let variable but cannot do the opposite. So, if we try to shadow let variable by var variable, it is known as Illegal Shadowing and it will give the error as “variable is already defined.” 




```js



let t = 10;   // Declaring a variable x using the let keyword

if (true) {
  var t = 20;   // Trying to declare another variable x using the var keyword, which will result in illegal shadowing
  console.log(t);   // Output: 20
}

console.log(t);   // Output: 20, instead of 10 because the let variable has been shadowed

```


## benfit of understanding 