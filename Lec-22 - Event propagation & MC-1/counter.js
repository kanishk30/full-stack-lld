const incrementBtn = document.querySelector('#increment');
const decrementBtn = document.querySelector('#decrement');
const resetBtn = document.querySelector('#reset');
const currentCount = document.querySelector('#count');

let counter = 0;

incrementBtn.addEventListener('click', function () {
    counter++;
    currentCount.textContent = counter;
})

decrementBtn.addEventListener('click', function () {
    if (counter > 0) {
        counter--;
        currentCount.textContent = counter;
    }
})

resetBtn.addEventListener('click', function () {
    counter = 0;
    currentCount.textContent = counter;
})