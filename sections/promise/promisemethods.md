[tick]: ../../assets/images/checkbox-small-blue.png


# Fundamental of promise static method

A Promise method that is static means that it is called directly on the Promise object itself, rather than on a specific instance of a Promise. Static methods are often used to create new Promises or manipulate existing ones.

The following are some of the static methods available on the Promise object:

<!-- here list of method -->

</br>
</br>
</br>

<!-- Promise.allSettled() start here -->
 # ![tick]  `Promise.allSettled()`:
 
 The `Promise.allSettled()` static method takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when all of the input's promises settle (including when an empty iterable is passed), with an array of objects that describe the outcome of each promise.

The `Promise.allSettled()` static method takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when all of the input's promises settle (including when an empty iterable is passed), with an array of objects that describe the outcome of each promise.

Promise.allSettled() is a static method available in JavaScript that takes an iterable (such as an array) of Promises as input and returns a new Promise object.

When you pass an array of Promises to Promise.allSettled(), it waits for all the Promises to settle, which means that all the Promises are either resolved or rejected. Once all the Promises have settled, Promise.allSettled() returns a new Promise object that resolves with an array of objects, one for each Promise in the input iterable.

Each object in the array represents the outcome of the corresponding Promise, and it contains two properties:

status: a string value that is either "fulfilled" or "rejected", indicating whether the Promise was resolved or rejected.
value or reason: depending on the status, it contains either the resolved value of the Promise or the reason for rejection.
Here's an example of how to use Promise.allSettled():


 💥➡️ **Example**:
 ```js
//  sample code
const promises = [
  Promise.resolve(1),
  Promise.reject("error"),
  Promise.resolve("hello"),
];

Promise.allSettled(promises).then((results) => {
  console.log(results);
});

/* Output:
[
  { status: 'fulfilled', value: 1 },
  { status: 'rejected', reason: 'error' },
  { status: 'fulfilled', value: 'hello' }
]
*/


```

🤯 **Explain**:

>In this example, we passed an array of Promises to Promise.allSettled(). The returned Promise resolves with an array of objects, one for each Promise in the input iterable. In this case, two Promises were resolved, and one was rejected. The array of objects represents the outcome of each Promise, with the status property indicating whether it was resolved or rejected, and the value or reason property containing the resolved value or rejection reason, respectively.


</br>
</br>
</br>

### 🛸 use case for `Promise.allSettled()`

>Suppose you have a web application that allows users to purchase items online. When a user places an order, you want to charge their credit card and then send them an email receipt. You want to ensure that both the credit card charge and the email send are successful before displaying a success message to the user.

>You can use `Promise.allSettled()` to achieve this by creating an array of Promises for each task (i.e., charge card and send email), and then passing that array to `Promise.allSettled()`. Once all Promises have settled, you can check the outcome of each Promise and proceed accordingly.

>Here's some sample code that demonstrates how to use `Promise.allSettled()` to charge a credit card and send an email:

 💥➡️ **Example**:

 ```js
//  sample code
const chargeCreditCard = (amount) => {
  return new Promise((resolve, reject) => {
    // Use a payment gateway library or API to charge the card
    // In this example, we just simulate a successful charge
    setTimeout(() => {
      console.log(`Charged credit card $${amount}`);
      resolve();
    }, 2000);
  });
};

const sendEmailReceipt = (email, amount) => {
  return new Promise((resolve, reject) => {
    // Use an email service or API to send the email
    // In this example, we just simulate a successful send
    setTimeout(() => {
      console.log(`Sent email receipt to ${email} for $${amount}`);
      resolve();
    }, 2000);
  });
};

const placeOrder = (creditCard, email, amount) => {
  // Charge the credit card and send the email receipt
  const promises = [
    chargeCreditCard(amount),
    sendEmailReceipt(email, amount),
  ];
  Promise.allSettled(promises)
    .then((results) => {
      const successfulResults = results.filter((result) => result.status === 'fulfilled');
      const failedResults = results.filter((result) => result.status === 'rejected');
      if (successfulResults.length === 2) {
        console.log(`Order placed successfully!`);
        // Display a success message to the user
      } else {
        console.error(`Order failed! Failed to charge credit card or send email receipt.`);
        // Display an error message to the user
      }
    });
};

// Call the placeOrder function with credit card info, email, and amount
const creditCard = {
  number: '1234 5678 9012 3456',
  expMonth: '12',
  expYear: '25',
  cvv: '123',
};
const email = 'johndoe@example.com';
const amount = 100;
placeOrder(creditCard, email, amount);
```

