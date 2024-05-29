# what is the output 

```js
function outer(){
    const x=10;
    function inner(){
        console.log(x)
    }

    return inner;
}
const closureFunc=();
```

```js
for(let i=o;i<5;i++>){
    setTimeout(()=>{
        console.log(i)
    },0)
}
```

```js
```

```js
```

```js
```

```js
```

```js
```

```js
```

```js
```

```js
```

```js
```

```js
```

```js
```

```js
```

```js
```

```js
```

```js
```

```js
```

```js
```

```js
```

```js
```

```js
```

```js
```

```js
```

```js
```

```js
```

```js
```

```js
```

```js
let counter=function (){
    let k=0;
    return ()=>k++;
}();
console.log(counter())
console.log(counter())   //0 1 2
console.log(counter())
```


Here are few Javascript topics which are frequently asked
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
🩹 Polyfills (Mostly asked polyfills: Promise, Promise.all, Promise.any, Promise.race, Promise.allSettled, call, apply, bind, map, reduce, filter, forEach, flat, fetch API)
🌐 Web APIs
⏲️ setTimeout, setInterval
🔄 High Order Functions
🔧 Working of JS Engine