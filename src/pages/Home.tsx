import React from "react";
import { Link, useNavigate } from "react-router-dom";

import Loading from "../components/Loading"

const Home = () => {
    let navigate = useNavigate();

    return (
        <div onLoad={ () => { navigate("/search"); }}>
            <Link to="/search">Search</Link>
            <Link to="/error">Error</Link>
            <button 
                onClick={ () => {navigate("/result", {
                    state: { data: "test" },
                });}}
            >
                Result
            </button>
            
            <Loading/>
        </div>
    );
}

export default Home; 