🤯 **Explain**:

>In this example, we have a `chargeCreditCard()` function that simulates charging a credit card and returns a Promise that resolves when the charge is successful. If the Promise is rejected, it returns an error.

>We also have a `sendEmailReceipt()` function that simulates sending an email receipt and returns a Promise that resolves when the email is successfully sent. If the Promise is rejected, it returns an error.

>We use these functions to create an array of Promises for each task (i.e., charge card and send email), and then pass that array to `Promise.allSettled()`. When all Promises have settled, the then() method is called with an array of objects describing the outcome of each Promise.

>We can then use this array to check the outcome of each task and proceed accordingly. If both tasks were successful, we can display a success message to the user.

</br>
</br>
</br>

<!-- Promise.allSettled() end here -->



<!-- Promise.all() start here -->
 # ![tick]  `Promise.all()`:
Promise.all() is a method that takes an array of Promises and returns a new Promise. The new Promise resolves when all of the Promises in the array have resolved successfully. If any of the Promises in the array fail (i.e., are rejected), then the new Promise is immediately rejected with the first error that occurred. The resolved value of the new Promise is an array containing the resolved values of each of the Promises in the original array, in the same order as the original array. If the original array is empty, the new Promise resolves immediately with an empty array.

In other words, Promise.all() waits for all the Promises in the input array to complete, and then returns a new Promise that contains all the resolved values in an array. If any of the Promises in the input array fails, then the new Promise immediately fails with the first error that occurred. This can be useful for situations where you want to perform multiple asynchronous operations in parallel and wait for all of them to complete before proceeding with the rest of your code.

 💥➡️ **Example**:
 ```js
//  sample code
// Define an array of Promises that each resolve to a different value
const promises1 = [
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3)
];

// Pass the array of Promises to Promise.all()
Promise.all(promises1)
  .then(results => console.log(results))
  .catch(error => console.error(error));

// Define an array of Promises that each resolve after a different delay
const promises2 = [
  new Promise(resolve => setTimeout(() => resolve(1), 1000)),
  new Promise(resolve => setTimeout(() => resolve(2), 500)),
  new Promise(resolve => setTimeout(() => resolve(3), 2000))
];

// Pass the array of Promises to Promise.all()
Promise.all(promises2)
  .then(results => console.log(results))
  .catch(error => console.error(error));

// Define an array of Promises that includes one Promise that fails with an error
const promises3 = [
  Promise.resolve(1),
  Promise.reject(new Error('Oops!')),
  Promise.resolve(3)
];

// Pass the array of Promises to Promise.all()
Promise.all(promises3)
  .then(results => console.log(results))
  .catch(error => console.error(error));

// Define an array of Promises that each fetch a different todo item from a mock API and parse the response as JSON
const promises4 = [
  fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json()),
  fetch('https://jsonplaceholder.typicode.com/todos/2').then(response => response.json()),
  fetch('https://jsonplaceholder.typicode.com/todos/3').then(response => response.json())
];

// Pass the array of Promises to Promise.all()
Promise.all(promises4)
  .then(results => console.log(results))
  .catch(error => console.error(error));

// Define an empty array of Promises
const promises5 = [];

// Pass the array of Promises to Promise.all()
Promise.all(promises5)
  .then(results => console.log(results))
  .catch(error => console.error(error));

```

🤯 **Explain**:

>In this example, we define five different arrays of Promises, each demonstrating a different aspect of `Promise.all()`. We then pass each of these arrays to `Promise.all()`, using `.then()` to log the resolved values of the Promises in the input arrays and .catch() to log any errors that occurred. The output should demonstrate each of the points I explained earlier about `Promise.all()`.

</br>
</br>
</br>

### 🛸 use case for `Promise.all()`

>Let's say you're building a weather app that needs to fetch weather data from two different APIs: one for the current weather conditions and one for the forecast. Your app needs both sets of data to provide a complete weather report to the user. You don't want to display anything to the user until you have both sets of data, so you need to wait for both Promises to resolve before you continue.

