// closure


// function wait(message){
//     setTimeout(function timer() {
//         console.log(message);
        
//     }, 1000);

// }

// wait('hello closure')
// a=20;
// console.log(a)
// console.log(window.a)

// 






// nested scope 

// function foo(a){
//     console.log(a+b);
// }

// var b=2;
// foo(2);

// errors [Heading]

// function foo(a){
//     var b=a;
//     return a+b;
// }
// var c=foo(2)
// lhs 


// second scope
// syntax error from starts

// var greeting='hello'
// console.log(greeting);
// greeting=.'ki'


// var greeting='whats up'
// function translateGreeting(language) {
//     console.log("A",greeting);

//     if (greeting==='Hello') {
//         const greeting='Bienvenue';
//         console.log('B',greeting)
        
//     }


//     if (greeting==='Whats up') {
//         console.log("C",greeting);
//         greeting='Hello';
        
//     }


//     var greeting='Bienvenue';
//     console.log('D',greeting);



//     if (greeting==='Bienvenue') {
//         let greeting='Hola';
//         console.log('E',greeting);
        
//     }


// };

// greeting='Szia'
// console.log("f",greeting);
// translateGreeting()

// code edition second

//  syntax errors from the start

// var greeting = "Hello";

// console.log(greeting);

// greeting = ."Hi";
// SyntaxError: unexpected token .

// REMARKS  
/*
This program produces no output ("Hello" is not printed), but instead throws a SyntaxError about the unexpected . token right before the "Hi" string. Since the syntax error happens after the well-formed console.log(..) statement, if JS was executing top-down line by line, one would expect the "Hello" message being printed before the syntax error being thrown. That doesn't happen.

In fact, the only way the JS engine could know about the syntax error on the third line, before executing the first and second lines, is by the JS engine first parsing the entire program before any of it is executed.
*/


// early errors
// console.log('Howdy');

// saySomething('Hello','hi');
// Uncaught SyntaxError: Duplicate parameter name not
// allowed in this context

// function saySomething(greeting,greeting) {
//     "use strict"
//     console.log(greeting);
    
// }

// REMARKS
/*
The "Howdy" message is not printed, despite being a well-formed statement.

Instead, just like the snippet in the previous section, the SyntaxError here is thrown before the program is executed. In this case, it's because strict-mode (opted in for only the saySomething(..) function here) forbids, among many other things, functions to have duplicate parameter names; this has always been allowed in non-strict-mode.

The error thrown is not a syntax error in the sense of being a malformed string of tokens (like ."Hi" prior), but in strict-mode is nonetheless required by the specification to be thrown as an "early error" before any execution begins.

But how does the JS engine know that the greeting parameter has been duplicated? How does it know that the saySomething(..) function is even in strict-mode while processing the parameter list (the "use strict" pragma appears only later, in the function body)?

Again, the only reasonable explanation is that the code must first be fully parsed before any execution occurs
*/




// hoisting

function saySomething(){
    var greeting='Hello';
    {
        greeting="Howdy"; 
        let greeting='Hi';
        console.log(greeting);
    }
}
// saySomething()
//// ReferenceError: Cannot access 'greeting' before
// initialization
/*
The noted ReferenceError occurs from the line with the statement greeting = "Howdy". What's happening is that the greeting variable for that statement belongs to the declaration on the next line, let greeting = "Hi", rather than to the previous var greeting = "Hello" statement.

The only way the JS engine could know, at the line where the error is thrown, that the next statement would declare a block-scoped variable of the same name (greeting) is if the JS engine had already processed this code in an earlier pass, and already set up all the scopes and their variable associations. This processing of scopes and declarations can only accurately be accomplished by parsing the program before execution.

The ReferenceError here technically comes from greeting = "Howdy" accessing the greeting variable too early, a conflict referred to as the Temporal Dead Zone (TDZ).
*/

// var students = [
//     { id: 14, name: "Kyle" },
//     { id: 73, name: "Suzy" },
//     { id: 112, name: "Frank" },
//     { id: 6, name: "Sarah" }
// ];

// function getStudentName(studentID) {
//     for (let student of students) {
//         if (student.id == studentID) {
//             return student.name;
//         }
//     }
// }

// var nextStudent = getStudentName(73);

// console.log(nextStudent);
// // Suzy





// var studentName='suzy';
// function printStudent(studentName) {
//     studentName=studentName.toUpperCase();console.log(studentName);
    
// }


// printStudent("Frank");
// // FRANK

// printStudent(studentName);
// // SUZY

// console.log(studentName);
// // Suzy












// tdz

// console.log(studentName);
// let studentName='suzy'; 
// //ReferenceError:Cannot access studentName before initilization

// studentName='suzy';
// console.log(studentName);
// let studentName;

// prove that let and const do hoist IMP

var studentName='scriptsar'; //Global scope
{
    console.log(studentName);// local scope


    let studentName='suzy';
    console.log(studentName)
}