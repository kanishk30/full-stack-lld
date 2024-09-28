const categoriesContainer = document.querySelector('#categories');

categoriesContainer.addEventListener('click', function (event) {
    // to identify selected element. ( event.target )
    const clickedElement = event.target;
    console.log(clickedElement);

    if (clickedElement.classList.contains('product')) {

        const category = clickedElement
            .closest(".category")
            .querySelector('h2')
            .innerText

        // Same approach as above >

        // const parent = clickedElement.parentElement;
        // console.log('parent', parent)
        // // LOG:: I clicked on JBL under Headphones category.
        // const categoryElem = parent.querySelector('h2')
        // const category = categoryElem.textContent;

        const product = clickedElement.textContent
        console.log(`I clicked on ${product} under ${category}`);

    } else {
        // dont do anything... since product was not clicked,
        // something else was clicked..
    }

})