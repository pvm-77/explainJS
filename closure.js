

// data encapsulation
/*
Data Encapsulation:
Closures can be used to create private variables that are inaccessible from outside the function.
*/

// function createCounter(){
//     let count=0;
//     return function(){
//         count++;
//         return count;
//     }
// }

// const counter=createCounter();
// console.log('the counter val is ',counter())
// console.log('the counter val is ',counter())
// console.log(count);//error:count is not defines (private variable)

// without closure

// let count=0;
// function increamentCounter(){
//     count++;
//     return count;
// }
// console.log(increamentCounter())
// console.log(increamentCounter())
// console.log(count);

// Stateful Functions:
// Closures allow functions to maintain their own unique state even after the outer functio
// n has finished executin

// // ex with closure
// function createCounter(){
//     let count=0; //private variable encap within closure
//     return function(){
//         count++;
//         return count;
//     }
// }

// const counter1=createCounter()
// const counter2=createCounter();
// console.log(counter1())
// console.log(counter1())
// console.log(counter2()) // counter2 has its own indepenedent state

// wo closure


let count=0;  //not encapsulated shared between all functions
function increamentCounter(){
    count++;
    return count;
}
console.log(increamentCounter()); // Output: 1
console.log(increamentCounter()); // Output: 2
console.log(increamentCounter()); // Output: 3


/*
Callbacks and Asynchronous Operations:
Closures are often used
 in asynchronous operations
  and event handling.
*/


// ex with closure 

// function delayMessage(message,delay){
//     setTimeout(function () {
//         console.log(message)
        
//     },delay)
// }
// delayMessage("Hello!", 1000); // Output: "Hello!" after 1 second

// wo closure using a global variable


// let globalMessage="" //not encapsulated

// function delayMessage(message, delay) {
//     globalMessage = message;
//     setTimeout(function() {
//       console.log(globalMessage);
//     }, delay);
//   }
  
//   delayMessage("Hello!", 1000); // Output: "Hello!" after 1 second


// currying 

// closure can be used to implement curring allowinf the c
// creattion of specilized func with partial argument application 
// function add(x){
//     return function(y){
//         return x+y
//     }
// }

// const addFive=add(5);




// console.log(addFive(5))

// wo closure 

// function add(x,y)
