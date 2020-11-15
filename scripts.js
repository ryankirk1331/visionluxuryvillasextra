const plusOne = document.querySelector('#plusOne');
const minusOne = document.querySelector('#minusOne');
const displayGuests = document.querySelector('#displayGuests');

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