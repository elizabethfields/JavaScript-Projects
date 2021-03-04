function Call_Loop() { // while loop
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

var Instruments = ["guitar", "drums", "piano", "bass"];
var Content = "";
var Y;
function for_Loop() { // for loop
    for (Y = 0; Y < Instruments.length; Y++) {
    Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() { //array
    var Dog = [];
    Dog[1] = "barking";
    Dog[2] = "playing";
    Dog[3] = "hunting";
    document.getElementById("Array").innerHTML = "My dog is " + Dog[1] + ".";
}

function constant_function() { // const keyword
    const accessory = {type:"purse", brand:"Fendi", color:"black"}
    accessory.color = "green";
    accessory.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " + accessory.type + " was " + accessory.price; //string
    document.getElementById("Constant_2").innerHTML = "The " + accessory.type + " comes in " + accessory.color; //string
}

var X = 80; // let keyword
document.write(X);
{
    let X = 30;
    document.write("<br>" + X);
}
document.write("<br>" + X);

let cat = { //object
    breed: "lynx ",
    age: "2 years old",
    color: "white ",
    description: function () { //this keyword
        return "My pet is a " + this.age + "<br>" + this.breed + this.color + " cat and I love her.";
        }
};
document.getElementById("Object").innerHTML = cat.description();