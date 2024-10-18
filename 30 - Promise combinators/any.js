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
        setTimeout(() => reject("Rejected fast"), 3010);
    });
}

function rejectSlowly() {
    return new Promise((res, reject) => {
        setTimeout(() => reject("Rejected slowly"), 1500);
    });
}

Promise.any([rejectFast(), rejectSlowly()])
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
