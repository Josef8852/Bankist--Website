'use strict';

let modal = document.querySelector('.modal');

let overlay = document.querySelector('.overlay');

let showForm = document.querySelectorAll('.open');

let closeForm = document.querySelector('.close');

let blurImg = document.querySelectorAll('.blur-img');

let actions = document.querySelectorAll('.action');

let textOne = document.querySelector('.text1');

let textTwo = document.querySelector('.text2');

let textThree = document.querySelector('.text3');

let fade = document.querySelectorAll('.fade');

let animate = document.querySelectorAll('.section-hide');

let rightBtn = document.querySelector('.right');

let leftBtn = document.querySelector('.left');

let slides = document.querySelectorAll('.testBox');




let showModal = () => {
  modal.style.display = 'block';
  overlay.style.display = 'block';
};

let hideModal = () => {
  modal.style.display = 'none';
  overlay.style.display = 'none';
};

showForm.forEach((element) => {
  element.addEventListener('click', showModal);

});


closeForm.addEventListener('click', hideModal);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    hideModal();
  }
});


/* lazy effect */

let observer = new IntersectionObserver((entries) => {

  /* entries is an array of objects */

  entries.forEach((entry) => {

    /* entry is an object  */

    if (entry.isIntersecting) {

      setTimeout(() => {

        entry.target.style.filter = 'blur(0)';

        /* we use the target prop to get the element itself  */

      }, 800);

    }
  });
}, { threshold: 1.0 }); /* threshold for % of visibility 1.0 stands for 100% */



blurImg.forEach((element) => {
  observer.observe(element);
});


/* Tabbed Component */

let items = [textOne, textTwo, textThree];

let changeState = (arr, i, shown) => {

  arr[i].classList.add('show');

  arr.forEach((el) => {
    if (el !== shown) {
      el.classList.add('remove');
      el.classList.remove('show');
    }

  });


};

actions.forEach((element, index) => {

  element.addEventListener('click', () => {

    changeState(items, index, items[index]);


  });

});


fade.forEach((element) => {

  element.addEventListener('mouseover', () => {

    for (let i = 0; i < fade.length; i++) {
      if (fade[i] !== element) {
        setTimeout(() => {

          fade[i].classList.toggle('opacity');

        }, 250);
      }
    }

  });

  element.addEventListener('mouseout', () => {

    for (let i = 0; i < fade.length; i++) {
      if (fade[i] !== element) {
        fade[i].classList.remove('opacity');
      }
    }

  });

});



/* section animation */
let observe = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if (entry.isIntersecting) {
      entry.target.classList.remove('section-hide');
    }

  });


}, { threshold: 0.15 });

animate.forEach((element) => {

  observe.observe(element);

});


/* Slider Component */

let currentSlide = 0, currentPos;

let slide = (counter) => {
  slides.forEach((element, i) => {


    if (counter <= 2) {
      currentPos = 200 * (i - counter);
      element.style.transform = `translate(${currentPos}%)`;
    }



  });
};

rightBtn.addEventListener('click', () => {

  currentSlide++;

  if (currentSlide === 3) {
    currentSlide = 0;
    slide(0);
  }
  else {
    slide(currentSlide);
  }


});


leftBtn.addEventListener('click', () => {

  if (currentSlide === 0) {
    currentSlide = 2;
  }
  else {
    currentSlide--;
  }


  slide(currentSlide);

});

















