// show/hide popup modal on + btn click.

const addBtn = document.querySelector('.add-btn');
const modalCont = document.querySelector('.modal-cont');
const textAreaCont = document.querySelector('.textArea-cont');

const removeBtn = document.querySelector('.remove-btn');

let addTaskFlag = false; // on page load initally, popup should not be visible.

let removeTaskFlag = false;

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

// remove tickets...
removeBtn.addEventListener('click', function () {
    removeTaskFlag = !removeTaskFlag; // toggle the value.

    const allTickets = document.querySelectorAll('.ticket-cont');
    console.log(allTickets, 'allTickets');

    for (let i = 0; i < allTickets.length; i++) {
        handleTicketRemoval(allTickets[i])
    }

    if (removeTaskFlag) {
        alert('Delete button has been activated.');
        removeBtn.style.color = 'red';
    } else {
        removeBtn.style.color = 'white'
    }
})


function handleTicketRemoval(ticketElem) {
    console.log(ticketElem)
    ticketElem.addEventListener('click', function () {
        if (removeTaskFlag === true) {
            ticketElem.remove();
        } else {
            console.log('in else statement')
        }
    })

}


// create a ticket dynamically.

function createTicket(ticketColor, ticketTask, ticketID) {
    //create a new ticket HTML (container element)
    const ticketCont = document.createElement('div');
    ticketCont.classList.add('ticket-cont');
    // OR
    // ticketCont.setAttribute('class', 'ticket-cont')
    ticketCont.innerHTML = `
        <div class="ticket-color" style="background-color: ${ticketColor}"></div>
        <div class="ticket-id">${ticketID}</div>
        <div class="ticket-area">${ticketTask}</div>
        <div class="ticket-lock">
            <i class="fa-solid fa-lock"></i>
            <!-- <i class="fa-solid fa-lock-open"></i> -->
        </div>
    `;
    const mainCont = document.querySelector('.main-cont');
    mainCont.appendChild(ticketCont);
    handleLock(ticketCont);
    handleColor(ticketCont)

}

let modalPriorityColor = 'black';

modalCont.addEventListener('keydown', function (ev) {
    console.log(ev.key)
    if (ev.ctrlKey && ev.key === 'Shift') {
        // if (ev.key === 'Shift') {
        const ticketTaskValue = textAreaCont.value;

        // 0-9 & A-Z : 10+26 = 36
        const ticketID = Math.random().toString(36).substring(2, 9);
        // const ticketID = shortid()

        createTicket(modalPriorityColor, ticketTaskValue, ticketID)// pass my color.\, ticket descr.
        modalCont.style.display = 'none'; // hide the modal.
        textAreaCont.value = ''; // clear contents on close.

        // Generating random ID.


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

// lock functionality.


const lockCloseClass = 'fa-lock';
const lockOpenClass = 'fa-lock-open';

function handleLock(ticketElem) {
    const ticketLockElem = ticketElem.querySelector('.ticket-lock');
    const ticketTaskArea = ticketElem.querySelector('.ticket-area')

    ticketLockElem.addEventListener('click', function () {
        console.log('lock icon clicked');

        if (ticketLockElem.children[0].classList.contains(lockCloseClass)) {
            // 1. remove lock close class.
            // 2. add lock open class.
            // 3. now should be able to edit.
            console.log('contains lock class');
            ticketLockElem.children[0].classList.remove(lockCloseClass);
            ticketLockElem.children[0].classList.add(lockOpenClass);

            ticketTaskArea.setAttribute('contenteditable', "true"); // allow html element to be edited.

        } else {
            ticketLockElem.children[0].classList.remove(lockOpenClass);
            ticketLockElem.children[0].classList.add(lockCloseClass);
            ticketTaskArea.setAttribute('contenteditable', "false");
        }
    })

}

const colors = ['lightpink', 'lightgreen', 'lightblue', 'black'];

function handleColor(ticketElem) {
    const ticketColorBand = ticketElem.querySelector('.ticket-color');
    ticketColorBand.addEventListener('click', function () {
        // get the current color of ticket.
        const currentColor = ticketColorBand.style.backgroundColor;

        // get index of that in your Colors array.
        // findIndex method.
        const currentColorIndex = colors.findIndex(function (color) {
            return color === currentColor
        })

        console.log(colors, currentColor, currentColorIndex)

        // increment index & using modulus operator to avoid OVERFLOW.
        const newColorIndex = (currentColorIndex + 1) % colors.length;
        const newTicketColor = colors[newColorIndex];

        ticketColorBand.style.backgroundColor = newTicketColor;

    })
}






