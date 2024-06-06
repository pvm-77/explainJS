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

let counter=function (){
    let k=0;
    return ()=>k++;
}();
console.log(counter())
console.log(counter())   //0 1 2
console.log(counter())
```

