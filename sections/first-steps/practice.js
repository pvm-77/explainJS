// 1
// let newList=[1,2,3].push(4);
// console.log(newList.push(5));


// it gives the error

// 2
// function getPizza(){
//     return 'pizza';
// }

// const getMilk=()=>'milk';
// console.log(getPizza.prototype);

// console.log(getMilk.prototype);

const person={
    name:'scriptsar',
    age:26,
}


// for(const [x,y] of Object.entries(person)){
//     console.log(x,y);
// }

const getList=([x,...y])=>[x,y];
const getUser=user=>{name:user.name,age:user.age}
const list=[1,2,3,4]
const user={name:'ali',age:23}