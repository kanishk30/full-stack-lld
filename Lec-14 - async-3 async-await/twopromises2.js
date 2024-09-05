const p = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('Jon Doe')
    }, 10000)
})
const p2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('Jon Doe2')
    }, 5000)
})

async function getData7() {
    console.log('A');

    const val1 = await p;
    console.log('B')
    console.log(val1)

    const val2 = await p2;
    console.log('C')
    console.log(val2)
}
getData7();

// A (immediately.) - t0
// wait 10s
// t10
// val1 = jon doe
// B
// jon doe
// c
// jon doe2




