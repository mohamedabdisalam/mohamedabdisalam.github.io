//Dark mode
function myDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
}

const playPauseButton = document.querySelector("#playPauseButton");
const mySlides = document.getElementsByClassName("mySlides");

// carousel next button
nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

// //Auto slide
let currentIndex = 0; //minimum = 0, max = 2
let timerId = null;

function carousel() {
    // hide all images
    for (let i = 0; i < mySlides.length; i++) {
        mySlides[i].className = "mySlides d-none";
    }
    currentIndex++;
    if (currentIndex >= mySlides.length) {
        currentIndex = 0;
    }
    // make current slide visible
    mySlides[currentIndex].className = "mySlides d-block";
}

// carousel playPause button
playPauseButton.addEventListener("click", () => {
    // check if the carousel is running
    if (timerId) { //pause carousel
        window.clearInterval(timerId);
        timerId = null;
        playPauseButton.innerText = "Play";
    } else { //play carousel
        timerId = window.setInterval(carousel, 2000);
        playPauseButton.innerText = "Pause";
    }
});

//Button functionality 

function nextSlide() {
    // hide current image
    mySlides[currentIndex].className = "mySlides d-none";
    // go to next image
    currentIndex++;
    // check if current index is >= array length (3)
    if (currentIndex >= mySlides.length) {
        // reset array index to 0
        currentIndex = 0;
    } 
    // show current image
    mySlides[currentIndex].className = "mySlides d-block";
};

function prevSlide() {
    // hide current image
    mySlides[currentIndex].className = "mySlides d-none";
    // go to next image
    currentIndex--;
    // check if current index is < 0
    if (currentIndex < 0) {
        // set the index to the end of the array
        currentIndex = 2;
    } 
    // show current image
    mySlides[currentIndex].className = "mySlides d-block";
}

//Keyboard navigation

document.onkeydown = checkKey;

function checkKey(e) {
    
    e = e || window.event;

    if (e.keyCode == '39') {
        nextSlide();
    } else if (e.keyCode == '37') {
        prevSlide();
    }

}
