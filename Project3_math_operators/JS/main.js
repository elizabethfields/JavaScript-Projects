function addition_Function() { // addition function 
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}

function subtraction_Function() { // subtraction function 
    var Subtraction = 5 - 2;
    document.getElementById("Math").innerHTML = "5 - 2 = " + Subtraction;
}

function multiplication() { // multiplication function 
    var simple_Math = 6 * 8;
    document.getElementById("Math").innerHTML = "6 x 8 = " + simple_Math
}

function division() { // division function 
    var simple_Math = 48 / 6;
    document.getElementById("Math").innerHTML = "48 / 6 = " + simple_Math;
}

function more_Math() { // multiple operations function 
    var simple_Math = (1 +2) * 10 / 2 - 5;
    document.getElementById("Math").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}

function modulus_Operator() { // modulus function 
    var simple_Math = 25 % 6;
    document.getElementById("Math").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

function negation_Operator() { // negation function 
    var x = 10; 
    document.getElementById("Math").innerHTML = "The negation operator of 10 is " + -x;
}

function increment() { // increment function 
    var x = 5;
    x++;
    document.write(x);
}

function decrement() { // decrement function 
    var x = 5.25;
    x--;
    document.write(x);
}

window.alert(Math.random()); // random alert function 
window.alert(Math.random() * 100); // random alert between x and y function 