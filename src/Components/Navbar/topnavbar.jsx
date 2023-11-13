import React from "react";
import { Link } from "react-router-dom";

import "./style.css"
const Topnavbar = () => {
    return (
        <div>
            <div className="secondary-navbar">
                <Link to="/">
                <div className="top-logo"> </div>
                </Link>
                <div className="top-navbar">
                    <p>Our Services</p>
                    <p>Why Us</p>
                    <p>Testimonial</p>
                    <p>FAQ</p>
                </div>
            </div>
        </div>
    )
}
        

export default Topnavbar