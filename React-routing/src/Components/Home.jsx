import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
    function handleclick() {
        navigate('/dashboard');
    }
    return (
        <div>Home
            <h1>Home page</h1>
            <button onClick={handleclick}>Dashboard</button>
        </div>

    )
}

export default Home