Here's some sample code that demonstrates how to use `Promise.all()` to wait for both sets of data:

 💥➡️ **Example**:

 ```js
//  sample code
const getCurrentWeather = () => {
  return new Promise((resolve, reject) => {
    // Fetch current weather data from API
    const currentWeatherData = {
      temperature: 75,
      description: 'Sunny',
      windSpeed: 5,
      humidity: 50,
    };

    // Simulate network latency with setTimeout
    setTimeout(() => {
      resolve(currentWeatherData);
    }, 2000);
  });
};

const getWeatherForecast = () => {
  return new Promise((resolve, reject) => {
    // Fetch weather forecast data from API
    const forecastData = {
      highTemp: 80,
      lowTemp: 65,
      chanceOfRain: 10,
      sunriseTime: '6:30 AM',
      sunsetTime: '7:30 PM',
    };

    // Simulate network latency with setTimeout
    setTimeout(() => {
      resolve(forecastData);
    }, 3000);
  });
};

Promise.all([getCurrentWeather(), getWeatherForecast()])
  .then((results) => {
    const currentWeatherData = results[0];
    const forecastData = results[1];

    // Use the weather data to update the UI
    console.log(`The current temperature is ${currentWeatherData.temperature} degrees and ${currentWeatherData.description}.`);
    console.log(`The forecast for today is a high of ${forecastData.highTemp} and a low of ${forecastData.lowTemp}.`);
  })
  .catch((error) => {
    console.error(`Error fetching weather data: ${error}`);
  });
```

🤯 **Explain**:

>In this example, we have two functions ```getCurrentWeather()``` and `getWeatherForecast()` that return Promises that resolve with weather data. We pass an array of these Promises to `Promise.all()`, which waits for both Promises to resolve before executing the `then()` method.

>Once both Promises have resolved, the `then()` method is called with an array of the resolved values. We destructure this array into `currentWeatherData` and `forecastData`, which we can then use to update the UI.

>If either Promise is rejected, the `catch()` method is called with the rejection reason.

>Overall, `Promise.all()` is a useful tool for aggregating the results of multiple Promises in scenarios where you need all of the Promises to resolve before continuing with the rest of your code.

</br>
</br>
</br>
<!-- Promise.all() end here -->

 <!-- Promise.race() start here -->

 # ![tick]  `Promise.race()`:
 This method returns a new Promise object that resolves or rejects based on the first Promise that completes, either resolving or rejecting. It takes an array of Promises as an argument.

 💥➡️ **Example**:
 ```js
//  sample code
```

🤯 **Explain**:

>explaination

</br>
</br>
</br>

### 🛸 use case for `Promise.race()`

>Suppose you are building a real-time chat application that allows users to send messages to each other. You want to implement a feature that shows a notification to the user if the message they sent fails to deliver after a certain amount of time.

>You can use `Promise.race()` to race between two Promises: one Promise that resolves when the message is delivered successfully, and another Promise that rejects after a timeout period. If the Promise that resolves successfully is the first to resolve, you know that the message was delivered successfully. But if the Promise that rejects due to a timeout is the first to resolve, you can show a notification to the user indicating that the message failed to deliver.

>Here's some sample code that demonstrates how to use `Promise.race()` to implement this feature:

 💥➡️ **Example**:

 ```js
//  sample code
const sendMessage = (message) => {
  // Make an API call to send the message to the recipient
  const apiUrl = 'https://api.example.com/send-message';
  const data = { message };

  return fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((response) => {
      if (response.ok) {
        console.log('Message delivered successfully');
        return response.json();
      }
      throw new Error(`Failed to send message: ${response.status} ${response.statusText}`);
    })
    .catch((error) => {
      console.error(`Failed to send message: ${error}`);
      throw error;
    });
};

const sendWithTimeout = (message, timeout) => {
  const sendMessagePromise = sendMessage(message);
  const timeoutPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Message delivery timed out'));
    }, timeout);
  });

  return Promise.race([sendMessagePromise, timeoutPromise]);
};

const handleSendMessage = () => {
  const message = 'Hello, how are you?';
  const timeout = 5000; // Timeout after 5 seconds

  sendWithTimeout(message, timeout)
    .then((result) => {
      console.log('Result:', result);
      // Update the UI to indicate that the message was delivered successfully
    })
    .catch((error) => {
      console.error('Failed to send message:', error);
      // Show a notification to the user indicating that the message failed to deliver
    });
};

// Call the handleSendMessage function to send the message with a timeout
handleSendMessage();
```

🤯 **Explain**:

>In this example, we have a `sendMessage()` function that makes an API call to send a message to the recipient. We define a sendWithTimeout() function that takes a message and a timeout period as input. This function creates two Promises: one Promise that calls the `sendMessage()` function to send the message, and another Promise that rejects after the timeout period. We then pass these two Promises to Promise.race(). When one of the Promises resolves or rejects, the `then()` or `catch()` method is called with the result or error.

