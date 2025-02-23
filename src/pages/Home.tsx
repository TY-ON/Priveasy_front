import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
    let navigate = useNavigate();

    navigate("/Search");

    return (
        <div>
            Home
            <Link to="/Search">Search</Link>
            <button 
                onClick={ () => {navigate("/Search");}}
            >
                Search
            </button>
        </div>
    );
}

export default Home; 

