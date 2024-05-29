 
 # hiding in plane scope
 
 It should now be clear why it's important to hide our variable and function declarations in the lowest (most deeply nested) scopes possible. But how do we do so?

what about hiding var or function declarations in scopes? That can easily be done by wrapping a function scope around a declaration.

Let's consider an example where function scoping can be useful

- The mathematical operation "factorial" (notated as "6!") is the multiplication of a given integer against all successively lower integers down to 1—actually, you can stop at 2 since multiplying 1 does nothing. In other words, "6!" is the same as "6 * 5!", which is the same as "6 * 5 * 4!", and so on. Because of the nature of the math involved, once any given integer's factorial (like "4!") has been calculated, we shouldn't need to do that work again, as it'll always be the same answer.

So if you naively calculate factorial for 6, then later want to calculate factorial for 7, you might unnecessarily re-calculate the factorials of all the integers from 2 up to 6. If you're willing to trade memory for speed, you can solve that wasted computation by caching each integer's factorial as it's calculated:

## sample solution for factorial 

```js
var cache = {};

function factorial(x) {
    if (x < 2) return 1;
    if (!(x in cache)) {
        cache[x] = x * factorial(x - 1);
    }
    return cache[x];
}

factorial(6);
// 720

cache;
// {
//     "2": 2,
//     "3": 6,
//     "4": 24,
//     "5": 120,
//     "6": 720
// }

factorial(7);
// 5040

```


but here cache is global need to hide also cant put cache to factorial because it has survice mutiple function call
so it wd be better to wrap around a function 
However, fixing this over-exposure issue is not as simple as hiding the cache variable inside factorial(..), as it might seem. Since we need cache to survive multiple calls, it must be located in a scope outside that function. So what can we do?

Define another middle scope (between the outer/global scope and the inside of factorial(..)) for cache to be located:

so a better version wd be 

```js 


```
far better this is function expression 
and then far better frm function expression is iife;




<!-- some more point to note todo -->


Scoping with Blocks
You should by this point feel fairly comfortable with the merits of creating scopes to limit identifier exposure.




# closure lifecycle and garbage collection 
 ## per variable or per scope
question that  we need to ask to ourself shd be think of closure as applied only to referenced to outer variable(sg)


# alternative perspective


# why closure
we know what closure is and how it works 
lets see some ways it can improve the code structure and organization of an example program

### scenario: we have a button on a page that when clicked ,shd retrieved and send some data via an ajax request without 
using  closure



# Closer to Closure