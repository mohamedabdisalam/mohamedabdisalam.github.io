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

//   document.body.addEventListener( "keydown", function( e ) {
// 	var code = e.keyCode;
// 	var evt = new MouseEvent( "click" );  // click event

// 	if( code == 39 ) { // Left arrow
// 		prevButton.addEventListener.dispatchEvent( evt );
// 	}
// 	if( code == 37 ) { // Right arrow
// 		nextButton.addEventListener.dispatchEvent( evt );
// 	}

// }, false);

document.onkeydown = checkKey;

function checkKey(e) {
    
    e = e || window.event;

    if (e.keyCode == '39') {
        nextSlide();
    } else if (e.keyCode == '37') {
        prevSlide();
    }

}

//   document.onkeydown = function(e) {
//     switch (e.keyCode) {
//         case 37:
//             //left
//             e.preventDefault();
//             myIndex--;
//             showSlides(slideIndex);
//             break;
//         case 39:
//             //right
//             e.preventDefault();
//             myIndex++;
//             showSlides(slideIndex);
//             break;
//     }
// }

// next button

// //Buttons

// const prevBtn = document.querySelector('#prevBtn');
// const nextBtn = document.querySelector('#nextBtn');

// //Counter

// let counter = 1;

// let size = carouselImages[0].offsetWidth;

//  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//  //Button listeners
// nextBtn.addEventListener('click', () => {
//     if (counter >= carouselImages.length - 1) return;
//     carouselSlide.style.transition = "transform 0.4s ease-in-out";
//     counter++;
//     carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
// });

// prevBtn.addEventListener('click', () => {
//     if (counter <= 0) return;
//     carouselSlide.style.transition = "transform 0.4s ease-in-out";
//     counter--;
//     carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
// });

// carouselSlide.addEventListener('transitionend', () => {
//     if (carouselImages[counter].id === 'lastClone') {
//         carouselSlide.style.transition = "none";
//         counter = carouselImages.length - 2;
//         carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
//     }
//     if (carouselImages[counter].id === 'firstClone') {
//         carouselSlide.style.transition = "none";
//         counter = carouselImages.length - counter;
//         carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
//     }
// });