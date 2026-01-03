import React from 'react'
import { useEffect, useState } from 'react'

const Hooks = () => {
    const [count, setCount] = useState(0)
    const [bhagyesh, setBhagyesh] = useState(1)
    // variation : 1
    // runs on every render 
    // useEffect(() => {
    //     alert("I will render eachtime bcz of useEffect hook ")
    // })


    // variation 2
    // useEffect(() => {
    //     alert("I will run on first render only ");
    // }, [])


    // Variation 3
    // useEffect(() => {
    //     alert("I am running on every time when count is getting updated ")
    // }, [count])


    // Variation 4 - multiple dependencies
    // useEffect(() => {
    //     alert("I am running on every time when count is getting updated ")
    // }, [count, bhagyesh])

    //  Variation 5
    // this time with clean up function 
    useEffect(() => {
        alert("Count is updated")
        return () => {
            alert("Count is unmounted from UI")
        }
    }, [count])


    function handleClick() {
        setCount(count + 1);
    }
    function handleClickbhagyesh() {
        setBhagyesh(bhagyesh + 1);
    }

    return (
        <>
            <div>
                <button onClick={handleClick}>
                    Click
                </button>
                Count is {count}
                <br />
                <button onClick={handleClickbhagyesh}>
                    update bhagyesh
                </button>
                bhagyesh is {bhagyesh}
            </div>











        </>
    )
}

export default Hooks