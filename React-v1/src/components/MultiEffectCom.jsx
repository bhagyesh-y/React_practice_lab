import React, { useEffect, useState } from 'react'

const MultiEffectCom = () => {
    const [count, setCount] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        console.log("count changed", count)
    }, [count])
    //    side-effect logic will run on everytime when count is updated

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log("Setinterval is running")
            setSeconds(prevSeconds => prevSeconds + 1)
        }, 1000)

        return () => {
            console.log("time to stop")
            clearInterval(intervalId);
        }
    }, [])

    //  it will run on component mout only
    return (
        <>
            <h1>Count:{count}</h1>
            <button onClick={() => setCount(count + 1)}>Count update</button>
            <h1>Seconds:{seconds} </h1>


        </>
    )
}

export default MultiEffectCom