Promise.myAny = function (inputPromises) {
    const promise = new Promise((resolve, reject) => {

        let rejectionsArr = [];
        let rejectedCount = 0;
        const inputPromisesLength = inputPromises.length;

        inputPromises.forEach((inputPromise, index) => {
            Promise.resolve(inputPromise)
                .then(resolve)
                .catch((error) => {
                    rejectionsArr[index] = error;
                    rejectedCount++;
                    if (inputPromisesLength === rejectedCount) {
                        // reject(rejectionsArr);
                        reject(new AggregateError(rejectionsArr, 'All promises were rejected'))
                    }
                })
        })

    })
    return promise;
}


function resolveQuickly() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Resolved quickly"), 500);
    });
}

function resolveSlowly() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Resolved slowly"), 2000);
    });
}

function rejectFast() {
    return new Promise((res, reject) => {
        setTimeout(() => reject("Rejected fast"), 300);
    });
}

function rejectSlowly() {
    return new Promise((res, reject) => {
        setTimeout(() => reject("Rejected slowly"), 1500);
    });
}

Promise.myAny([rejectFast(), rejectSlowly()])
    .then(result => {
        console.log("Result::::", result);
    })
    .catch(error => {
        console.error("Error:", error);
        if (error instanceof AggregateError) {
            // Log each error individually
            error.errors.forEach((err, idx) => console.log(`Error ${idx + 1}:`, err));
        }
    });
