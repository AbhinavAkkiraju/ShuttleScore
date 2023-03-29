import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
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
                <Link to='/addmatch'><li>+ Match</li></Link>
                <Link to='/matchlog'><li>Log</li></Link>
                <Link to='/account'><li>Account</li></Link>
            </ul>
            </div>
        </nav>
    )
}

export default Navbar