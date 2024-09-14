// show/hide popup modal on + btn click.

const addBtn = document.querySelector('.add-btn');
const modalCont = document.querySelector('.modal-cont');

let addTaskFlag = false; // on page load initally, popup should not be visible.

addBtn.addEventListener('click', function () {
    // addTaskFlag = !addTaskFlag; // toggle variable value.
    if (addTaskFlag === true) {
        addTaskFlag = false
    } else {
        addTaskFlag = true;
    }

    console.log('add btn clicked')

    if (addTaskFlag) {
        modalCont.style.display = 'flex'
    } else {
        modalCont.style.display = 'none'
    }

})