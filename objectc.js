





// METHOD 3: Create an object using Object.create()  but a already existed object needed as the prototype

// what is prototype?


//   me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
//   me.isHuman = true; // Inherited properties can be overwritten

//   me.printIntroduction();
// //   // Expected output: "My name is Matthew. Am I human? true"

// const t=Object.create({__proto__:null});
// t.name='ye'
// console.log(t.name);


// // configuration of objects properties 

// function Theme(primaryColor,secondaryColor,fontSize){
//     Object.defineProperties(this, {
//         primaryColor: { value: primaryColor, writable: true }, // Primary color is writable
//         secondaryColor: { value: secondaryColor, writable: true }, // Secondary color is writable
//         fontSize: { value: fontSize, writable: true }, // Font size is writable
//         fontFamily: { value: 'Arial', writable: false }, // Font family is not writable
//         backgroundColor: { value: '#ffffff', writable: false } // Background color is not writable
//     });
// }


// // Creating a new theme
// const defaultTheme = new Theme('#336699', '#99ccff', '16px');

// // Modifying theme properties
// defaultTheme.primaryColor = '#ff0000'; // Allowed
// defaultTheme.fontFamily = 'Helvetica'; // Attempting to modify, but it's not writable

// // Accessing theme properties
// console.log(defaultTheme.primaryColor); // Output: #ff0000 (modified)
// console.log(defaultTheme.fontFamily); // Output: Arial (not modified)
// console.log(defaultTheme.backgroundColor); // Output: #ffffff























// object property things

// const cart={
//     product:'shirt',
//     price:400,


// }
// let descriptor=Object.getOwnPropertyDescriptor(cart,'product')
// console.log(descriptor)


//object prototype



const animal = {

}
function Person(name) {
    this.name = name;
}

// class Person {
//     constructor(name) {
//         this.name = name
//     }
// }




// loops for objects 





// copy operationsin objects

const a = {
    name: 'sarfaraz',
    alive: true,
}


// const b=a;
// // console.log(b)
// b.name='yasir'
// console.log(b)
// console.log(a)

// understand shallow copy and deep copy


// shallow copy 


const originalBoard = {
    id: 1,
    name: 'Project Board',
    lists: [
        {
            id: 101, title: 'To Do',
            cards: [
                { id: 1001, title: "Task 1", description: "Description for Task 1" }
            ],
        },
        {
            id: 102,
            title: "In Progress",
            cards: [{ id: 1002, title: "Task 2", description: "Description for Task 2" }]
        }
    ]

}

// how to shallow copy
// 1 usinf spread operator

// const shallowCopyBoard={...originalBoard}


// console.log('the shallow copy before any operation :',shallowCopyBoard)
// console.log('the original board is :',originalBoard);
// originalBoard.name='sample'

// console.log('the original board is :',originalBoard);
const ingredientsList = ["noodles", { list: ["eggs", "flour", "water"] }];
const ingredientsListCopy = Array.from(ingredientsList);
console.log(ingredientsListCopy);
// ["noodles",{"list":["eggs","flour","water"]}]

console.log('thhe objects are equal:',ingredientsList!==ingredientsListCopy)

// what is shallow copy?
