function Ride_Function () {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride. ";
}

function Vehicle(Make, Model, Year, Color) { //object constructor
    this.Vehicle_Make = Make; //keywords to indicate the object that is the owner of the code
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle ("Dodge", "Viper", 2020, "Red" ); //keywords to assign variables and objects
var Emily = new Vehicle("Jeep", "Trail Hawk", " 2019", "White and Black");
var Erik = new Vehicle ("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function Cat(Age, Breed, Size, Color) { //object constructor
    this.Cat_Age = Age; //keywords to indicate the object that is the owner of the code
    this.Cat_Breed = Breed;
    this.Cat_Size = Size;
    this.Cat_Color = Color;
}

var Georgia = new Cat (2, "Lynx", "small", "white");
function myCat() {
    document.getElementById("New_and_This").innerHTML =
    "Georgia is a " + Georgia.Cat_Age + " year old " + Georgia.Cat_Breed + " with a " + Georgia.Cat_Size + " build and " + Georgia.Cat_Color + " fur.";
}

function count_Function() { //nested function
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_Point = 9;
        function Plus_one() {Starting_Point += 1;}
        Plus_one();
        return Starting_Point;
    }
}