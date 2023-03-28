


[back](../../README.md)

## explain scope in detail
In JavaScript, scope refers to the area of a program where a particular variable or function is accessible. It determines the visibility and lifetime of variables and functions within a program. The scope of a variable or function is defined by where it is declared in the code, and it can be either local or global.


</br>
</br>

### local scope
Local scope, also known as function scope, is created when a variable or function is declared inside a function. The variable or function can only be accessed within the function where it is declared or in nested functions inside that function.

### global scope
Global scope, on the other hand, is created when a variable or function is declared outside of any function. Variables declared in global scope can be accessed from any part of the program, including nested functions.

### use of let var const wrt to scope
Another important concept related to scope is the use of the var, let, and const keywords. var is used to declare variables in global or local scope, but its scope can be confusing due to its hoisting behavior. let and const, on the other hand, are block-scoped, meaning that they are only accessible within the block where they are declared (such as a function, loop, or conditional statement).


```js

// Problem: We need to fetch data from a server and display it on a web page. We also need to provide a way for the user to filter the data by category.

// Global variables
var data = []; // Stores the fetched data from the server
var categories = ["All"]; // Stores the available categories

// Fetch data from server and populate the data variable
function fetchData() {
  // Local variable (function scope)
  var apiUrl = "https://example.com/api/data";
  
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Assign the fetched data to the global data variable
      data = data;
      
      // Extract the available categories from the data and assign them to the global categories variable
      categories = [...new Set(data.map(item => item.category))];
      categories.unshift("All"); // Add "All" category to the beginning of the array
      
      // Display the data and categories on the web page
      renderData();
      renderCategories();
    })
    .catch(error => console.error(error));
}

// Filter the data by category
function filterData(category) {
  // Local variable (function scope)
  var filteredData = [];
  
  if (category === "All") {
    // If the category is "All", display all data
    filteredData = data;
  } else {
    // Otherwise, filter the data by category
    filteredData = data.filter(item => item.category === category);
  }
  
  // Display the filtered data on the web page
  renderData(filteredData);
}

// Render the data on the web page
function renderData(dataToRender = data) {
  // Local variable (function scope)
  var container = document.getElementById("data-container");
  
  // Clear the container
  container.innerHTML = "";
  
  // Loop through the data and create HTML elements to display it
  dataToRender.forEach(item => {
    var element = document.createElement("div");
    element.textContent = item.title;
    container.appendChild(element);
  });
}

// Render the categories on the web page
function renderCategories() {
  // Local variable (function scope)
  var container = document.getElementById("category-container");
  
  // Clear the container
  container.innerHTML = "";
  
  // Loop through the categories and create HTML elements to display them
  categories.forEach(category => {
    var element = document.createElement("button");
    element.textContent = category;
    element.addEventListener("click", () => filterData(category));
    container.appendChild(element);
  });
}

// Call the fetchData function to start the application
fetchData();
```

### some common naming convention to distinguish global and local variables

 here are some common variable naming conventions that can help to distinguish between global and local variables:


1. Prefix global variables with `g_` or `global_`. For example, `global_count `or `g_total`.

2. Use descriptive names for local variables that reflect their purpose within the current scope. For example, `userCount` or `productPrice`.

3. Use const or let to declare local variables whenever possible, as they have block scope and are less prone to unintentional reassignment or shadowing.
Avoid reusing variable names within the same scope, and use unique names that clearly describe their purpose.




### benefit of understanding scope

In summary, scope in JavaScript refers to the accessibility and lifetime of variables and functions within a program. Understanding how scope works is crucial for writing clean, maintainable, and bug-free code in JavaScript.



## what is lexical environment?
in JavaScript, a lexical environment is a concept that describes the scope in which variables and functions are declared and defined. It consists of two parts:

    Environment Record: This is an object that contains all the local variables and their values, as well as any function declarations and their references within the current scope.

    Reference to the outer lexical environment: This is a reference to the lexical environment of the outer (enclosing) function, which allows for nested functions to have access to the variables and functions of the outer function.

The lexical environment is created at the time when a function is defined and depends on the location of that function in the source code. When the function is called, a new execution context is created, which includes a reference to the lexical environment of the function.