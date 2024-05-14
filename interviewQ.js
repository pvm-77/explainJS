


// const bar={
//     name:'abc'
// }
const bar=null
console.log(typeof bar==='object' && bar!==null);

const myObject={
    foo:'bar',
    func:function () {
        var self=this
        console.log('outer func: this.foo= ',this.foo)
        console.log('outer func: slef.foo= ',self.foo)
        
    }
}


// 