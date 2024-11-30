import React, { useState, useMemo } from "react";

const generateLargeArray = () => {
    const largeArr = [];
    for (let i = 0; i < 1000000; i++) {
        largeArr.push(i)
    }
    return largeArr;
}

const sumArray = (arr) => {
    console.log('calculating sum...');
    return arr.reduce((acc, curr) => acc + curr, 0)
}

const LargeSumArr = () => {
    const [count, setCount] = useState(0);
    // const largeArr = generateLargeArray();
    const largeArr = useMemo(() => generateLargeArray(), []);
    // const sum = sumArray(largeArr);
    const sum = useMemo(() => sumArray(largeArr), [largeArr]);

    return (
        <div>
            <h1>Sum: {sum}</h1>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
            <p>Count: {count}</p>
        </div>
    )
}
export default LargeSumArr;