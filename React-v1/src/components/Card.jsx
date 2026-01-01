import React from 'react'

const Card = (props) => {
    return (
        <div className='card'>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <img src="https://www.shutterstock.com/image-photo/hands-typing-on-laptop-programming-600nw-2480023489.jpg" alt="" />

        </div>
    )
}

export default Card