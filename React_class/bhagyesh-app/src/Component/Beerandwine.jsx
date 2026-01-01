import React, { useState } from 'react'
import { wines } from '../wines'

const Beerandwine = () => {

    let [allwines, setallwines] = useState(wines)
    let filtered = (cate) => {
        let data = wines.filter((data) => {
            return data.cate == cate
        })
        setallwines(data)
    }


    return (
        <div>
            <h2 className='text-center'>Wine & Beer Shop</h2>
            <div className='text-center'>
                <button type='button' className='btn btn-info' onClick={() => { setallwines(wines) }}>All</button>
                <button type="button" className="btn btn-warning" onClick={() => { filtered("beers") }}>Beers</button>
                <button type="button" className="btn btn-info" onClick={() => { filtered("wines") }}>Wines</button>

            </div>
            <div style={{ display: "flex", margin: "10px", flexWrap: "wrap", gap: "10px" }}>
                {allwines.map((wine) =>
                    <div className="card" style={{ width: "15rem", margin: "10px" }}>
                        <img src={wine.image} className="card-img-top" height="200px" />
                        <div className="card-body">
                            <h5 className="card-title">{wine.names}</h5>
                            <p className="card-text">{wine.cate}</p>
                            <p className='card-text'>{wine.price}</p>
                            <a href="#" className="btn btn-primary">BUY NOW</a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Beerandwine