

// CHAINING OF PROMISES.

let cleanRoom = function () {
    return new Promise(function (res, rej) {
        if (Math.random() > 0.5) {
            res('Cleaned the room')
        } else {
            rej('Did not clean the room')
        }
    })
}

function removeGarbage(msg) {
    // msg = Cleaned the room
    return new Promise(function (res, rej) {
        if (Math.random() > 0.5) {
            res(msg + ' Removed garbage')
        } else {
            rej('Failed to remove garbage.')
        }

    })
}

let winChocolate = function (msg) {
    // only when above two are done.
    // msg =  Cleaned the room  Removed garbage
    return new Promise(function (res, rej) {
        res(msg + ' then won chocolate.')
    })
}

// CHAINING OF Promise.

cleanRoom()
    .then(function (result) {
        // result = Cleaned the room
        console.log(result)
        return removeGarbage(result)
    })
    .catch(function (err) {
        console.log('Catch of cleanroom/removegarbage ', err);
        return 'SCALER'
    })

    .then(function (result2) {
        console.log('line 48:', result2)
        // result2 =  Cleaned the room  Removed garbage
        return winChocolate(result2)
    })
    .catch(function (err) {
        console.log('winChocolate ', err)
    })

    .then(function (result) {
        console.log('Finished::  ', result)
    }
    )
    .catch(function (err) {
        console.log('Final CATCH ::', err);
    })



