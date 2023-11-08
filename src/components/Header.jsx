import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header(){

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    function fakeLogOut() {
        localStorage.removeItem("loggedin")
    }

    return (
        <header>
            <Link to='/'>#VANLIFE</Link>
            <nav>
                <NavLink to='/host'
                    className={({isActive}) => isActive ? 'active-link' : null}>Host
                </NavLink>
                <NavLink to='/about'
                    className={({isActive}) => isActive ? 'active-link' : null}>About
                </NavLink>
                <NavLink to='/vans'
                    className={({isActive}) => isActive ? 'active-link' : null}>Vans
                </NavLink>
                    <Link to="login" className="login-link">Login
                </Link>
                    <button onClick={fakeLogOut}>X</button>
            </nav>
       </header>
    )
}