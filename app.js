//Dark mode
function myDarkMode() {
    let element = document.body;
    element.classList.toggle("dark-mode");
  }
  
  //Carousel
  // const carouselSlide = document.querySelector('.carousel-slide');
  // const carouselImages = document.querySelectorAll('.carousel-slide img');
  
  const playButton = document.querySelector("#playButton");
  
  // //Auto slide
  let myIndex = 0;
  
  function carousel() {
    // changes the image nothing else
    const mySlides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < mySlides.length; i++) {
      mySlides[i].className = "mySlides d-none";
    }
    myIndex++;
    if (myIndex > mySlides.length) {
      myIndex = 1;
    }
    mySlides[myIndex - 1].className = "mySlides d-block";
  }
  
  var timerId = null;
  
  playButton.addEventListener("click", () => {
    if (timerId === null) {
      timerId = window.setInterval(carousel, 2000);
      playButton.innerText = "Pause";
    } else {
      playButton.innerText = "Play";
      window.clearInterval(timerId);
      timerId = null;
    }
  });
  
  nextButton.addEventListener("click", () => {
    const mySlides = document.getElementsByClassName("mySlides");
    debugger;
  });
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
  