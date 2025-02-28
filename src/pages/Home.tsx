import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
    let navigate = useNavigate();

    return (
        <div onLoad={ () => { navigate("/search"); }}>
            <Link to="/search">Search</Link>
            <button 
                onClick={ () => {navigate("/result", {
                    state: { data: "test" },
                });}}
            >
                Result
            </button>
        </div>
    );
}

export default Home; 