import React, { useCallback } from 'react'

const Stopwatch = React.memo(() => {
    const [time, setTime] = React.useState(0);
    const [isTimerRunning, setIsTimerRunning] = React.useState(false);
    const timerRef = React.useRef(null)

    const formatTime = time => {
        // 9 >> 09
        // 15 >> 015 >> .slice(-2) >> 15
        // ... 00:00:00 logic to be written here.
        const getSeconds = `0${time % 60}`.slice(-2);
        const mins = Math.floor(time / 60);
        const getMinutes = `0${mins % 60}`.slice(-2);
        const hrs = Math.floor(time / 3600);
        const getHours = `0${hrs}`.slice(-2);

        return `${getHours}:${getMinutes}:${getSeconds}`
    }

    const handleStart = useCallback(() => {
        if (!isTimerRunning) {
            setIsTimerRunning(true);
            timerRef.current = setInterval(() => {
                setTime((prevTime) => prevTime + 1)
            }, 1000)
        }
    }, [])
    const handleStop = useCallback(() => {
        if (isTimerRunning) {
            clearInterval(timerRef.current);
            setIsTimerRunning(false)
        }
    }, []);

    const handleReset = () => {
        clearInterval(timerRef.current);
        setIsTimerRunning(false);
        setTime(0);
    }

    return (
        <div>
            <h4>{formatTime(time)}</h4>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )

})

export default Stopwatch;