function full_Sentence() { //concat method
    var part_1 = "Here is a ";
    var part_2 = "full sentence.";
    var whole_sentence = part_1.concat(part_2);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() { // slice method
    var Sentence = "Here is the slice method at work";
    var Section = Sentence.slice(12,18);
    document.getElementById("Slice").innerHTML = Section;
}

function string_Method() { //toString number method
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() { //toPrecision method
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}