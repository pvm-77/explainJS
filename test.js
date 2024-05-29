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
 




var APIendpoints = {
   studentIDs:
       "https://some.api/register-students",
   // ..
};

var data = {
   studentIDs: [ 14, 73, 112, 6 ],
   // ..
};


function makeRequest(evt){
   var btn=evt.target;
   var recordKind=btn.dataset.kind;
   ajax(APIendpoints[recordKind],data[recordKind])
}

// <button data-kind="studentIDs">
//    Register Students
// </button>
btn.addEventListener("click",makeRequest);




