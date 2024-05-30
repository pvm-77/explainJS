# global unshadowing trick

in the global scope `var` declarations and `function` declarations expose themself as properties (of the same name as identifier ) on the global object for eg window in browser

**eg**:
```js
var studentName = "Suzy";

function printStudent(studentName) {
    console.log(studentName);
    console.log(window.studentName);
}

printStudent("Frank");
// "Frank"
// "Suzy"

```
- `window.studentName` is accessing the global variable `studentName` as a property on `window` 
- it is the only way to access a shadowed variable from inside a scope where shadowing variable is present. 
- the window.studentName is a mirror of the global `studentName` variable,not a separate snapshot copy
- this is only for var varible and function keyword
- other form do not create mirrored global object properties for eg 
```js
var one = 1;
let notOne = 2;
const notTwo = 3;
class notThree {}

console.log(window.one);       // 1
console.log(window.notOne);    // undefined
console.log(window.notTwo);    // undefined
console.log(window.notThree);  // undefined
````


- Variables [no matter how they're declared!] that exist in any other scope than the global scope are completely inaccessible from a scope where they've been shadowed:

```js
var special = 42;

function lookingFor(special) {
    // The identifier `special` (parameter) in this
    // scope is shadowed inside keepLooking(), and
    // is thus inaccessible from that scope.

    function keepLooking() {
        var special = 3.141592;
        console.log(special);
        console.log(window.special);
    }

    keepLooking();
}

lookingFor(112358132134);
// 3.141592
// 42
```

The global RED(1) special is shadowed by the BLUE(2) special (parameter), and the BLUE(2) special is itself shadowed by the GREEN(3) special inside keepLooking(). We can still access the RED(1) special using the indirect reference window.special. But there's no way for keepLooking() to access the BLUE(2) special that holds the number 112358132134.

## copying is not accessing
```js
var special = 42;

function lookingFor(special) {
    var another = {
        special: special
    };

    function keepLooking() {
        var special = 3.141592;
        console.log(special);
        console.log(another.special);  // Ooo, tricky!
        console.log(window.special);
    }

    keepLooking();
}

lookingFor(112358132134);
// 3.141592
// 112358132134
// 42
```

Oh! So does this another object technique disprove my claim that the special parameter is "completely inaccessible" from inside keepLooking()? No, the claim is still correct.

special: special is copying the value of the special parameter variable into another container (a property of the same name). Of course, if you put a value in another container, shadowing no longer applies (unless another was shadowed, too!). But that doesn't mean we're accessing the parameter special; it means we're accessing the copy of the value it had at that moment, by way of another container (object property). We cannot reassign the BLUE(2) special parameter to a different value from inside keepLooking().

Another "But...!?" you may be about to raise: what if I'd used objects or arrays as the values instead of the numbers (112358132134, etc.)? Would us having references to objects instead of copies of primitive values "fix" the inaccessibility?

No. Mutating the contents of the object value via a reference copy is not the same thing as lexically accessing the variable itself. We still can't reassign the BLUE(2) special parameter.

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


## global shadow global 


when we write a variable in global scope and it uses let or const it will shadow the global object property of the same name while it is not the case with var 
why it is a bad practice?



## benfit of understanding 


# function name scope
```js

function askQuestion(){

}
```
a function declaration will create an identifier in the enclosing scope (in this case, the global scope) named `askQuestion`

what about function expression?
