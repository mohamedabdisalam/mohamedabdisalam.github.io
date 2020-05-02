//Dark mode
function myDarkMode() {
    let element = document.body;
    element.classList.toggle("dark-mode");
}

//Carousel
// const carouselSlide = document.querySelector('.carousel-slide');
// const carouselImages = document.querySelectorAll('.carousel-slide img');

// //Auto slide
let myIndex = 0;
    carousel();

function carousel() {
    const mySlides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < mySlides.length; i++) {
        mySlides[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > mySlides.length) {myIndex = 1}    
    mySlides[myIndex-1].style.display = "block";  
    setTimeout(carousel, 3000);
  }

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

// // function changeImage(dir) {
// //     var img = document.getElementById("imgClickAndChange");
// //     img.src = imgs[imgs.indexOf(img.src) + (dir || 1)] || imgs[dir ? imgs.length - 1 : 0];
// // }

// // document.onkeydown = function(e) {
// //     e = e || window.event;
// //     if (e.keyCode == '37') {
// //         changeImage(-1) //left <- show Prev image
// //     } else if (e.keyCode == '39') {
// //         // right -> show next image
// //         changeImage()
// //     }
// // }

//  //Play/Pause feature
// // let playing = true;
// // let pauseButton = document.getElementById('pause');

// // function pauseSlideshow(){
// // 	pauseButton.innerHTML = 'Play';
// // 	playing = false;
// // 	clearInterval(slideInterval);
// // }

// // function playSlideshow(){
// // 	pauseButton.innerHTML = 'Pause';
// // 	playing = true;
// // 	slideInterval = setInterval(nextSlide,2000);
// // }

// // pauseButton.onclick = function(){
// // 	if(playing){ pauseSlideshow(); }
// // 	else{ playSlideshow(); }
// // };