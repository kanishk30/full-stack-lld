import React, { useEffect, useRef, useState } from 'react'

function Timer() {
    const [seconds, setSeconds] = useState(0);
    const intervalRef = useRef(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setSeconds(s => s + 1)
        }, 1000);

        // cleanup function by useEffect
        return () => {
            clearInterval(intervalRef.current)
        }
    }, [])

    return (
        <div>
            <p>Seconds: {seconds}</p>
            <button onClick={() => clearInterval(intervalRef.current)}>Stop Timer</button>
        </div>
    )
}

export default Timer