// get all star elmeents..

const stars = document.querySelectorAll('.star');
const ratingDisplay = document.querySelector('#rating');

const parentStar = document.querySelector('#stars')

// stars.forEach(function (star) {
//     star.addEventListener('click', function () {
//         console.log(star)
//         const value = star.getAttribute('data-value')
//         updateRating(value)

//     })
// })

function updateRating(value) {
    // change display of rating ( eg. 2/5)
    ratingDisplay.textContent = value;

    // change color...( filled stars )

    stars.forEach(function (star) {
        const starValue = star.getAttribute('data-value');

        // star.classList.toggle('filled', starValue <= value);
        //  same as above...
        if (starValue <= value) {
            star.classList.add('filled')
        } else {
            star.classList.remove('filled')
        }

    })

}

// using event bubbling...
parentStar.addEventListener('click', function (ev) {
    const target = ev.target;
    console.log(target);
    const value = target.getAttribute('data-value')
    updateRating(value)
})