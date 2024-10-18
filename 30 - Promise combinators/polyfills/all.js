Promise.myall = function (inputPromises) {
    const promise = new Promise((function (resolve, reject) {
        let resultArr = [];
        let total = 0;
        const inputPromisesLength = inputPromises.length;

        inputPromises.forEach((item, i) => {
            Promise.resolve(item)
                .then((res) => {
                    // to maintain order.
                    resultArr[i] = res;
                    total++;

                    if (total === inputPromisesLength) {
                        resolve(resultArr)
                    }
                })
                .catch(err => {
                    reject(err)
                })
        })
    }))

    return promise;
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

Promise.myall([fetchUserData(), fetchUserJobs(), badPromise()])
    .then((results) => {
        console.log(results)
    })
    .catch((err) => console.log(err))