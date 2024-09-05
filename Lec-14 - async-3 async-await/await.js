const p = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('Jon Doe')
    }, 6000)
})

function getData5() {
    p.then(function (res) {
        console.log(res)
    });

    console.log('Hello world.')
}

async function getData6() {
    // JS ENGINE WAITED FOR PROMISE TO GET RESOLVED AND THEN MOVED AHEAD IN EXECUTION.
    const res = await p;
    console.log('Hello world from ', res)
    console.log(res)
}

// getData5();
getData6();