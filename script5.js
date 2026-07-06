function greet() 
{ 
console.log("Hello from a function declaration!"); 
} 
const sayGoodbye = function() 
Page No - 38                                                                                                                                      FSD – II LAB MANUAL 
{ 
console.log("Goodbye from a function expression!"); 
}; 
const sayThanks = () => 
{ 
console.log("Thanks from an arrow function!"); 
}; 
greet();
sayGoodbye();
sayThanks();