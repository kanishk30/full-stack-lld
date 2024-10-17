let arr = [1, 2, 3, 4];
const res = arr.reduce((acc, curr) => acc + curr, 10)
// console.log(res);


Array.prototype.myReduce = function (callback, initialValue) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');
    // console.log(callback, arguments)
    console.log("arguments.length", arguments.length)
    if (this.length === 0 && arguments.length === 1) {
        throw new TypeError('Reduce do not work with no initial value.')
    }
    // setting accumukator & index
    var accumulator = initialValue ? initialValue : this[0];
    // if acc & currVal not supplied in reduce callback; then start from 1st index
    // since 0th index has alreafy been set as accumulator. 
    // we dont want to cnsider that twice.
    console.log({ accumulator, initialValue })
    var startIndex = initialValue ? 0 : 1;

    for (var i = startIndex; i < this.length; i++) {
        // check if index exists in array to handle sparse cases
        if (i in this) {
            accumulator = callback(accumulator, this[i], i, this);
        }
    }
    return accumulator
}

// const res2 = [1, 2, 3].myReduce((acc, curr) => acc + curr, 10);
// const res3 = [].myReduce((acc, curr) => acc + curr, 10);
// const res4 = [].myReduce((acc) => acc);
const res5 = [1, 2, 3].myReduce((acc, curr) => acc + curr);
// const res6 = arr.myReduce()
// console.log("output", res2);
// console.log(res3);
// console.log(res4);
console.log(res5);
// console.log(res6);