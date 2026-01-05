import React from 'react'
import Home from './Home'
import Dashboard from './Dashboard'
import About from './About'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            {/* <div>
                <ul>
                    <li > <a href="/">Home</a></li>
                    <li > <a href="/about">about</a></li>
                    <li > <a href="/dashboard">dashboard</a></li>

                </ul>
            </div> */}
            {/* we never use href in react  */}


            {/* <>
                <div>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/dashboard'>Dashboard</Link>
                        </li>
                    </ul>
                </div>
            </> */}

            <div>
                <ul>
                    <li>
                        <NavLink to='/' className={
                            ({ isActive }) => isActive ? "active-link" : ""
                        } >Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' className={
                            ({ isActive }) => isActive ? "active-link" : ""
                        } >About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard' className={
                            ({ isActive }) => isActive ? "active-link" : ""
                        } >Dashboard</NavLink>
                    </li>

                </ul>
            </div>


        </>
    )
}

export default Navbar