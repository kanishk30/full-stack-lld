const grandparent = document.querySelector('#grandparent');
const parent = document.querySelector('#parent');
const child = document.querySelector('#child');

// grandparent.addEventListener('click', function () {
//     console.log('grandparent clicked')
// })

// parent.addEventListener('click', function () {
//     console.log('parent clicked')
// })
// child.addEventListener('click', function () {
//     console.log('child clicked')
// })

// OUTPUT for event bubbling when child is clicked.
// child clicked
// scripts.js:10 parent clicked
// scripts.js:6 grandparent clicked


// EVENT CAPTURING STARTS...

grandparent.addEventListener('click', function () {
    console.log('grandparent clicked (capturing)')
}, true)

parent.addEventListener('click', function () {
    console.log('parent clicked (capturing)')
}, true)
child.addEventListener('click', function () {
    console.log('child clicked (capturing)')
}, true)
