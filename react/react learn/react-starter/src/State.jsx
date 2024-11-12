import { useState, useEffect } from "react"

const Counter = () => {
    // defining a state varibale ( count ) & a function to update it ( setCount )
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    // bad pratice...
    // useEffect(function () {
    //     console.log('running in useffect but not intended in count change')

    // })

    // // handling mounting...
    // useEffect(function () {
    //     console.log('Mounted....')
    // }, [])

    // handling updation...
    useEffect(() => {
        console.log(`Updation...`)
        document.title = `You clicked ${count} times...`
    }, [count])

    // useEffect(() => {
    //     console.log(`anaylytics run...`)
    //     document.title = `You clicked ${count} times...`
    // }, [count, count2])


    // useEffect(() => {
    //     const timerId = setInterval(() => {
    //         console.log(new Date())
    //     }, 1000);

    //     return () => {
    //         // ... this will run when component unmounts....
    //         clearInterval(timerId)
    //     }

    // }, []); // run only once...



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