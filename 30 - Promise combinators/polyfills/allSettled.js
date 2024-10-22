Promise.myAllSettled = function (inputPromise) {
    return new Promise((resolve) => {
        let completePromise = [];
        let settledCount = 0;

        if (inputPromise.length === 0) return resolve([]);

        inputPromise.forEach((promise, index) => {
            Promise.resolve(promise)
                .then((value) => {
                    completePromise[index] = { status: 'fulfilled', value };
                })
                .catch((reason) => {
                    completePromise[index] = { status: 'rejected', reason };
                })
                .finally(() => {
                    settledCount++;
                    if (settledCount === inputPromise.length) {
                        resolve(completePromise);
                    }
                });
        });
    });
};

// Test case
Promise.myAllSettled([fetchUserData(), fetchUserJobs(), badPromise()])
    .then(results => {
        console.log(results);
        results.forEach((result, i) => {
            if (result.status === 'fulfilled') {
                console.log(`Promise ${i + 1} resolved with value ${result.value}`);
            } else {
                console.error(`Promise ${i + 1} rejected with reason: ${result.reason}`);
            }
        });
    })
    .catch((err) => console.log(err));

function fetchUserData() {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ userId: 1, name: 'John' }), 500);
    });
}

function fetchUserJobs() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(['Job1', 'Job2', 'Job3']), 10);
    });
}

function badPromise() {
    return new Promise((resolve, reject) => reject('Failed!!!')); //
}
