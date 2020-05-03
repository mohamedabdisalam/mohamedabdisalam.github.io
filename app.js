//Dark mode
function myDarkMode() {
    let element = document.body;
    element.classList.toggle("dark-mode");
}

//Carousel
// const carouselSlide = document.querySelector('.carousel-slide');
// const carouselImages = document.querySelectorAll('.carousel-slide img');

const playButton = document.querySelector("#playButton");
const mySlides = document.getElementsByClassName("mySlides");

// carousel next button
nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

// //Auto slide
let myIndex = 0;
let timerId = null;

function carousel() {
    // hide all images
    for (let i = 0; i < mySlides.length; i++) {
        mySlides[i].className = "mySlides d-none";
    }
    myIndex++;
    if (myIndex >= mySlides.length) {
        myIndex = 0;
    }
    // make current slide visible
    mySlides[myIndex].className = "mySlides d-block";
}

// carousel play button
playButton.addEventListener("click", () => {
    // check if the carousel is running
    if (timerId) {
        window.clearInterval(timerId);
        timerId = null;
        playButton.innerText = "Play";
    } else {
        timerId = window.setInterval(carousel, 2000);
        playButton.innerText = "Pause";
    }
});

//Button functionality 

function nextSlide() {
    // hide current image
    mySlides[myIndex].className = "mySlides d-none";
    // go to next image
    myIndex++;
    // check if current index is > array
    if (myIndex >= mySlides.length) {
        // reset array index to 0
        myIndex = 0;
    } 
    // show current image
    mySlides[myIndex].className = "mySlides d-block";
};

function prevSlide() {
    // hide current image
    mySlides[myIndex].className = "mySlides d-none";
    // go to next image
    myIndex--;
    // check if current index is < 0
    if (myIndex < 0) {
        // set the index to the end of the array
        myIndex = 2;
    } 
    // show current image
    mySlides[myIndex].className = "mySlides d-block";
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
