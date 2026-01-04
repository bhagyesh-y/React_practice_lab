import React, { useEffect, useState } from 'react'

const TimerComponent = () => {
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        const intervelId = setInterval(() => {
            console.log("setinterval executed ")
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000)

        return () => {
            console.log("Component unmounted,clearing interval")
            clearInterval(intervelId)
        }
    }, [])
    //  it will run only on first render
    return (
        <>
            <div>
                <h1>Seconds :{seconds}</h1>
            </div>

        </>

    )
}

export default TimerComponent