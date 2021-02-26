var X = 10; //global variable
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100 + "<br>");
}
Add_numbers_1();
Add_numbers_2();

function Add_numbers_3() { //local variable
    var A = 10;
    document.write( 20 + A + "<br>");
}
function Add_numbers_4() {
    var A = 10;
    document.write( A + 100 + "<br>");
}
Add_numbers_3();
Add_numbers_4();

function Add_numbers_5() { //console log
    var A = 10;
    console.log(15 + A);
}
// this is the error function //
// function Add_numbers_6() { //console log
 // console.log(A + 100);
// }

Add_numbers_5();
// call to error function // Add_numbers_6(); 


function get_Date() { // if statement
    if (new Date().getHours() < 18 ) {
    document.getElementById("Greeting").innerHTML = "How are you today?"
    }
}

if (2 < 3) { // if statement
    document.write(" The left number is smaller than the number on the right.")
}

function Weight_Function() { // else statement
    Weight = document.getElementById("Weight").value;
    if (Weight >= 120) {
        Ride = "You weigh enough to go on this ride";
    }
    else {
        Ride = "You do not weigh enough to go on this ride";
    }
    document.getElementById("How much do you weigh?").innerHTML = Ride;
}

function Time_function() { // else if statements
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon";
    }
    else {
        Reply = "It is evening time";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}