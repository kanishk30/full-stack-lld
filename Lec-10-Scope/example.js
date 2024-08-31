// var a = 20

// function parent() {
//     console.log(a)
// }

// parent()


// function parent() {
//     var a = 20

//     function child() {
//         console.log(a)

//         function child2() {
//             console.log(a)
//         }

//         child2()
//     }
//     child()
// }

// parent()


// function parent() {
//     function child() {
//         console.log(a)

//         function child2() {
//             var a = 20
//             console.log(a)
//         }

//         child2()
//     }
//     child()
// }

// parent()


function parent() {
    var a;
    // console.log(child)
    child()
    a = 10;
    const child = () => {
        console.log(a)

        function child2() {
            console.log(a)
        }

        child2()
    }
}

parent()