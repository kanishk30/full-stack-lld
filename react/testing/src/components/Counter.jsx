import React, { useState } from 'react';

function Counter() {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(c => c + 1)
    }

    const decrement = () => {
        setCount(c => c - 1)
    }

    return (
        <>
            <h2>Counter application</h2>
            <button onClick={decrement}> Decrement  </button>
            <h4>Count is {count}</h4>
            <button onClick={increment}> Increment  </button>
        </>
    )

}

export default Counter