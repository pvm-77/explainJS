

1. # code : 
a program also said as source code or just code, it is a set of special instructions to tell the computer what task to perform


2. # ** statement**:

in computer language a group of words,numbers and operators that perform a specifi tasks is a statement

```js
a=b*2;

```
here the statement `a=b*2` tells the computer to get the current value stored in the variable `b` ,multiply by `2` then store the result back into another we call `a`

- programs are just collections of many such statements which together describe all the steps that it takes to peform your program's purpose.



3. # Expression:
 an expression is any reference to a variable or value or set of variable(s) and value(s) combined with operators
- statements are made up of one or more expressions


eg

```js
a=b*2;
```
this statement has four expressions in it.

`2` is a literal value expression
`b` is a variable expression,which means to retreive its value
`b*2` is an arithmetic expression which means to do the multiplication
`a=b*2` is and assignment expression which means to assign the result of b*2 expression to the variable `a` 

a general expresion that stands alone is called an expression statement such as follows
`b*2`;

<!-- basic terminoly  -->




4. # executing a program
we can either run our program directly in browser console developer console or in a file and run in browser
its upto to u either we  are writing testing code we can use nrowser console or we are writing some 
complex logic we can use a separate .js file extension write the program.



5. # output
   we have console.l() method to print the message 

6. # input
<!--  --> how to take user input in core js we dont have anthing but prompt() witht help of which 
we can take user input and then can understand how to store later that response in variable
1. # operators
there are so many operators that we can use in day to day coding 
some of the operators are as follows

## assignment operators 

## comparison operators 

## arithmetic 

## bitwise 

## logical 

## bigint

stirng 
ternary 
comma 
unary 
relational

2. # value and types
string ,null ,undefined,boolean,number,symbol,objects

### the list of falsy values in js
"" (empty string)
0 -0 Nan (invalid number)
null , undefined 
false 

this is the list of falsy in js other values are truthy 



3. # code comments

4.  # variables
boxes that can contain literal values
5.  # blocks
denoted by curly braces
6.  # conditionals

## if else
## switch
## ternary operator


13. # loops


## for loop
## do while loop
## while loop
## for in loop
## for of loop


14. # functions
a reusable piece of code helpful for organizing code

15. # scope

when you declare a variable  it is avaliable  in that scope  as well as any lower/inner scope;

```js


function foo() {
    var a=1;

    function bar(){
        var b=2;

        function baz() {
            var c=3;
            console.log(a,b,c);
            
        }
        baz();
		console.log( a, b );
    }

    bar();
	console.log( a );
    
}

foo()
```



16.strict mode

what is does?
eliminates some js silent errors by chnaging them to throw errors
fixes mistakes that make it difficult for js engine to 
perform optimizations : strict mode code can sometimes be made to run faster than identical code that's not strict mode
- prohibits some syntax likely to be defined in future version of ecmascript
- 

# function as values
# closure
## module pattern : an usecase  of closure 


# this identifier
it is often related to object oriented patern  in js it is different
if a function has this reference inside it that `this` reference usually points to and object 
but which `object` it points to depends on how the function was called
`this` does not refer the function itself as it is most common misconception


###  four rules how `this` gets set
1. foo() ends up setting this to the global object in non-strict mode -- in strict mode, this would be undefined and you'd get an error in accessing the bar property -- so "global" is the value found for this.bar.
 
2. obj1.foo() sets this to the obj1 object.
3. foo.call(obj2) sets this to the obj2 object.
4. new foo() sets this to a brand new empty object.


# prototypes



# 17 old and new js
it can be  manage by 2 concepts
polyfilling
and transpiling
# non js environment[like browser] and js 
var el = document.getElementById( "foo" );