// let index;
// console.log(i)


// for ( index = 0; index < 3; index++) {
//    const log=()=>{
//     console.log(index);
//    }
//    setTimeout(log, 100);

// }

// Non-Memoized Recursive Factorial
// function factorial(n) {
//    if (n <= 1) return 1;
//    return n * factorial(n - 1);
//  }

//  // Memoized Recursive Factorial
//  function memoizedFactorial() {
//    const cache = {};

//    return function factorial(n) {
//      if (n <= 1) return 1;
//      if (cache[n]) return cache[n];
//      return cache[n] = n * factorial(n - 1);
//    }
//  }

//  const factorialMemo = memoizedFactorial();

//  // Test and measure performance
//  const testValue = 20; // Example test value, adjust as needed

//  // Non-Memoized performance
//  console.time("Non-Memoized Factorial");
//  console.log(factorial(testValue));
//  console.timeEnd("Non-Memoized Factorial");

//  // Memoized performance
//  console.time("Memoized Factorial");
//  console.log(factorialMemo(testValue));
//  console.timeEnd("Memoized Factorial");





// var APIendpoints = {
//    studentIDs:
//        "https://some.api/register-students",
//    // ..
// };

// var data = {
//    studentIDs: [ 14, 73, 112, 6 ],
//    // ..
// };


// function makeRequest(evt){
//    var btn=evt.target;
//    var recordKind=btn.dataset.kind;
//    ajax(APIendpoints[recordKind],data[recordKind])
// }

// // <button data-kind="studentIDs">
// //    Register Students
// // </button>
// btn.addEventListener("click",makeRequest);















// shadowing
// // window.sample='i am the sample string';
// global.sample='i am the sample string in the nodejs environment'
// console.log(sample)

// var special=42
// function lookingFor(special) {

//    function keepLooking() {
//       var special=3.22;
//       console.log(special)
//       console.log(window.special)

//    }
//    keepLooking()

// }
// lookingFor(11234)

// copying is not accessing

// var special=42;
// function lookingFor(special) {

//    var another={
//       special:special,
//    }
//    function keepLooking(){
//       var special=3.14;
//       console.log(special)
//       console.log(another.special)
//       console.log(window.special)
//    }

// }

// lookingFor()

// var askQuestion = function ofTheTeacher() {
//    console.log(ofTheTeacher)
// }
// askQuestion()
// console.log(askQuestion)

;   // => ???
; // => ???

// question 6
// console.log(0.1 + 0.2 === 0.3)

// // Question 7

// // console.log(myVar)
// // console.log(myConst)

// var myVar = 'value';
// const myConst = 3.14;

// stack overflow 
// let number = 100
 
// function change(number) {
//    // shadowing of outer number here
//     number = number * 10;  //1000
// }
 
// change(number);
 
// console.log(number);


// console.log(studentName)   //ReferenceError: Cannot access 'studentName' before initialization

// let studentName='scriptsar';

// studentName='scriptsar';
// console.log(studentName);  //ReferenceError: Cannot access 'studentName' before initialization
// let studentName;

// how do we initilize an uninitialize variable for let/const
// only way is assignnment attached to a declaration 
// let studentName=undefined;
// console.log(typeof studentName)

// var student
// console.log(typeof student)

// // var student=undefined
// // console.log(typeof student)


// hositing based questions 
console.log('bar:',bar); //undefined

bar=16;
var foo=1;
console.log('foo:',foo,'bar:',bar); //1 16
var bar;

// q2
// greetings();

// var greetings=function () {
//     console.log('first greetings');
    
// }
// greetings();

// function greetings() {
//     console.log('second greeting');
    
// }
// greetings()
// q3
// var variable=10;
// (()=>{
// console.log(variable);
// variable=20;
// console.log(variable)
// })();

// q4
// var variable =10;
// (()=>{
//     variable_3=35;
//     console.log(variable_3);
//     var variable_3=45;
//     variable_2=15;
//     console.log(variable)
// })()
// console.log(variable_2)
// console.log(variable_3)
// var variable=30;

// navigator.getBattery().then((battery) => {
//     function updateAllBatteryInfo() {
//       updateChargeInfo();
//       updateLevelInfo();
//       updateChargingInfo();
//       updateDischargingInfo();
//     }
//     updateAllBatteryInfo();
  
//     battery.addEventListener("chargingchange", () => {
//       updateChargeInfo();
//     });
//     function updateChargeInfo() {
//       console.log(`Battery charging? ${battery.charging ? "Yes" : "No"}`);
//     }
  
//     battery.addEventListener("levelchange", () => {
//       updateLevelInfo();
//     });
//     function updateLevelInfo() {
//       console.log(`Battery level: ${battery.level * 100}%`);
//     }
  
//     battery.addEventListener("chargingtimechange", () => {
//       updateChargingInfo();
//     });
//     function updateChargingInfo() {
//       console.log(`Battery charging time: ${battery.chargingTime} seconds`);
//     }
  
//     battery.addEventListener("dischargingtimechange", () => {
//       updateDischargingInfo();
//     });
//     function updateDischargingInfo() {
//       console.log(`Battery discharging time: ${battery.dischargingTime} seconds`);
//     }
//   });
  



