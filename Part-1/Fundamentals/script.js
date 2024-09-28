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