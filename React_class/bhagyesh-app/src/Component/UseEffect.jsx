import React, { useEffect, useState } from "react";
const UseEffect = () => {
    let [color, setcolor] = useState('navy')
    let [c, setC] = useState(1)

    useEffect(() => {
        alert("hi is first time alert")
    })

    useEffect(() => {
        console.log('UseEffect hook run only 1st rendering')
    })

    useEffect(() => {
        console.log('useEffect')
        document.body.style.backgroundColor = color
    }, [color])

    return (
        <div>
            <select name="" id="" onChange={(e) => {
                setcolor(e.target.value)
            }}>
                <option value="">----select---</option>
                <option value="red">red</option>
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
                <option value="blue">Blue</option>
            </select>
            <h2 style={{ color: "white" }}>count:{c}</h2>
            <button onClick={() => { setC(c + 1) }}>change</button>
        </div >
    )
}

export default UseEffect