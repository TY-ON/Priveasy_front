import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
    let navigate = useNavigate();

    return (
        <div onLoad={ () => { navigate("/Search"); }}>
            <Link to="/Search">Search</Link>
            <button 
                onClick={ () => {navigate("/Result");}}
            >
                Result
            </button>
        </div>
    );
}

export default Home; 

