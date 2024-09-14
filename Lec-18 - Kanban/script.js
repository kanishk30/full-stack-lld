// show/hide popup modal on + btn click.

const addBtn = document.querySelector('.add-btn');
const modalCont = document.querySelector('.modal-cont');
const textAreaCont = document.querySelector('.textArea-cont');


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

// create a ticket dynamically.

function createTicket() {
    //create a new ticket HTML (container element)
    const ticketCont = document.createElement('div');
    ticketCont.classList.add('ticket-cont');
    // OR
    // ticketCont.setAttribute('class', 'ticket-cont')
    ticketCont.innerHTML = `
        <div class="ticket-color"></div>
        <div class="ticket-id">123</div>
        <div class="ticket-area">Study today.</div>
        <div class="ticket-lock">
            <i class="fa-solid fa-lock"></i>
            <!-- <i class="fa-solid fa-lock-open"></i> -->
        </div>
    `;
    const mainCont = document.querySelector('.main-cont');
    mainCont.appendChild(ticketCont);
}

modalCont.addEventListener('keydown', function (ev) {
    if (ev.key === 'Shift') {
        createTicket()
        modalCont.style.display = 'none'; // hide the modal.
        textAreaCont.value = ''; // clear contents on close.
    };


})

