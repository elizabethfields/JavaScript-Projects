function countdown() { // countdown function 
    var seconds = document.getElementById("seconds").value;
    
    function tick () { // timer function
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        setTimeout(tick, 1000);
    if(seconds == -1) {
    alert("Time's up!");
    }
        }
tick();
}

var slideIndex = 0; // basic slideshow
showSlides();

function showSlides() { //basic slideshow
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}