// Types of function

// Named function
function named(){
    console.log("this is a named function");
}

named();

// IIFE function (Immediately Invoked Function Expression) - Will be executed immediately there itself. We cannot call this func anywhere
(function greet(){
    console.log("Good morning");
})();

//Anonymous function
const anon = function() {
    console.log("This is a anon func");
}

anon();

//callback function using arrow

function greet(name){
    console.log("hi");
    name()
}

greet(()=>console.log("Rizwan"));