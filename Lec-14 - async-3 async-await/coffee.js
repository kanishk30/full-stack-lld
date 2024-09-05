/**
 * thought process.
 *  1. placeorder 
 *  2A. if coffee - processOrder
 *  2B. - if !coffee - reject. dont do anything.
 */

// function placeOrder(drink) {
//     return new Promise(function (resolve, reject) {
//         if (drink === 'coffee') {
//             resolve('Order placed for coffee')
//         } else {
//             reject('Order cannot be placed, Only coffee is available.')
//         }
//     })
// }

async function placeOrder(drink) {
    if (drink === 'coffee') {
        return 'Order placed for coffee'
    } else {
        throw new Error('Order cannot be placed, Only coffee is available.')
    }
}

function processOrder(status) {
    // status = Order placed for coffee
    return new Promise(function (resolve, reject) {
        resolve(status + ' & served.')
    })
}

function generateBill(processedMsg) {
    return new Promise(function (res, rej) {
        setTimeout(function () {
            console.log('Bill generated.')
            res(processedMsg + ' total bill is of 100 rupees for one coffee.')
        }, 3000)
    })
}

placeOrder('coffee')
    .then(function (orderStatus) {
        console.log('Placeorder res:', orderStatus); //  Order placed for coffee
        return processOrder(orderStatus)
    })
    .then(function (finalStatus) {
        // finalStatus Order placed for coffee & served
        console.log("finalStatus:", finalStatus) // 
        return finalStatus
    })
    .then(function (statusProcess) {
        const billGeneratedPromise = generateBill(statusProcess);
        console.log('Fill the feedback...')
        return billGeneratedPromise
    })
    .then(function (bill) {
        console.log(bill)
    })

// USING ASYNC AWAIT

async function serveOrder() {
    const orderStatus = await placeOrder('coffee');
    console.log(orderStatus);
    const processedOrder = await processOrder(orderStatus);
    console.log(processedOrder);
    const bill = await generateBill(processedOrder);
    console.log(bill)

}

serveOrder();


// ERROR HANDLING.
// use try-catch.


async function serveOrder2() {

    try {
        const orderStatus = await placeOrder('coffee');
        console.log(orderStatus);
        const processedOrder = await processOrder(orderStatus);
        console.log(processedOrder);
        const bill = await generateBill(processedOrder);
        console.log(bill)
    } catch (error) {
        console.log(error)
    }

}

serveOrder2();