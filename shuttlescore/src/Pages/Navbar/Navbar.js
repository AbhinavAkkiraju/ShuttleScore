import React from "react"

import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import "./Navbar.css"
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
            <ul className="logo">
            <Link to='/'><li>ShuttleScore</li></Link>
            </ul>
            <ul className="nav-links">
                <Link to='/match'><li>+ Match</li></Link>
                <Link to='/log'><li>Log</li></Link>
            </ul>
            </div>
        </nav>
    )
}

export default Navbar