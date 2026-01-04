import React, { useState, useEffect } from 'react'

const ResizeComponent = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize)
        console.log("Resizecomponent mounted and event Listener Added")
        return () => {
            window.removeEventListener('resize', handleResize)
            console.log("Component unmounted and event listener removed")
        }

    }, [])
    // it will run on only first render

    return (
        <>
            <h1>
                Window width :{width}px
            </h1>
        </>
    )
}

export default ResizeComponent