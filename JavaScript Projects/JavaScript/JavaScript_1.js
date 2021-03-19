function switch_example() { //switch statement
    var food = document.getElementById("food_input").value;
    switch(food) {
        case "Italian": 
            food = "Italian rocks"
        break;
        case "Mexican":
            food = "Mexican rocks"
        break;
        default: 
            food = "All food is awesome."
    }
document.getElementById("Food").innerHTML = food;
}

function Hello_World_Function() { // getelementsbyclassname () method
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}