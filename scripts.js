const plusOne = document.querySelector('#plusOne');
const minusOne = document.querySelector('#minusOne');
const displayGuests = document.querySelector('#displayGuests');
const nextArrow = document.querySelector('#nextArrow');
const prevArrow = document.querySelector('#prevArrow');
const displayArr = document.querySelector('#displayArr');
const nextArrowDep = document.querySelector('#nextArrowDep');
const prevArrowDep = document.querySelector('#prevArrowDep');
const displayDep = document.querySelector('#displayDep');
// const arrMonth = document.querySelector('#arrMonth');
// ********************gallery carousel *************************//
const list = document.querySelector('.gallery-carousel__img-container--list');
const imgs = Array.from(list.children);
const nextButton = document.querySelector('.gallery-carousel__btn--right');
const prevButton = document.querySelector('.gallery-carousel__btn--left');
const carouselNav = document.querySelector('.gallery-carousel__nav');
const dots = Array.from(carouselNav.children);


// ************************ Guests Clicker *********************************

let numGuests = 1
let maxGuests = 5;
let minGuests = 0;

plusOne.addEventListener('click', function() {
    if (numGuests !== maxGuests) {
    numGuests += 1;
    displayGuests.textContent = numGuests;
    }
})

minusOne.addEventListener('click', function() {
    if (numGuests !== minGuests) {
    numGuests -= 1;
    displayGuests.textContent = numGuests;
    }
})

// ************************ Date Clickers***************************************

let arrDate = 09
let minDate = 01
let maxDate = 31
let depDate = 23
// let months = 
// ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'June', 'July', 'Aug.', 'Sept.', 'Nov.', 'Dec.']
// let curMonth = months.copyWithin(arrMonth)


nextArrow.addEventListener('click', function() {
    if (arrDate !== maxDate)
    arrDate += 1;
    displayArr.textContent = arrDate;
});

prevArrow.addEventListener('click', function() {
    if (arrDate !== minDate)
    arrDate -=1;
    displayArr.textContent = arrDate;
});

nextArrowDep.addEventListener('click', function() {
    if (depDate !== maxDate)
    depDate += 1;
    displayDep.textContent = depDate;
});

prevArrowDep.addEventListener('click', function() {
    if (depDate !== minDate)
    depDate -= 1;
    displayDep.textContent = depDate;
});

// ************************ gallery carousel **************************
// *****img width*******

const imgWidth = imgs[0].getBoundingClientRect().width;

// ********ARRANGE IMGS**********

// function setImgPosition(img, index) {
//     img.style.left = imgWidth * index + 'px';
// }

const setImgPosition = (img, index) => {
    img.style.left = imgWidth * index + 'px';
}

imgs.forEach(setImgPosition);

const moveToImg = (list, currentImg, targetImg) => {
    list.style.transform = "translateX(-" + targetImg.style.left + ")";
    currentImg.classList.remove('current--img');
    targetImg.classList.add('current--img');
}

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current--img');
    targetDot.classList.add('current--img');
}

const hideShowArrows = (imgs, prevButton, nextButton, targetIndex) => {
    if (targetIndex === 0){
        prevButton.classList.add('hidden');
        nextButton.classList.remove('hidden');
    } else if (targetIndex === imgs.length - 1) {
        prevButton.classList.remove('hidden');
        nextButton.classList.add('hidden');
    } else {
        prevButton.classList.remove('hidden');
        nextButton.classList.remove('hidden');
    }
};

nextButton.addEventListener('click', (e) => {
    const currentImg = list.querySelector(".current--img");
    const nextImg = currentImg.nextElementSibling;
    const currentDot = carouselNav.querySelector('.current--img');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = imgs.findIndex((img) => img === nextImg);
    moveToImg(list, currentImg, nextImg);
    updateDots(currentDot, nextDot);
    hideShowArrows(imgs, prevButton, nextButton, nextIndex);

});

prevButton.addEventListener('click', (e) => {
    const currentImg = list.querySelector(".current--img");
    const prevImg = currentImg.previousElementSibling;
    const currentDot = carouselNav.querySelector('.current--img');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = imgs.findIndex((img) => img === preImg);
    moveToImg(list, currentImg, prevImg);
    updateDots(currentDot, prevDot);
    hideShowArrows(imgs, prevButton, nextButton, prevIndex)

});

carouselNav.addEventListener('click', (e) => {
    const targetDot = e.target.closest("button");
    if (!targetDot) return;
    const currentImg = list.querySelector('.current--img');
    const currentDot = carouselNav.querySelector('.current--img');
    const targetIndex = dots.findIndex((dot) => dot === targetDot);
    const targetImg = imgs[targetIndex];

    moveToImg(list, currentImg, targetImg);
    updateDots(currentDot, targetDot)
    hideShowArrows(imgs, prevButton, nextButton, targetIndex);
});



   
   
