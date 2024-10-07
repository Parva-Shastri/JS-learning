// Task - 1
// 1.2
// alert("I'm second Javascript");

/* // Use strict for modern JS:
"use strict";

alert("some code");
// "use strict" below is ignored--it must be at the top

// strict mode is not activated */

// Variables task: from 2.4

    // Task 1
    /* 
        // Declare two variables: admin and name.
        // Assign the value "John" to name.
        // Copy the value from name to admin.
        // Show the value of admin using alert (must output “John”).

    let admin
    let name = "John";

    admin = name;

    alert( admin );
    alert( name ); */

    // Task 2
    /*
        // Create a variable with the name of our planet. How would you name such a variable?
        // Create a variable to store the name of a current visitor to a website. How would you name that variable?
        
        // My answer
            let PLANET_EARTH;
            let currentUser;
            
        // Correct Solution
            let ourPlanetName = "Earth";
            let currentUserName = "John"; */

// Data types

    /* 

    // `typeof` is a operator, not a function!

    typeof undefined // "undefined"

    typeof 0 // "number"

    typeof 10n // "bigint"

    typeof true // "boolean"

    typeof "foo" // "string"

    typeof Symbol("id") // "symbol"

    typeof Math // "object"

    typeof null // "object" // `null` is not a object, this is an error of `typeof`

    typeof alert // "function" // function is not a data type in JS, another error by `typeof`
    */
    /*
    // Practice tasks
    let name = "Parva";

    let num1 = 11;
    let num2 = 8;

    alert( `hello, I am ` + (num1 + num2) + " years old!");

    alert( `hello ${'name'}` );

    alert( `hello ${name}` );
    */

// Interaction: alert, prompt, confirm

    // Task
    /*
    let name = prompt("What is your name?", "John");

    confirm(`Your name is ${name}`);
    */

// Type conversions
    /*
    // String conversion

        // let value = true;
        // alert(typeof value); // boolean, by default

        // value = String(value)
        // alert(typeof value); // string, as converted to string

        // alert("6" / "2"); // 3, as strings are converted to numbers
    
    // Number conversion

        // let str = "100";
        // alert(typeof str);

        // str = Number(str);
        // alert(typeof str);

        // let value = Number("My age");
        // alert(typeof value); // number, as it is converted
        // alert(value); // Nan, as it's a string, not a number
        // alert(Number(true)); // 1
        // alert(Number(false)); // 0

    // Boolean conversion

        // alert(Boolean(1)); // true
        // alert(Boolean(0)); // false
        // alert(Boolean('0')); // true, as this is considered as string

    */

// Basic operators, maths
    /*
    // Fix, the result is 12, but it should be 3
    let a = prompt("First number?", 1);
    let b = prompt("Second number?", 2);

    alert(+a + +b); // added `+` before each variables to achive the output
    */

// Functions
/*
let userName = "John";
function showUser() {
    // userName = "Ana"; // This will override the userName variable after this function is used
    // let userName = "Bob"; // This will only override wherever this function is used
    alert(userName);
 }

 // Below are the examples of functions with parameters
 // function sample() {
    //     return "Default message!"; // returns the value as output
    //   }
    
    //   function showMessage(from = "Anonymous", text = sample()) { // default values can be either "text" or another "function"
    //     alert(from + ": " + text);
    //   }
    //   showMessage("Alice", "Hello!"); // Alice: Hello!
    //   showMessage("Bob"); // Bob: Default message
    //   showMessage(undefined, "Hello, world!"); // Anonymous: "Hello, world!"
    
    // Task
        // function min(a, b) {
        //     if(a < b) {
        //         alert(a);
        //         return a;
        //     }
        //     else {
        //         alert(b);
        //         return b;
        //     }
        // }
        
        // min(15, 6);
*/

        // pow(x, n)
        // Provided x & n
        // Then 'x' should be multiplied 'n' times
        
        //  |- - - Wrong code - - -| //
            // function pow(x, n) {
            //     let x = prompt("Value of x?", "");
            //     let n = prompt("Value of n?", "");

            //     let answer = (x *= n);
            // }

            // alert(pow());
        
        // Correct code
            // function pow (x, n) {

            //     let answer = x;
            //     for (let i = 1; i < n; i++) {
            //         answer *= x;
            //     }

            //     return answer;
            // }

            // let x = prompt("Value of x?", "");
            // let n = prompt("Value of n?", "");

            // if (n < 1) {
            //     alert("Not supported, use positive number");
            // }
            // else {
            //     alert( pow(x, n) );
            // }

// Arrow functions

    // let ask = (question, yes, no) => {
    //     confirm(question) ? yes() : no();
    // }

    // let showYes = function() {
    //     alert("You agreed.");
    // };
    
    // let showNo = function() {
    //     alert("You cancelled the execution.");
    // };

    // ask("Do you agree?", showYes, showNo);

// Objects
    // let user = new Object(); // Object constructor
    // let userAgain = {}; // Object literal

    // Example 1
        // let user = { // object
        //     name: "John", // key: value
        //     age: 30
        // };

        // alert(user.name);
        // alert(user.age);

        // // set // from outside the object
        // user["likes birds"] = true;

        // // get
        // alert(user["likes birds"]);
        
        // // delete
        // delete user["likes birds"];
        // alert(user["likes birds"]);
    
    // Example 2
        // function user (name, age) {
        //     return {
        //         name,
        //         age,
        //     }
        // }

        // let details = user("John", 20);

        // alert(details.name);

    // Example 3 (self)
        // function calc (num1, num2) {
        //     return {
        //         num1,
        //         num2
        //     }
        // }

        // let ans = calc(
        //     prompt("Number 1?", ""),
        //     prompt("Number 2?", "")
        // )

        // alert(+ans.num1 + +ans.num2);

    // "Key" in object
        // let user = { name: "John", age: 30 };

        // alert( "age" in user ); // true, user.age exists
        // alert( "blabla" in user ); // false, user.blabla doesn't exist
        // let key = "age";
        // alert( key in user ); // true, property "age" exists

    // for..in examples
        // let sample = {
        //     a: "String",
        //     b: 20,
        //     c: undefined
        // };

        // for (let key in sample) {
        //     alert( key );               // prints the "key"
        //     alert( sample[key] );       // prints "value" of the key
        //     alert(key in sample);       // true/false
        // }