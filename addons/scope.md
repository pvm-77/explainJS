# how js engine processes our program before it runs?


# how scope works in javascript?
js program first parsed/compiled in one phase then in another phase it got executed
the code author' decision on where to place variables,functions and the blocks with respect to each other are analyzed according to the rules of scope ,during parsing/compilation phase 
the resulting scope structure is generally unaffected by the runtime conditions

the processing of js programs ocuurs in 2 phase
it is observable fact 
3 program charactersit to prove this
syntax errors early errors and hoisting

# how js engine identifies variable and determine the scope of a program as it is compiled?
other than declarations all oocurences of variables/identifier in a program serve one of 2 role target of an assignment or source of a value


what is scope chain
The connections between scopes that are nested within other scopes is called the scope chain, which determines the path along which variables can be accessed. The chain is directed, meaning the lookup moves upward/outward only
