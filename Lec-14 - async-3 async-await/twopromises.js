const p = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('Jon Doe')
    }, 5000)
})

async function getData7() {
    console.log('A');

    const val1 = await p;

    console.log('B')
    console.log(val1)

    const val2 = await p;

    console.log('C')
    console.log(val2)
}
getData7();
// A = t0
// await eyworks comes now, JS engine will pause execution for 5s wiythin getdata functuion;
// until p is reslved.
// val1 = jon doe

// B (after 5s) t5
// jon doe t5


// SINCE P HAS ALREADY RESOLVED< NO NEED TO WAIT AGAIN. 
// JS DOESNT WAIT AGAIN.
// DIREVTLY? IMMEDIATELY VALUE RETURNED.

// C t5
// jon doe t5