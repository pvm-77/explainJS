

// scope
// var yourName='javascript';
// getUserName()
// function getUserName(){
//     yourName='scriptsar';
//     console.log(yourName);
//     var yourName;   // it is the declaration
// }

// console.log(yourName)

// nested scope

// function foo(params) {
//     a=1;   // a is not formally declared
//     console.log(a) 
    
// }
// foo();
// a;
// console.log(a)
// console.log(window.a)



// input 
// const name=prompt('what is your name?')
// console.log(`welcome ${name}`);


// loop based questions

// for (const  index = 0; index < 3; index++) {
//     setTimeout(()=>{console.log(index)},1)
    
// }

const shape={
    radius:10,
    diameter:function () {
        return this.radius*2;
        
    },
    perimeter:()=>this.radius*2,
}
// console.log(shape.diameter());
// console.log(shape.perimeter());

