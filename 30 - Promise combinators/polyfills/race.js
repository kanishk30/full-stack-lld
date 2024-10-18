Promise.myRace = function (inputPromises) {
    if (inputPromises.length === 0) {
        return new TypeError('Pass atleast one value in array')
    }
    const promise = new Promise((resolve, reject) => {
        inputPromises.forEach((inputPromise) => {
            Promise.resolve(inputPromise)
                .then(resolve)
                .catch(reject)
        })

    })
    return promise
}

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


Promise.myRace([fetchUserData(), fetchUserJobs()])
    .then(result => {
        console.log(result)
    })
    .catch(err => console.log('Error:', err))