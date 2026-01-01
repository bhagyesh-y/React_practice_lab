import React, { useState } from 'react'
import { foods } from '../foods.js'

const Displaywithmap = () => {
    let [allfoods, setallfoods] = useState(foods)
    let newdata = (cat) => {
        console.log("filter function");
        let data = foods.filter((data) => {
            return data.cat == cat
        })
        setallfoods(data)
    }
    return (
        <div>
            <h2 className='text-center'>HOTEL RAJVEER</h2>
            <div className='text-center'>
                <button type="button" className="btn btn-outline-primary" onClick={() => { setallfoods(foods) }}>all</button>
                <button type="button" className="btn btn-outline-primary" onClick={() => { newdata("snacks") }}>Snacks</button>
                <button type="button" className="btn btn-outline-secondary" onClick={() => { newdata("lunch") }}>Veg</button>
                <button type="button" className="btn btn-outline-success" onClick={() => { newdata("sweets") }}>Sweets</button>
                <button type="button" className="btn btn-outline-danger" onClick={() => { newdata("fast food") }}>vada pav</button>
                <button type="button" className="btn btn-outline-danger" onClick={() => { newdata("coffee") }}>coffee</button>
            </div>
            <div style={{ display: 'flex', flexWrap: "wrap", margin: "10px" }}>
                {allfoods.map((food) =>
                    <div className="card" style={{ width: '15rem', margin: "10px" }}>
                        <img src={food.image} className="card-img-top" height="200px" />
                        <div className="card-body">
                            <h5 className="card-title">{food.names}</h5>
                            <p className="card-text">cat:{food.cat}</p>
                            <p className="card-text">price:-{food.price}</p>
                            <a href="#" className="btn btn-primary">BUY NOW</a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
export default Displaywithmap