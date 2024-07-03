

// promise static method codeing practice


// function sleep(time,value,state){
//     const promise=new Promise((resolve,reject)=>{

//         setTimeout(() => {
//            if (state==='fulfilled') {
//             return resolve(value)
            
//            } 
//            return reject(new Error (value))
//         }, time);


//     })



//     return promise;
// }


// const p1=sleep(50,'one','fulfilled');


// const p2=sleep(100,'two','fulfilled');


// Promise.all([p1,p2]).then(result=>console.log(result)).catch(e=>console.log(e))

// function formatString(str){
//     // if special apostrope ' or double how to detect them
//     // handle this so that they can be include

//     // also my string that i will pass may be single quoted double or template 
//     // 
// }

// const promise=new Promise((resolve,reject)=>{
//     reject(Error('some error'));
// })

// promise.catch(error=>console.log(error.message)).catch(error=>console.log(error.message))


// function jon() {

//     return new Promise((resolve, reject) => { 
//         reject();
//      })
    
// }
// let promise=jon();

// promise
// .then(()=>{console.log(1)})
// .then(()=>{console.log(2)})
// .then(()=>{console.log(3)})
// .catch(()=>{console.log(1)})
// .then(()=>{console.log(4)})
// .then(()=>{console.log(5)})

// let p1=new Promise((resolve, reject) => {
//     setTimeout(resolve, 500,'p1');
    
// })
// let p2=new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000,'p2');
    
// })
// let p3=new Promise((resolve, reject) => {
//     setTimeout(resolve, 1200,'p3');
    
// })
// let p4=new Promise((resolve, reject) => {
//     setTimeout(reject, 300,'p4');
    
// })
// let p5=new Promise((resolve, reject) => {
//     setTimeout(resolve, 800,'p5');
    
// })

// let promise=Promise.all([p1,p2p,p3,p4,p5])

// promise.then(function data() {
//     data.forEach(data => {
//         console.log(data)
        
//     });
    
// }).catch(function error() {
//     console.log('error',error)
    
// })

// function delay(time) {
//     return new Promise(function(resolve){
//         setTimeout(resolve, time,'success'+time);
//     })
    
// }

// Promise.race([delay(500),delay(1000)]).then(function (data) {
//     console.log(data)
    
// })

// const p=new Promise((resolve, reject) => {
//     resolve('p')
// })
// setTimeout(() => {
//     console.log('set')
// }, 0);
// console.log('start')
// p.then(p=>console.log(p))
// process.nextTick(function name() {
//     console.log('3')
    
// })
// console.log('end')

// const cluster = require('node:cluster');
// const http = require('node:http');
// const numCPUs = require('node:os').availableParallelism();
// const process = require('node:process');

// if (cluster.isPrimary) {
//   console.log(`Primary ${process.pid} is running`);

//   console.log('numCPUs',numCPUs)


//   // Fork workers.
//   for (let i = 0; i < numCPUs; i++) {
//     cluster.fork();
//   }

//   cluster.on('exit', (worker, code, signal) => {
//     console.log(`worker ${worker.process.pid} died`);
//   });
// } else {
//   // Workers can share any TCP connection
//   // In this case it is an HTTP server
//   http.createServer((req, res) => {
//     res.writeHead(200);
//     res.end('hello world\n');
//   }).listen(8000);

//   console.log(`Worker ${process.pid} started`);
// }