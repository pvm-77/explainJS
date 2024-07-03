



// object copy operation 

// naive approach 1 just assignment operator user

// const user={
//     name:'scriptsar',
//     age:26,
//     address:{
//         street:'23-A random',
//         city:'imagcity'
//     }
// }

// const newUser=user;
// // just want to update name
// newUser.name="doppelganger"
// console.log('the user details are:',user)
// console.log('the newUseser details are:',newUser)

// problems here i change in newUser but it reflect in user as well i dont want this



// approach 2 just looping around user and just property one by one

// function copy(user) {

//     const newUser={}
//     // here copy user property one by one 
//     for (const key in user) {
//        newUser[key]=user[key]
//     }
//     return newUser;
    
// }

// const newUser=copy(user)
// newUser.address.street='sample'
// console.log(user)
// console.log(newUser)
// still problem as if i change nested object then it is also affecting original and other issues as well

// objCopy object has a new Object.prototype method different from the mainObj object prototype method, which is not what we want. We want an exact copy of the original object.
// Property descriptors are not copied. A “writable” descriptor with value set to be false will be true in the objCopy object.
// The code above only copies enumerable properties of mainObj.


// shallow copy 

const user={
    name:'scriptsar',
    address:{
        street:'123,some lane',
        city:'wonder land'
    }
}
// method for shallow copies

// 1. spread syntax
// const newUser={...user}
// console.log(newUser)

// 2. Object.assign
// const newUser=Object.assign({},user);
// newUser.name='ali'
// console.log(newUser)
// console.log(user)
                                                  
const ingri=[1,2,3,4,5,6,7,8,9,665,565]
                                                     
// 3.concat
// 4.from 
// 5. slice
// deep copy                                                                       
                                                          

