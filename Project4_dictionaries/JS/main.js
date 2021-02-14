function my_Dictionary() { // KVP
    var Animal = {
        Species: "Cat",
        Color: "White",
        Breed: "Lynx",
        Age: 2,
        Sound: "Meow!",
    };
    delete Animal.Sound; // delete statement
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}