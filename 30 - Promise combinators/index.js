function fetchUserData() {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ userId: 1, name: 'John' })
            , 500)
    })
}

function fetchUserJobs() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(['JOb1', 'Job2', 'Job3'])
            , 10)
    })
}

function badPromise() {
    return new Promise((resolve, reject) => reject('Failed!!!'))
}

// fetchUserData().then((res) => console.log(res))
// fetchUserJobs().then((res) => console.log(res))

// Promise.all([fetchUserData(), fetchUserJobs(), badPromise()])
//     .then((results) => {
//         console.log(results)
//     })
//     .catch((err) => console.log(err))

/*
Promise.allSettled([fetchUserData(), fetchUserJobs(), badPromise()])
    .then((results) => {
        console.log(results);
        //{ status: 'fulfilled', value: { userId: 1, name: 'John' } },
        //   { status: 'fulfilled', value: [ 'JOb1', 'Job2', 'Job3' ] },
        //   { status: 'rejected', reason: 'Failed!!!' }
        results.forEach((result, i) => {
            if (result.status === 'fulfilled') {
                console.log(`Promise ${i + 1} resolved with value ${result.value}`)
            } else {
                console.error(`Promise ${i + 1} rejected with reason: ${result.reason}`)
            }
        })
    })
    .catch((err) => console.log(err))
 
*/

// Promise.race([fetchUserData(), fetchUserJobs(), badPromise()])
//     .then(result => {
//         console.log(result)
//     })
//     .catch(err => console.log('Error:', err))

// function quickResolve() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve('quickly resolve'), 200)
//     })
// }

// function slowResolveOrReject() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve('Slowly resolved'), 1000);
//         setTimeout(() => reject('Slowly rejected'), 50);
//     })
// }

// Promise.race([slowResolveOrReject(), quickResolve()])
//     .then(result => {
//         console.log('Result: ', result)
//     })
//     .catch(err => {
//         console.log('Error:', err)
//     })

// Promise.any([slowResolveOrReject(), quickResolve()])
//     .then(result => {
//         console.log('Result: ', result)
//     })
//     .catch(err => {
//         console.log('Error:', err)
//     })


function resolveQuickly() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Resolved quickly"), 1500);
    });
}

function resolveSlowly() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Resolved slowly"), 2000);
    });
}

function rejectFast() {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error("Rejected fast")), 300);
    });
}

function rejectSlowly() {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error("Rejected slowly")), 500);
    });
}

Promise.any([resolveQuickly(), resolveSlowly(), rejectFast(), rejectSlowly()])
    .then(result => {
        console.log("Result::::", result);
    })






