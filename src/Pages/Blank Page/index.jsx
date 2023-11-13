import React from "react";
import { Link } from "react-router-dom";

const Blank = () => {
    return (
        <div>
            <h1>404 Not Found.</h1>
            <Link to="/">
            <button>Go back</button>
            </Link>
        </div>
    )
}

export default Blank