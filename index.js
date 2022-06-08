const chai = require("chai");
const spies = require("chai-spies");
chai.use(spies);

function receivesAFunction(callback) {
    callback()
    
}
function returnsANamedFunction() {
     return function namedFn() {      
        console.log(named)
    } 
}
function returnsAnAnonymousFunction() {
   return () => console.log(anonymous )
}

