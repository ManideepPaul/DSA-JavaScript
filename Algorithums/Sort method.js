//The in built sort method accepts a function and arranges according to the return value.


//The return value will be -ve so it will arrange in accending order.
['a','abc','ab', 'bcbfg', 'asdf'].sort((a, b) => a.length - b.length)

//The return value will be +ve so it will arrange in decending order.
['a','abc','ab', 'bcbfg', 'asdf'].sort((a, b) => b.length - a.length)

//This will also return -ve so it will arrange in accending order.
[12, 4, 8, 354, 98].sort((a, b) => a - b);

//This will also return +ve so it will arrange in decending order.
[12, 4, 8, 354, 98].sort((a, b) => b - a);