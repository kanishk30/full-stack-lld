function parent() {
    var a = 10


    function child() {
        console.log(a)
    }

    // Remember that functions are first class citizens
    return child
}

let functionReceived = parent()
functionReceived()
// console.log(functionReceived)