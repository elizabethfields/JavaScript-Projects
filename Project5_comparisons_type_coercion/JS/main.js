document.write(typeof "word"); // typeof operator
document.write("<br>");

function NaN_Function() {
    document.getElementById("Test").innerHTML = 0/0;
}
document.write("<br>");
document.write(2E310);
document.write("<br>");
document.write(-3E310);
document.write("<br>");
document.write(10 > 2); //boolean logic
document.write("<br>");
document.write(10 < 2); //boolean logic
document.write("<br>");
console.log(2 +2); //console.log method
document.write("10" + 5); // type coercion
document.write("<br>");
document.write(10 == 10); // double equal signs
document.write("<br>");
document.write(3 == 11); // double equal signs
document.write("<br>");
X = 82;
Y = "82";
document.write(X === Y); // triple equal signs and an expression combining a string and a number
document.write("<br>");
A = "Magnus";
B = "Magnus";
document.write(A === B); // triple equal signs 
document.write("<br>");
document.write(5 > 2 && 10 > 4); // && logical operator
document.write("<br>");
document.write(5 > 10 || 10 > 4); // || logical operator
document.write("<br>");
function not_Function () { // !(not) operator
    document.getElementById("Not").innerHTML = !(20 > 10);
}
function not_Function1 () { // !(not) operator
    document.getElementById("Not").innerHTML = !(5 > 10);
}