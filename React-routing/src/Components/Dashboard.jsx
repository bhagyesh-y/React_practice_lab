import React from 'react'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div>Dashboard
            <h1>This is dashboard</h1>
            <Outlet />
        </div>

    )
}

export default Dashboard