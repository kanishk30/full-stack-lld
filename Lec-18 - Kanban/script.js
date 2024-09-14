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

function createTicket(ticketColor, ticketTask) {
    //create a new ticket HTML (container element)
    const ticketCont = document.createElement('div');
    ticketCont.classList.add('ticket-cont');
    // OR
    // ticketCont.setAttribute('class', 'ticket-cont')
    ticketCont.innerHTML = `
        <div class="ticket-color" style="background-color: ${ticketColor}"></div>
        <div class="ticket-id">123</div>
        <div class="ticket-area">${ticketTask}</div>
        <div class="ticket-lock">
            <i class="fa-solid fa-lock"></i>
            <!-- <i class="fa-solid fa-lock-open"></i> -->
        </div>
    `;
    const mainCont = document.querySelector('.main-cont');
    mainCont.appendChild(ticketCont);
}

let modalPriorityColor = 'black';

modalCont.addEventListener('keydown', function (ev) {
    if (ev.key === 'Shift') {
        const ticketTaskValue = textAreaCont.value;
        createTicket(modalPriorityColor, ticketTaskValue)// pass my color.\, ticket descr.
        modalCont.style.display = 'none'; // hide the modal.
        textAreaCont.value = ''; // clear contents on close.
    };
})


// selecting priority colors
const allPriorityColors = document.querySelectorAll('.priority-color');

allPriorityColors.forEach(function (colorElem) {
    colorElem.addEventListener('click', function () {
        // on each color , remove active class.

        // allPriorityColors.forEach(function (priorityColorElem) {
        //     priorityColorElem.classList.remove('active')
        // })

        // SAME AS ABOVE.
        for (let i = 0; i < allPriorityColors.length; i++) {
            allPriorityColors[i].classList.remove('active')
        }


        // on clicked element, add the class
        colorElem.classList.add('active');

        // modalPriorityColor = colorElem.classList[0];
        // OR 
        modalPriorityColor = colorElem.getAttribute('data-color');
        // console.log(modalPriorityColor)


        // Implement additional logoc to apply this actove color,
        // to the task as well.

    })

})
// pass selected color to te ticket.


