function countdown() {
    var seconds = document.getElementById("seconds").value;
    
    function tick () {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        setTimeout(tick, 1000);
    if(seconds == -1) {
    alert("Time's up!");
    }
        }
tick();
}

var i = 0;
function change_image();
document.getElementById("slideshow").src = "img" + (i++ % 6) +"
    .jpg";
}
function slider() {
    setInterval(change_image, 1000);
}