// get element
const elem = document.querySelector('#myDiv');

// Add a class
elem.classList.add('highlight');

// Remove a class.
elem.classList.remove('visible')

// Check if class exists.

if (elem.classList.contains('content')) {
    console.log('content class is present in this div.')
} else {
    console.log('content class not present.')
}