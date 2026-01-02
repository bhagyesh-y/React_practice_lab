import React from 'react'


const Card = (props) => {
    return (
        <div>
            <input type="text" onChange={(e) => props.setName(e.target.value)} />

            <p>value of name state in card is {props.title}{props.name}</p>

        </div>
    )
}

export default Card