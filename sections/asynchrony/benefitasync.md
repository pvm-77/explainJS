[back](../../README.md)

# Benefit of asynchronous programming

1. **Improved performance**: Asynchronous programming allows a program to perform multiple tasks simultaneously, without blocking the main thread. This can result in faster execution times and improved performance, especially for programs that perform a lot of I/O operations, such as network requests or file I/O.

<br/><br/>

### See performance using async code

Let's consider an example where we want to load data from an external API and display it on a web page. Here is the asynchronous code to do this

<br/><br/>

### Code Example 

```javascript
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });

```
### Code Example – explanation
>In this code, we use the  `fetch()` function to load data from an external API. The `fetch()` function returns a promise, which allows us to handle the response data asynchronously using the `.then()` method.


</br></br>

### See performance using sync code

Let's consider an example where we want to load data from an external API and display it on a web page. Here is the synchronous code to do this

### Code Example 

```javascript
const request = new XMLHttpRequest();
request.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', false);
request.send();

if (request.status === 200) {
  console.log(JSON.parse(request.responseText));
}


```
### Code Example – explanation
>In this code, we use `XMLHttpRequest()` to load data from the same API. However, we use the synchronous `open()` method with the third parameter set to `false`, which makes the request synchronous. This means that the program will block and wait for the request to complete before moving on to the next line of code.


<br/><br/>


2. **More responsive user interface**: Asynchronous programming can be used to handle user input and other events without blocking the main thread. This can make a program feel more responsive and interactive, and can improve the user experience.
   Example:

Let's consider an example where we want to update a web page when a button is clicked. Here is the asynchronous code to do this:
```js
const button = document.querySelector('button');
button.addEventListener('click', () => {
  console.log('Button clicked!');
});

```

In this code, we add an event listener to a button element that logs a message to the console when the button is clicked. This code is asynchronous, meaning that it will not block the main thread while it waits for the button to be clicked.

If we were to write this same code synchronously, it would look like this:
```js
const button = document.querySelector('button');
button.onclick = function() {
  console.log('Button clicked!');
};
```
In this code, we use the synchronous onclick property to handle the button click event. This means that the program will block and wait for the button to be clicked before moving on to the next line of code.

</br>
</br>

3. **Better resource utilization**: Asynchronous programming allows a program to use system resources more efficiently, by allowing it to execute multiple tasks simultaneously. This can result in better utilization of CPU and memory resources, and can help prevent bottlenecks and slowdowns.
   Example:

Let's consider an example where we want to download and process a large file. Here is the asynchronous code to do this:
```js
fetch('https://example.com/largefile')
  .then(response => response.blob())
  .then(blob => {
    const reader = new FileReader();
    reader.readAsText(blob);
    reader.onload = () => {
      console.log(reader.result);
    };
  });

```

In this code, we use fetch() to download a large file and process it using the FileReader() API. This code is asynchronous, meaning that it will not block the main thread while it waits for the file to be downloaded and processed.


4. Simplified code: Asynchronous programming can make code easier to read and write, by allowing developers to separate complex operations into smaller, more manageable functions. This can make code more modular and easier to maintain over time.

5. Compatibility with external APIs: Many external APIs, such as those used for network requests or file I/O, are designed to work asynchronously. By using asynchronous programming techniques in JavaScript, developers can take advantage of these APIs more easily and write more efficient code.
<br/><br/>




