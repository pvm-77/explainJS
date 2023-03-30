 [**back**](../../README.md)


# topic title here

<br/><br/>

### subtopic title here

Text

<br/><br/>

### Code Example 

```javascript
console.log("Starting");

function wait() {
  var start = new Date().getTime();
  while (new Date().getTime() < start + 5000);
}

wait();

console.log("Ending");

```

<br/><br/>


### Code Example – explanation

```javascript
In this example, we have defined a function wait() that waits for 5 seconds before completing. The function is called synchronously, which means that the rest of the code will not be executed until the function completes.
```
When we run this code, we will see the following output:
<samp>
Starting<br/>

(wait for 5 seconds)<br/>
Ending<br/>
</samp>
<br/><br/>