>We call the `sendWithTimeout()` function with the message and timeout period as input. If the message is delivered successfully before the timeout period expires, the `then()` method is called with the result, and we can update the UI to indicate that the message was delivered successfully. But if the timeout period expires before the message is delivered, the `catch()` method is called with an error indicating that the message failed to deliver, and we can show a notification to the user.

</br>
</br>
</br>

<!-- Promise.race() end here -->

 <!--Promise.any() start   -->

 # ![tick]  `Promise.any()`:
  It is a static method   that takes list of promises and returns a new promise.The new promise is resolved when **any of the input promises are resolved** .The value of the new promise will be the value of the first promise that resolves.

    
  If all the input promises are rejected, the new promise will be rejected with an error that contains an array of all the reasons for the rejections.

  This method is useful when you have multiple asynchronous operations that you want to run in parallel, and you only need to know the result of the first one to complete.

 💥➡️ **Example**:
 ```js
//  sample code
```

🤯 **Explain**:

>explaination

</br>
</br>
</br>

### 🛸 use case for `Promise.any()`

>In a web form, we often want to validate user input before submitting the form. This can involve making asynchronous requests to a server to check if the input is valid (e.g. checking if an email address is already in use). We can use `Promise.any()` to make these requests in parallel, and submit the form if at least one request succeeds.

Here's an example of how you could use `Promise.any()` to implement this:

 💥➡️ **Example**:

 ```js
//  sample code

function checkEmailAvailability(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'user@example.com') {
        reject({ source: 'email', message: `Email ${email} is already in use` });
      } else {
        resolve({ source: 'email', message: `Email ${email} is available` });
      }
    }, 2000); // Simulate a server delay of 2 seconds
  });
}

function checkUsernameAvailability(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'user123') {
        reject({ source: 'username', message: `Username ${username} is already taken` });
      } else {
        resolve({ source: 'username', message: `Username ${username} is available` });
      }
    }, 1500); // Simulate a server delay of 1.5 seconds
  });
}

const checkEmailAvailability = checkEmailAvailability(email);
const checkUsernameAvailability = checkUsernameAvailability(username);

Promise.any([checkEmailAvailability, checkUsernameAvailability])
  .then(result => {
    // At least one validation succeeded
    if (result.source === 'email') {
      console.log(`Email ${email} is available`);
    } else {
      console.log(`Username ${username} is available`);
    }
    // Submit the form
  })
  .catch(errors => {
    // Both validations failed
    const errorMessages = errors.map(error => error.message).join(', ');
    console.log(`Sorry, we could not submit the form. ${errorMessages}`);
  });
```

🤯 **Explain**:

>In this example, `checkEmailAvailability(email)` and `checkUsernameAvailability(username)` are asynchronous functions that return promises that resolve to an object containing the validation result, including the validation source (either email or username). We pass an array of these promises to `Promise.any()`, which returns a new promise that resolves to the validation result object from the first successful attempt (either email or username). If both attempts fail, the catch block is executed and an array of error objects is shown.
>By using `Promise.any()` in this way, we can implement a form validation mechanism that checks user input in parallel and submits the form if at least one validation succeeds. This can be useful in scenarios where we want to provide a faster and more efficient way of validating user input, while also ensuring that we catch any errors before submitting the form.

</br>
</br>
</br>

 <!-- Promise.any() end here -->



 # ![tick]  `Promise.resolve()`:
This method returns a new Promise object that is already resolved with a given value. If the argument passed to Promise.resolve() is already a Promise, it simply returns that Promise.

 💥➡️ **Example**:
 ```js
//  sample code
```

🤯 **Explain**:

>explaination

</br>
</br>
</br>

### 🛸 use case for `Promise.resolve()`

>scenario explain

 💥➡️ **Example**:

 ```js
//  sample code
```

🤯 **Explain**:

>scenario explain

</br>
</br>
</br>

 <!-- tick need to access in file this template goes -->
 # ![tick]  `Promise.reject()`:
  This method returns a new Promise object that is already rejected with a given reason.

 💥➡️ **Example**:
 ```js
//  sample code
```

🤯 **Explain**:

>explaination

</br>
</br>
</br>

### 🛸 use case for `Promise.reject()`

>scenario explain

 💥➡️ **Example**:

 ```js
//  sample code
```

🤯 **Explain**:

>scenario explain

</br>
</br>
</br>
