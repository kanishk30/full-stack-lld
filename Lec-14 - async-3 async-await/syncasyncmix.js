function test1() {
    console.log('test1')
}

const test2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('test2')
    }, 3000)
})

function test3() {
    console.log('test3')
}

async function getData8() {
    const data = await test2;
    // WAITUNG HERE FOR 3s
    console.log(data);
}

test1()
getData8()
test3()

// test1 test3 test2

// AWAIT KEYWORD PAUSES THE EXECUTION OF ASYNC FUNCTION until promise is resolved,
// ALLOWING OTHER TASKS to run in meantime.