// const promise = new Promise((resolve, reject) => {
//     // Simulate an asynchronous operation that takes 3 seconds
//     setTimeout(() => {
//     //   const result = Math.random();
//     let r=2
  
//       if (r >= 0.5) {
//         // Resolve the Promise with the result if it's greater than or equal to 0.5
//         resolve(r);
//       } else {
//         // Reject the Promise with an error message if the result is less than 0.5
//         reject(new Error('The result is less than 0.5'));
//       }
//     }, 3000);
//   });
  
//   promise.then((result) => {
//     console.log('The Promise was fulfilled with the result:', result);
//   }).catch((error) => {
//     console.error('The Promise was rejected with the error:', error);
//   });
  


// const promises=[Promise.reject('i am rejecting'),Promise.resolve('i am resolving'),Promise.resolve(1)]
// console.log(promises);

// Promise.allSettled(promises).then(function(results){
//   // console.log(results);
//   results.forEach(result=>console.log(result))
// })

// Promise.all()  method 



// use case 1

// const getCurrentWeather = () => {
//   return new Promise((resolve, reject) => {
//     // Fetch current weather data from API
//     const currentWeatherData = {
//       temperature: 75,
//       description: 'Sunny',
//       windSpeed: 5,
//       humidity: 50,
//     };

//     // Simulate network latency with setTimeout
//     setTimeout(() => {
//       resolve(currentWeatherData);
//     }, 2000);
//   });
// };

// const getWeatherForecast = () => {
//   return new Promise((resolve, reject) => {
//     // Fetch weather forecast data from API
//     const forecastData = {
//       highTemp: 80,
//       lowTemp: 65,
//       chanceOfRain: 10,
//       sunriseTime: '6:30 AM',
//       sunsetTime: '7:30 PM',
//     };

//     // Simulate network latency with setTimeout
//     setTimeout(() => {
//       reject(forecastData);
//     }, 3000);
//   });
// };

// Promise.all([getCurrentWeather(), getWeatherForecast()])
//   .then((results) => {
//     const currentWeatherData = results[0];
//     const forecastData = results[1];

//     // Use the weather data to update the UI
//     console.log(`The current temperature is ${currentWeatherData.temperature} degrees and ${currentWeatherData.description}.`);
//     console.log(`The forecast for today is a high of ${forecastData.highTemp} and a low of ${forecastData.lowTemp}.`);
//   })
//   .catch((error) => {
//     console.log(error);
//     console.error(`Error fetching weather data: ${error}`);
//   });


// Promise.any()
// const promise1=Promise.reject(0);
// const promise2=Promise.reject('yeah')
// const promise3=Promise.reject('nope')
// // const promise2=new Promise((reject)=>{
// //     setTimeout(reject,100,'fast')
// // })
// // const promise3=new Promise((reject)=>{
// //     setTimeout(reject,500,'slow')
// // })



// const promises=[promise1,promise2,promise3];
// Promise.any(promises).then(value=>{
//   console.log(value);
// })





// yes boss
// function, createAudioFileAsync(), which asynchronously generates a sound file given a configuration record and two callback functions: one called if the audio file is successfully created, and the other called if an error occurs.

// function successCallback(result){
//     console.log(`Audio file ready at URL: ${result}`);
// }

// function failureCallback(error){
//     console.error(`Error generating audio file: ${error}`);
// }

// createAudioFileAsync(audioSettings,successCallback,failureCallback);



const anyString='universe'
console.log(anyString);
anyString[0]="u";
console.log(anyString)
