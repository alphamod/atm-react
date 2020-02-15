import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class NavBar extends Component {



    render() {
        let onLogout = this.props.onLogout
        return (
            <nav className= "navbar bg-light">
                <ul className="nav">
                    <li className="nav-item">
                        <Link to="/" className="navbar-brand nav-link">Main Menu</Link>
                    </li>
                </ul>
                <h3 className="text-primary justify-content-center font-weight-bolder text-center">ATM APP</h3>
                    <ul className="nav justify-content-end mt-3">
                    <li className="nav-item">
                        <p className="text-primary nav-link">Hello, <span>{this.props.userName}</span></p>
                    </li>
                    <li className="nav-item">
                        <button className="btn text-primary" onClick={()=>{onLogout("notLogged")}}>Logout</button>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default NavBar
