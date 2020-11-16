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

// ************************ Guests Clicker *********************************

let numGuests = 1;
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






    
   
   
