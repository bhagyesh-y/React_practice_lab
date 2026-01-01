import React, { useState } from 'react'
import { useEffect } from 'react'

const [count, setcount] = useState(0)

const hooks = () => {
    return <>
        <div>
            The value of count is {count}
        </div>
        <button onClick={() => setcount(count + 1)}>

        </button>

    </>
}

export default hooks