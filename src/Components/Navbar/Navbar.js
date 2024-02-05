import React from 'react';
import logo from "../../Assets/Vector.png";
// import styles from "./Navbar.module.css";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand d-flex align-items-center mx-2" href="/"><img src={logo} alt="logo" /><span className="ms-2 fw-bolder">IGSTUDIO</span></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-bold mx-auto my-navbar">
                        <li className="nav-item mx-2">
                            <a className="nav-link text-white" href="/">Home</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link text-white" href="/">Attorneys</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link text-white" href="/">Practice Areas</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link text-white" href="/">About Us</a>
                        </li>
                    </ul>
                    <div className="d-flex align-items-center">
                        <button className="btn btn-outline-secondary mx-2 text-white border-2 border-white rounded-0 width-20" type="submit" style={{ width: '150px' }}>Contact Now</button>
                    </div>
                </div>
            </div>
        </nav>
    )
    
}
