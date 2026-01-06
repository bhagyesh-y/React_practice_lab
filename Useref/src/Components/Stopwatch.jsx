import React, { useRef, useState } from 'react'

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const timerRef = useRef(null);
    function startTimer() {
        timerRef.current = setInterval(() => {
            setTime(time => time + 1)
        }, 1000)
    }
    function stopTimer() {
        clearInterval(timerRef.current)
        timerRef.current = null;

    }
    function resetTimer() {

        stopTimer();
        setTime(0);
    }
    return (
        <>
            <div>
                <h1>Stopwatch:{time} seconds</h1>
                <hr />
                <button onClick={startTimer}
                >Start</button>

                <button onClick={stopTimer}
                >Stop</button>

                <button onClick={resetTimer}
                >Reset</button>

            </div>







        </>
    )
}

export default Stopwatch