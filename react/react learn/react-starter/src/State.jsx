import { useState } from "react"

const Counter = () => {
    // defining a state varibale ( count ) & a function to update it ( setCount )
    const [count, setCount] = useState(0);

    // let count = 100;

    function increment() {
        // count++; not work.
        setCount(count + 1)
        // count++;
        // console.log(count)

    }

    function decrement() {
        // count--;
        // console.log(count)
        setCount(count - 1)
    }


    return (
        <>
            <button onClick={decrement}>Decrement</button>
            <h2>
                {count}
            </h2>
            <button onClick={increment}>Increment</button>
        </>
    )

}

export default Counter