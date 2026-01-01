import React from 'react'

const Calculator = () => {



    return (
        <>

            <div style={{
                height: "45vh", width: "20vw", border: "2x solid back",
                backgroundColor: "lightblue", position: "absolute", left: "30%", top: "25%"
            }}>

                <form >
                    <div>No 1 <input type="text" /> </div>
                    <div> No 2 <input type="text" /> </div>
                    <div>Result <input type="text" /> </div>
                    <button onClick={plus}>+</button>
                    <button onClick={minus}>-</button>
                    <button onClick={mul}>*</button>





                </form>
            </div>


        </>
    )
}

export default Calculator