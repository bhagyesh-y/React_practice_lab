import React, { useState, useEffect } from 'react'

const LoggerComponent = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("loggercomponent rendered, or count is changed"), count
    });
    //  runs on every render and count change

    return (
        <>
            <div>
                <h1> Count is:{count}</h1>
                <button onClick={() => setCount(count + 1)}>Increament</button>
            </div>

        </>
    )
}

export default LoggerComponent